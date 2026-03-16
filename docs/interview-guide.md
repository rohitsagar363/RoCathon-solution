# Interview Guide

## 30-Second Summary

I built a two-stage hybrid search engine for creators. First, I use semantic retrieval with OpenAI embeddings and `pgvector` to find creators whose content vibe matches the query. Then I rerank those candidates with a business layer that favors creators who are not only relevant, but also likely to convert, using projected score, GMV, GPM, engagement, industry fit, audience fit, and a lightweight query-intent score. This avoids the biggest failure mode of pure AI search: returning creators who sound right but do not drive revenue.

## End-To-End Architecture

### 1. Offline Ingestion Pipeline

The pipeline starts with `creators.json`, which contains 200 creators and their content plus commerce metrics.

During ingest:

1. I read the dataset.
2. I build an embedding text for each creator using only:
   `bio + content_style_tags`
3. I send those texts to OpenAI `text-embedding-3-small`.
4. I create the Postgres schema if it does not exist.
5. I store the raw creator fields, the embedding text, and the `vector(1536)` embedding in Postgres.
6. I upsert records so ingest is repeatable and idempotent.

Why this matters:

- I keep the embedding purely semantic.
- I do not mix GMV or engagement into the embedding, because retrieval should answer “who matches the vibe?” and reranking should answer “who is commercially strongest?”

Relevant files:

- `scripts/ingest.ts`
- `src/embeddings.ts`
- `src/db.ts`

### 2. Storage Layer

I use Postgres with the `pgvector` extension.

The `creators` table stores:

- creator identity and profile fields
- metrics like GMV, views, engagement, and GPM
- demographics
- the semantic embedding text
- the embedding vector

Why Postgres + pgvector:

- It is simple to run locally with Docker.
- It matches the challenge recommendation.
- It gives me cosine similarity search without adding another service.
- It keeps retrieval data and business data in one place.

Relevant file:

- `src/db.ts`

### 3. Online Query Flow

When `searchCreators(query, brandProfile)` is called:

1. I build the query embedding text using:
   `query + brand industries`
2. I embed that query text with the same embedding model.
3. I run cosine similarity search in Postgres.
4. I retrieve the top 50 semantic matches.
5. I compute a lightweight query-intent score from the concrete query terms against each creator bio and tag set.
6. I rerank those 50 using a commerce-aware scoring function.
7. I return ranked creators with:
   `semantic_score`, `projected_score`, and `final_score`

Why I add brand industries to the query embedding:

- It gives retrieval more context about what the brand sells.
- It improves recall for creators whose wording may not exactly match the raw user query.

Relevant file:

- `src/searchCreators.ts`

### 4. Two-Stage Ranking Logic

The architecture is intentionally split into retrieval and reranking.

Stage 1: Semantic retrieval

- Focus: vibe
- Metric: cosine similarity
- Output: top 50 candidates

Stage 2: Business reranking

- Focus: closers, not just matches
- Metric: weighted hybrid score

The normalized business score uses:

- projected score
- total GMV over 30 days
- GPM
- engagement rate
- industry fit
- audience fit

Then I build the semantic side as:

- `semantic_score` from pgvector cosine similarity
- `query_intent_score` from concrete keyword and synonym coverage in the creator bio and tags
- `content_score = 0.8 * semantic_score + 0.2 * query_intent_score`

Then I blend:

- `45% semantic relevance`
- `55% business strength`

After that, I apply hard penalties and boosts:

- heavy penalties for zero GMV and zero GPM
- penalties for very low engagement and weak view floors
- penalties for no brand-industry overlap
- penalties for missing the query's strongest anchor term
- boosts for strong GMV and strong GPM

This is the key design choice of the whole system:

- pure semantic search can surface creators who feel perfect but cannot sell
- pure performance ranking can ignore the brand vibe
- the hybrid model keeps both, but lets commerce win when there is tension

Relevant file:

- `src/scoring.ts`

## Why This Architecture Is Strong

### It separates concerns

- embeddings solve semantic understanding
- reranking solves business prioritization

That makes the system easier to reason about and easier to tune.

### It is robust against false positives

The dataset has many creators with zero GMV and zero GPM. A pure vector search would absolutely return some of them for on-theme queries. My reranker explicitly pushes those results down.

### It scales conceptually

Even though the dataset is only 200 creators, I still built it like a scalable retrieval system:

- precompute embeddings offline
- store them in a vector index
- retrieve a candidate pool
- rerank with structured business features

That is the same architecture I would use for a larger marketplace, just with more production infrastructure.

## Design Decisions To Explain In The Interview

### How did you decide the weights?

I treated the recommended weights as the baseline, not as random suggestions.

The starting point was:

- `semantic = 0.45`
- `business = 0.55`

My reasoning was:

1. The challenge explicitly recommends that split, so it is the most defensible initial hypothesis.
2. It already leans slightly toward commerce, which matches the rule that high-vibe / zero-GMV creators should lose to good-vibe / high-GMV creators.
3. I did not want to overfit by changing the headline weights too aggressively before validating whether the baseline already solved the problem.

The key design decision is that I tuned the business layer before changing the top-level blend.

Instead of jumping straight to something like `0.30 / 0.70`, I kept the top-level blend close to the recommended baseline and used hard constraints underneath it:

- penalty for `GMV = 0`
- penalty for `GPM = 0`
- penalty for very low engagement
- boosts for strong GMV and strong GPM

Why this is a better explanation:

- if I over-weight business too much, the search stops feeling semantic and becomes a commerce leaderboard
- if I over-weight semantics too much, I violate the challenge rule
- keeping `0.45 / 0.55` while adding hard business penalties gives the most explainable compromise

The final conclusion I would state is:

“I started from the recommended `0.45 / 0.55` split because it is the intended baseline and already favors commerce slightly. Then I validated whether that blend correctly demoted zero-GMV false positives. Instead of moving the headline weights too far, I tuned the business penalties and boosts, because that preserves semantic relevance while still enforcing the hard rule that commercially weak creators should not outrank proven converters.”

### Why did you not put GMV into the embedding text?

Because GMV is not semantic meaning. If I put commerce features into the text embedding, retrieval becomes noisy and less interpretable. I want embeddings to answer relevance, then explicit scoring to answer business value.

### Why use two stages instead of one score directly in SQL?

Because semantic retrieval and business ranking solve different problems. The two-stage design gives better control:

- retrieval maximizes recall for vibe
- reranking optimizes precision for revenue

### Why add a query-intent score if you already have embeddings?

Because embeddings are good at broad vibe matching, but they can still over-reward adjacent concepts. For example, “home gym for apartments” can look close to “home decor for small apartments” in vector space. The query-intent score gives the semantic side a small amount of explicit grounding in the concrete request, like `decor`, `interior`, `apartment`, or `budget`.

### Why top 50 candidates?

It is large enough to give reranking room to work, but small enough to stay fast and deterministic. For this dataset, it comfortably covers the relevant semantic neighborhood.

### Why these thresholds?

The thresholds in the reranker come from the actual dataset percentiles, not arbitrary constants. That makes the boosts and penalties grounded in the distribution of the challenge data.

### Why keep `projected_score` raw in the output?

Because the challenge contract expects the original `60–100` score to be visible. I normalize it internally for scoring, but preserve the raw value in the API response.

## Likely Interview Questions

### What is the biggest risk in your current implementation?

The biggest short-term risk is that the official `brand_*` profiles were missing from the downloaded starter repo, so those need to be verified against the portal before final submission.

### If you had more time, what would you improve?

- calibrate the weights against a held-out evaluation set
- add ablation testing to prove each feature helps
- cache query embeddings
- add structured observability for retrieval quality and rank shifts
- add a fallback embedding provider for resilience

### How would you scale this to millions of creators?

- batch offline embedding jobs
- partition or shard creator storage if needed
- tune `ivfflat` or move to HNSW if the workload grows
- cache hot queries and brand profiles
- log click/conversion signals and train a learned reranker

## Exact Story You Can Tell

I designed the system around the central challenge tradeoff: “vibe” versus “performance.” My solution first uses embeddings to understand the creative intent behind a query, then uses explicit business scoring to ensure the final results are creators who can actually convert. The retrieval layer asks “who feels right for this brand?” The reranker asks “who is most likely to drive GMV?” That separation made the system both explainable and tunable, and it directly addresses the challenge warning that high-vibe, zero-GMV creators should rank below slightly less perfect but commercially proven creators.

## What I Changed To Improve Results

The first version was structurally correct, but it still let some broad high-commerce creators rank too well for the smart-home query.

Examples of the problem:

- `home_gym_builds` was scoring well because it matched `home`, `budget`, and `apartment`
- `gaming_phones_rio` could still leak in because it had strong commerce metrics and some industry overlap
- some creators were semantically adjacent, but not truly aligned with `decor` or `interior` intent

I made three important improvements.

### 1. I added query-intent grounding on top of embeddings

Embeddings are strong for broad semantic understanding, but they can still over-reward adjacent concepts.

So I added:

- `query_intent_score`

This checks how well the creator bio and tags cover the concrete query terms and synonyms.

For example, for a query like:

- `Affordable home decor for small apartments`

the intent layer looks for ideas like:

- `decor`
- `interior`
- `furniture`
- `layout`
- `apartment`
- `renter`
- `tiny`
- `budget`

Then I combine that with vector similarity:

- `content_score = 0.8 * semantic_score + 0.2 * query_intent_score`

This made the semantic side more precise without replacing the vector DB approach.

### 2. I added penalties for off-theme candidates

I kept the business-heavy reranker, but I made it stricter about relevance.

I added extra penalties when:

- the creator has no overlap with the brand industries
- the query-intent score is very low
- the creator misses the query’s strongest anchor term

This helps remove creators who are commercially strong but still wrong for the exact ask.

### 3. I reweighted the important query terms

Not all words in a query are equally important.

For the smart-home prompt:

- `decor`
- `design`
- `interior`
- `furniture`

should matter more than generic words like:

- `home`
- `small`

So I gave stronger weights to the terms that better represent the core buying intent.

That change pushed true decor/interior creators up and broad home-adjacent creators down.

## How To Explain The Improvement In The Interview

You can say:

“After I got the first end-to-end version working, I inspected the top results for the required smart-home query. I noticed a few false positives: creators who were broadly home-related or commercially strong, but not really decor-focused. So I improved the reranker in three ways. First, I added a lightweight query-intent score on top of vector similarity. Second, I penalized off-theme candidates even if they had strong commerce metrics. Third, I reweighted the most meaningful query terms, like `decor` and `interior`, above broad terms like `home`. That gave me results that were still commercially strong, but much closer to the exact query intent.” 

That explanation is strong because it shows:

- you validated actual outputs, not just code
- you found false positives
- you improved relevance without abandoning the vector DB approach
- you tuned the system in a principled way

## Before And After Framing

The before state:

- strong architecture
- correct hybrid ranking concept
- still slightly too tolerant of broad adjacent matches

The after state:

- vector retrieval still handles semantic recall
- reranking still favors commerce
- query-intent grounding improves precision
- the top 10 is more aligned with the actual submission ask

## One-Minute Version For The Interview

If they ask what made your results better, say:

“Initially, the system was doing the right high-level thing: vector retrieval plus commerce reranking. But when I inspected the smart-home results, I saw that some broad high-commerce creators were still getting through. To fix that, I added a lightweight query-intent score on top of embeddings, penalized candidates with weak brand and query alignment, and upweighted the most meaningful terms in the query such as `decor`, `interior`, and `furniture`. That improved precision without sacrificing the vector-DB-based semantic retrieval.”

## What To Emphasize If They Push Hard

If they challenge you with “why not just use embeddings?” say:

- embeddings are excellent for recall
- rerankers are needed for precision
- business signals are needed for commercial viability
- query-intent grounding is needed to reduce adjacent false positives

If they ask “why not just rank by GMV?” say:

- then you lose the creative match
- the challenge explicitly requires vibe plus performance
- the system needs both retrieval quality and business quality

If they ask “why is this better than a linear scan?” say:

- embeddings are precomputed offline
- retrieval is done via pgvector nearest-neighbor search
- the query only reranks a candidate pool, not the whole dataset
- this is the correct scalable search architecture

## Next Steps Before Submission

1. Verify `scripts/brands.ts` against the official portal and replace any placeholder values.
2. Create `.env` with your real `OPENAI_API_KEY` and `DATABASE_URL`.
3. Start Postgres with `docker compose up -d`.
4. Run `npm run ingest`.
5. Run `npm run demo` and sanity-check the top results.
6. Run `npm run submit:smart-home` to generate `output/brand_smart_home.json`.
7. Open the JSON and confirm the top 10 are both relevant and commercially credible.
8. If any result looks semantically right but commercially weak, adjust the weights in `src/scoring.ts`, rerun ingest only if needed, and regenerate output.
9. Push the repo to GitHub.
10. Record the optional Loom by walking through the architecture above in this order:
    ingestion, vector retrieval, reranking, false-positive handling, final output.

## Files To Mention In The Interview

- `src/searchCreators.ts`
- `src/scoring.ts`
- `src/db.ts`
- `src/embeddings.ts`
- `scripts/ingest.ts`
- `scripts/generateSubmission.ts`
