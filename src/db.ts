import { Pool, type PoolClient } from 'pg';

import { EMBEDDING_DIMENSION, getDatabaseUrl } from './config';
import type { Creator } from './types';

export interface SemanticCandidate extends Creator {
  semantic_score: number;
}

export interface CreatorRecord {
  creator: Creator;
  embeddingText: string;
  embedding: number[];
}

let pool: Pool | undefined;

function getPool(): Pool {
  if (!pool) {
    pool = new Pool({ connectionString: getDatabaseUrl() });
  }

  return pool;
}

function toVectorLiteral(embedding: number[]): string {
  return `[${embedding.join(',')}]`;
}

function mapCreatorRow(row: Record<string, unknown>): Creator {
  return {
    username: String(row.username),
    bio: String(row.bio),
    content_style_tags: row.content_style_tags as Creator['content_style_tags'],
    projected_score: Number(row.projected_score),
    metrics: {
      follower_count: Number(row.follower_count),
      total_gmv_30d: Number(row.total_gmv_30d),
      avg_views_30d: Number(row.avg_views_30d),
      engagement_rate: Number(row.engagement_rate),
      gpm: Number(row.gpm),
      demographics: {
        major_gender: row.major_gender as Creator['metrics']['demographics']['major_gender'],
        gender_pct: Number(row.gender_pct),
        age_ranges: row.age_ranges as string[]
      }
    }
  };
}

async function withTransaction<T>(fn: (client: PoolClient) => Promise<T>): Promise<T> {
  const client = await getPool().connect();

  try {
    await client.query('BEGIN');
    const result = await fn(client);
    await client.query('COMMIT');
    return result;
  } catch (error) {
    await client.query('ROLLBACK');
    throw error;
  } finally {
    client.release();
  }
}

export async function ensureSchema(): Promise<void> {
  const client = await getPool().connect();

  try {
    await client.query('CREATE EXTENSION IF NOT EXISTS vector;');
    await client.query(`
      CREATE TABLE IF NOT EXISTS creators (
        username TEXT PRIMARY KEY,
        bio TEXT NOT NULL,
        content_style_tags TEXT[] NOT NULL,
        projected_score DOUBLE PRECISION NOT NULL,
        follower_count BIGINT NOT NULL,
        total_gmv_30d DOUBLE PRECISION NOT NULL,
        avg_views_30d DOUBLE PRECISION NOT NULL,
        engagement_rate DOUBLE PRECISION NOT NULL,
        gpm DOUBLE PRECISION NOT NULL,
        major_gender TEXT NOT NULL,
        gender_pct DOUBLE PRECISION NOT NULL,
        age_ranges TEXT[] NOT NULL,
        embedding_text TEXT NOT NULL,
        embedding VECTOR(${EMBEDDING_DIMENSION}) NOT NULL
      );
    `);
    await client.query(`
      CREATE INDEX IF NOT EXISTS creators_embedding_idx
      ON creators
      USING ivfflat (embedding vector_cosine_ops)
      WITH (lists = 100);
    `);
  } finally {
    client.release();
  }
}

export async function upsertCreatorBatch(records: CreatorRecord[]): Promise<void> {
  if (records.length === 0) {
    return;
  }

  await withTransaction(async (client) => {
    for (const record of records) {
      const { creator, embeddingText, embedding } = record;

      await client.query(
        `
          INSERT INTO creators (
            username,
            bio,
            content_style_tags,
            projected_score,
            follower_count,
            total_gmv_30d,
            avg_views_30d,
            engagement_rate,
            gpm,
            major_gender,
            gender_pct,
            age_ranges,
            embedding_text,
            embedding
          )
          VALUES (
            $1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14::vector
          )
          ON CONFLICT (username) DO UPDATE SET
            bio = EXCLUDED.bio,
            content_style_tags = EXCLUDED.content_style_tags,
            projected_score = EXCLUDED.projected_score,
            follower_count = EXCLUDED.follower_count,
            total_gmv_30d = EXCLUDED.total_gmv_30d,
            avg_views_30d = EXCLUDED.avg_views_30d,
            engagement_rate = EXCLUDED.engagement_rate,
            gpm = EXCLUDED.gpm,
            major_gender = EXCLUDED.major_gender,
            gender_pct = EXCLUDED.gender_pct,
            age_ranges = EXCLUDED.age_ranges,
            embedding_text = EXCLUDED.embedding_text,
            embedding = EXCLUDED.embedding;
        `,
        [
          creator.username,
          creator.bio,
          creator.content_style_tags,
          creator.projected_score,
          creator.metrics.follower_count,
          creator.metrics.total_gmv_30d,
          creator.metrics.avg_views_30d,
          creator.metrics.engagement_rate,
          creator.metrics.gpm,
          creator.metrics.demographics.major_gender,
          creator.metrics.demographics.gender_pct,
          creator.metrics.demographics.age_ranges,
          embeddingText,
          toVectorLiteral(embedding)
        ]
      );
    }
  });
}

export async function retrieveSemanticCandidates(
  queryEmbedding: number[],
  limit = 50
): Promise<SemanticCandidate[]> {
  return withTransaction(async (client) => {
    await client.query('SET LOCAL ivfflat.probes = 10;');

    const result = await client.query(
      `
        SELECT
          username,
          bio,
          content_style_tags,
          projected_score,
          follower_count,
          total_gmv_30d,
          avg_views_30d,
          engagement_rate,
          gpm,
          major_gender,
          gender_pct,
          age_ranges,
          GREATEST(0, LEAST(1, 1 - (embedding <=> $1::vector))) AS semantic_score
        FROM creators
        ORDER BY embedding <=> $1::vector
        LIMIT $2;
      `,
      [toVectorLiteral(queryEmbedding), limit]
    );

    return result.rows.map((row) => ({
      ...mapCreatorRow(row),
      semantic_score: Number(row.semantic_score)
    }));
  });
}

export async function getCreatorCount(): Promise<number> {
  const result = await getPool().query('SELECT COUNT(*) AS count FROM creators;');
  return Number(result.rows[0]?.count ?? 0);
}

export async function closePool(): Promise<void> {
  if (pool) {
    await pool.end();
    pool = undefined;
  }
}
