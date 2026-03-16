import { readFile } from 'node:fs/promises';
import path from 'node:path';

import { closePool, ensureSchema, upsertCreatorBatch, type CreatorRecord } from '../src/db';
import { buildCreatorEmbeddingText, embedTexts } from '../src/embeddings';
import type { Creator } from '../src/types';

const BATCH_SIZE = 25;

function chunk<T>(items: T[], size: number): T[][] {
  const chunks: T[][] = [];

  for (let index = 0; index < items.length; index += size) {
    chunks.push(items.slice(index, index + size));
  }

  return chunks;
}

async function loadCreators(): Promise<Creator[]> {
  const filePath = path.resolve(__dirname, '..', 'creators.json');
  const contents = await readFile(filePath, 'utf8');
  return JSON.parse(contents) as Creator[];
}

async function main(): Promise<void> {
  const creators = await loadCreators();

  console.log(`Loaded ${creators.length} creators from creators.json`);
  await ensureSchema();

  let processed = 0;

  for (const batch of chunk(creators, BATCH_SIZE)) {
    const embeddingTexts = batch.map((creator) => buildCreatorEmbeddingText(creator));
    const embeddings = await embedTexts(embeddingTexts);
    const records: CreatorRecord[] = batch.map((creator, index) => ({
      creator,
      embeddingText: embeddingTexts[index],
      embedding: embeddings[index]
    }));

    await upsertCreatorBatch(records);
    processed += batch.length;
    console.log(`Upserted ${processed}/${creators.length} creators`);
  }

  console.log('Ingest complete');
}

main()
  .catch((error) => {
    console.error(error);
    process.exitCode = 1;
  })
  .finally(async () => {
    await closePool();
  });
