# RoC Hackathon — Semantic Projected Score Engine

This repo implements a hybrid creator search engine that balances semantic relevance with commerce performance. Retrieval is driven by OpenAI embeddings stored in `pgvector`; reranking applies a competition-first business layer so vibe-only creators with no sales history do not crowd out closers.

## Architecture

- Retrieval: `text-embedding-3-small` embeddings over `bio + content_style_tags`
- Vector store: Postgres + `pgvector` with cosine similarity search
- Candidate set: top 50 semantic matches from Postgres
- Reranking: semantic similarity grounded with query-intent matching, then blended with projected score, GMV, GPM, engagement, industry fit, and audience fit
- Output: `RankedCreator[]` with `scores.semantic_score`, `scores.projected_score`, and `scores.final_score`

## Project Layout

- `src/searchCreators.ts`: main search entrypoint
- `src/db.ts`: schema setup, ingestion upserts, and vector retrieval
- `src/embeddings.ts`: OpenAI embedding client plus embedding text builders
- `src/scoring.ts`: normalized business score, penalties, and final ranking
- `scripts/ingest.ts`: one-command schema creation plus data ingest
- `scripts/demo.ts`: demo runner using three brand profiles
- `scripts/generateSubmission.ts`: writes the required top-10 submission JSON
- `scripts/brands.ts`: canonical brand profiles used by demo and submission scripts
- `docs/interview-guide.md`: interview-ready architecture explanation and submission checklist
- `docs/code-explain.md`: detailed implementation walkthrough, before/after changes, and pre-submit test plan

## Requirements

- Node.js 20+
- Docker
- An OpenAI API key with access to `text-embedding-3-small`

## Environment

Copy the example file and set your values:

```bash
cp .env.example .env
```

Required variables:

- `OPENAI_API_KEY`
- `DATABASE_URL`
- `EMBEDDING_PROVIDER=openai`

If you use the included Docker setup, `DATABASE_URL` can be:

```bash
postgresql://postgres:postgres@127.0.0.1:5435/rocathon
```

## Local Postgres Setup

Start pgvector locally:

```bash
docker compose up -d
```

The ingest script bootstraps the database on first run:

- creates the `vector` extension
- creates the `creators` table
- creates the cosine similarity index
- embeds all 200 creators
- upserts every record

## Install And Run

Install dependencies:

```bash
npm install
```

Ingest the dataset:

```bash
npm run ingest
```

Run the demo queries:

```bash
npm run demo
```

Generate the required submission output for `brand_smart_home`:

```bash
npm run submit:smart-home
```

The JSON file is written to:

```bash
output/brand_smart_home.json
```

## Scoring Formula

The final reranker uses the plan baseline with explicit percentile cutoffs derived from this dataset.

Normalized business score:

```text
projected_norm = (projected_score - 60) / 40
gmv_norm = clamp(log1p(total_gmv_30d) / log1p(58248), 0, 1)
gpm_norm = clamp(gpm / 44, 0, 1)
engagement_norm = clamp((engagement_rate - 0.01) / 0.14, 0, 1)
industry_fit = intersection(content_style_tags, brand.industries) / max(1, brand.industries.length)
gender_match = 1 if creator.major_gender === brand.target_audience.gender else 0
age_overlap = intersection(creator.age_ranges, brand.target_audience.age_ranges) / max(1, brand.target_audience.age_ranges.length)
audience_fit = 0.6 * gender_match + 0.4 * age_overlap
business_score = 0.45 * projected_norm + 0.25 * gmv_norm + 0.15 * gpm_norm + 0.05 * engagement_norm + 0.05 * industry_fit + 0.05 * audience_fit
query_intent_score = lexical coverage of concrete query terms against creator bio + tags
content_score = 0.8 * semantic_score + 0.2 * query_intent_score
blend = 0.45 * content_score + 0.55 * business_score
```

Hard constraints:

```text
penalty = 1.0
* 0.65 if total_gmv_30d == 0
* 0.85 if gpm == 0
* 0.85 if engagement_rate <= 0.02
* 0.90 if avg_views_30d < 203880
* 1.05 if total_gmv_30d >= 15829
* 1.05 if gpm >= 27
* 0.80 if creator has no overlap with brand industries
* 0.80 if query_intent_score < 0.20
* 1.05 if query_intent_score >= 0.45
* 0.80 if the creator misses the query's strongest anchor term
final_score = clamp(blend * penalty, 0, 1)
```

## Decision Log

- Retrieval uses only `bio + content_style_tags` so semantic recall is not polluted by commerce metrics.
- Query embeddings use `query + brand industries` so the retriever sees both free text and brand category context.
- The semantic side is stabilized with a lightweight query-intent score so broad home-adjacent creators do not outrank direct decor/apartment matches just because they have stronger commerce metrics.
- `projected_score` remains raw `60–100` in output because that is part of the public challenge contract; only `final_score` is normalized.
- The percentile thresholds (`58248`, `44`, `203880`, `15829`, `27`) come from the actual dataset distribution. They create a stronger business floor than pure semantic search while staying interpretable.
- Zero-GMV and zero-GPM creators are penalized after the blend so highly on-theme but commercially empty results cannot dominate the top ranks.

## Brand Profiles

The downloaded starter repo referenced `scripts/demo.ts` and “all 3 brand profiles,” but those files were missing locally. This repo includes `scripts/brands.ts` so the demo and submission commands work from a single source of truth.

If your portal shows different official `brand_*` objects, update `scripts/brands.ts` before generating the final submission file.

## Verification

Type-check the project:

```bash
npm run typecheck
```

Run tests:

```bash
npm test
```

The integration smoke test requires `OPENAI_API_KEY`, `DATABASE_URL`, and a populated Postgres instance from `npm run ingest`. Without those env vars, only the unit tests run.
