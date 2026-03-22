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
- `scripts/evaluate.ts`: benchmark harness with semantic-only, business-only, and hybrid comparisons
- `scripts/brands.ts`: canonical brand profiles used by demo and submission scripts
- `docs/interview-guide.md`: interview-ready architecture explanation and submission checklist
- `docs/code-explain.md`: detailed implementation walkthrough, before/after changes, and pre-submit test plan
- `docs/loom-script.md`: 2-minute demo script for the optional Loom walkthrough
- `docs/engineering-log.md`: append-only running log of major implementation changes, benchmark passes, and tuning decisions
- `docs/v1-vs-v2.md`: concise comparison between the original submission-ready version and the current explainability/evaluation upgrade
- `submissions/`: tracked submission JSON, explainability output, and evaluation artifacts

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

Run the benchmark harness:

```bash
npm run evaluate
```

Tracked submission artifacts are written to:

```bash
submissions/brand_smart_home.json
submissions/brand_smart_home_explain.json
submissions/evaluation-report.json
submissions/evaluation-report.md
submissions/hidden-test-benchmark.json
submissions/hidden-test-benchmark.md
submissions/hidden-test-learning-log.md
```

Current benchmark snapshot:

- `94 / 100` hidden-test benchmark cases passing
- `592 / 600` benchmark checks passing
- see `submissions/hidden-test-benchmark.md` for the current report

The temporary local output copy is written to:

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
query_industry_fit = inferred overlap between creator tags and the query-specific industry set
business_score = 0.42 * projected_norm + 0.24 * gmv_norm + 0.14 * gpm_norm + 0.05 * engagement_norm + 0.05 * industry_fit + 0.05 * query_industry_fit + 0.05 * audience_fit
query_intent_score = lexical coverage of concrete query terms against creator bio + tags
content_score = 0.72 * semantic_score + 0.18 * query_intent_score + 0.10 * query_industry_fit
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
* 0.72 if creator misses the query-specific industry set
* 0.80 if query_intent_score < 0.20
* 1.05 if query_intent_score >= 0.45
* 0.80 if the creator misses the query's strongest anchor term
* extra combo penalties for low-intent + wrong-category candidates
final_score = clamp(blend * penalty, 0, 1)
```

## Decision Log

- Retrieval uses only `bio + content_style_tags` so semantic recall is not polluted by commerce metrics.
- Query embeddings use `query + brand industries` so the retriever sees both free text and brand category context.
- The semantic side is stabilized with a lightweight query-intent score so broad home-adjacent creators do not outrank direct decor/apartment matches just because they have stronger commerce metrics.
- The lexical grounding layer was widened beyond smart-home terms so beauty, outdoor, and device queries also get meaningful anchors, synonym coverage, and hyphen-aware tokenization.
- Compound-token support was added for multi-word anchors like `glow-up`, `anti-aging`, `self care`, and `power bank` so lexical intent does not miss important query phrases.
- Query-industry inference uses direct hint matching instead of transitive synonym matching. That fixed a real bug where beauty queries could incorrectly infer `Health` and outdoor gear queries could incorrectly infer electronics-heavy categories.
- The anchor penalty enforces the query's strongest anchor term, not just whether any anchor matched. That prevents adjacent high-GMV creators from winning hidden crossover queries too easily.
- Explainability is produced as a sidecar artifact instead of changing the public `searchCreators` contract. That keeps the challenge API clean while making the ranking easy to defend in a Loom or interview.
- The benchmark harness compares semantic-only, business-only, and hybrid top 5s so tuning decisions are evidence-backed instead of intuitive.
- The hidden-test benchmark now includes 100 likely cross-brand hackathon cases, and the learning log records how scorer changes moved the benchmark from `34 / 100` passing cases at baseline to `94 / 100` in the current tuned version.
- `projected_score` remains raw `60–100` in output because that is part of the public challenge contract; only `final_score` is normalized.
- The percentile thresholds (`58248`, `44`, `203880`, `15829`, `27`) come from the actual dataset distribution. They create a stronger business floor than pure semantic search while staying interpretable.
- Zero-GMV and zero-GPM creators are penalized after the blend so highly on-theme but commercially empty results cannot dominate the top ranks.

## Verification

Type-check the project:

```bash
npm run typecheck
```

Run tests:

```bash
npm test
```

Run the benchmark harness:

```bash
npm run evaluate
```

The integration smoke test requires `OPENAI_API_KEY`, `DATABASE_URL`, and a populated Postgres instance from `npm run ingest`. Without those env vars, only the unit tests run.
