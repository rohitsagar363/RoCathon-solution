# Code Explain

This document explains the project end to end:

- what the starter repo originally had
- what we added
- what changed in each file
- how the ranking logic evolved
- why we made each decision
- what to test before submission

This is the most useful version of “every line we wrote.” It is not a literal comment on every single syntax token, but it explains every meaningful block, every added file, every changed behavior, and the reasoning behind it.

## 1. Starter State

The original starter repo was very small.

It had:

- `src/types.ts`
- `src/searchCreators.ts`
- `package.json`
- `README.md`
- `creators.json`
- `.env.example`
- `tsconfig.json`

What it did not have:

- no DB schema
- no Docker config
- no ingest script
- no demo script
- no submission generation script
- no tests
- no brand profile file
- no actual implementation inside `searchCreators`

The starter `searchCreators.ts` was only a stub:

- it took `query` and `brandProfile`
- it returned `Promise<RankedCreator[]>`
- it threw `Not implemented`

So the project started as an interface definition plus a challenge prompt, not as a real system.

## 2. Final System Overview

The final system is:

1. ingest creators offline
2. embed creator text using OpenAI
3. store embeddings and raw metrics in Postgres with `pgvector`
4. embed the query at runtime
5. retrieve the top 50 semantic matches from the vector DB
6. rerank those 50 with a commerce-aware score
7. write the top 10 required submission JSON

That means this is a real hybrid retrieval system, not a JSON linear scan.

## 3. Files We Added

We added these files:

- `src/config.ts`
- `src/embeddings.ts`
- `src/db.ts`
- `src/scoring.ts`
- `scripts/ingest.ts`
- `scripts/demo.ts`
- `scripts/generateSubmission.ts`
- `scripts/brands.ts`
- `docker-compose.yml`
- `.gitignore`
- `test/scoring.test.ts`
- `test/integration.test.ts`
- `docs/interview-guide.md`

We also changed:

- `src/searchCreators.ts`
- `package.json`
- `.env.example`
- `README.md`

## 4. File-By-File Walkthrough

### `src/config.ts`

Purpose:

- load environment variables once
- define the embedding model and dimension
- fail early if env vars are missing

What each block does:

- lines 1-3:
  loads `.env`
- lines 5-6:
  defines `text-embedding-3-small` and `1536` dimensions
- lines 8-16:
  `readRequiredEnv` ensures env values are present
- lines 18-20:
  exposes `DATABASE_URL`
- lines 22-32:
  validates the embedding provider and returns `OPENAI_API_KEY`

Why we added it:

- the starter repo had environment expectations but no centralized config
- this avoids scattering env access throughout the project

### `src/embeddings.ts`

Purpose:

- create and reuse the OpenAI client
- build creator text for offline embedding
- build query text for runtime search
- request embeddings from OpenAI

What each block does:

- lines 6-14:
  lazily create a single OpenAI client
- lines 16-24:
  validate that returned embeddings really have 1536 dimensions
- lines 26-28:
  define creator embedding text as:
  `bio + content_style_tags`
- lines 30-32:
  define query embedding text as:
  `query + brand industries`
- lines 34-38:
  helper for embedding one string
- lines 40-59:
  batch embedding call for multiple inputs

Why this matters:

- retrieval should be semantic, not business-driven
- creator embeddings exclude GMV and engagement on purpose
- batch embedding makes ingest much faster than one call per creator

### `src/db.ts`

Purpose:

- manage Postgres connections
- create schema
- upsert creator records
- run vector similarity search

What each block does:

- lines 6-14:
  define the runtime record types
- lines 16-24:
  create a singleton `pg` pool
- lines 26-28:
  convert a JS embedding array into pgvector literal syntax
- lines 30-49:
  map DB rows back into `Creator`
- lines 51-65:
  helper for safe SQL transactions
- lines 67-99:
  `ensureSchema`
  creates `vector` extension
  creates `creators` table
  creates `ivfflat` cosine index
- lines 101-165:
  `upsertCreatorBatch`
  inserts or updates creators plus embedding text and vector
- lines 167-202:
  `retrieveSemanticCandidates`
  retrieves top-N nearest neighbors by cosine distance
  returns normalized `semantic_score`
- lines 204-214:
  utility helpers for count and pool shutdown

Important design point:

- this file is what makes the project satisfy “must use a vector DB approach”
- search happens with `ORDER BY embedding <=> $1::vector`
- there is no full JSON linear scan at query time

### `src/searchCreators.ts`

Purpose:

- implement the public challenge function

What changed from the starter:

- before:
  just comments and `throw new Error('Not implemented')`
- after:
  trim query
  return `[]` for empty input
  build query embedding text
  call OpenAI embedding
  retrieve top 50 semantic candidates
  rerank them

Line-by-line meaning:

- lines 1-4:
  import the retrieval and reranking layers
- lines 11-14:
  preserve the required public API
- line 15:
  sanitize the query
- lines 17-19:
  handle empty query safely
- line 21:
  embed the query with brand context
- line 22:
  retrieve semantic candidates from pgvector
- line 24:
  rerank candidates using the hybrid scorer

This file is intentionally small because orchestration should stay thin.

### `src/scoring.ts`

Purpose:

- hold all reranking logic

This is the most important file in the project.

#### Constants

- lines 4-10:
  dataset-based thresholds for projected score, GMV, GPM, and view cutoffs
- lines 12-28:
  stopwords and low-signal query terms
- lines 30-42:
  extra weights for high-intent terms like `decor`, `design`, and `furniture`
- lines 44-54:
  synonym map so intent matching is not overly literal

Why these exist:

- the first version relied too heavily on vector similarity plus commerce
- broad “home-adjacent” creators could still score well
- these constants give the semantic side more precision

#### Utility Functions

- lines 56-58:
  `clamp` keeps scores in valid ranges
- lines 60-69:
  `ratioOfIntersection` is used for industry and age overlap
- lines 71-83:
  normalize tokens for lexical comparison
- lines 85-90:
  tokenize text into normalized terms
- lines 92-94:
  build searchable text from creator bio and tags
- lines 96-102:
  assign token weights
- lines 104-109:
  match query tokens against creator tokens via synonyms

#### Query Intent Layer

- lines 111-149:
  this is the major improvement we added after seeing early ranking quality

What it does:

- `computeQueryIntentScore` measures how much of the concrete query intent appears in the creator bio and tags
- `computeAnchorIntentScore` checks whether the strongest terms are present

Why we added it:

- pure embeddings were good for recall but still allowed adjacent false positives
- example:
  `home_gym_builds` matched `home`, `budget`, and `apartment`
  but it is not really a `decor` creator

So this layer grounds the semantic side in the exact ask without replacing vector retrieval.

#### Business Score

- lines 151-177:
  normalize business signals and combine them

Formula:

- projected score
- GMV
- GPM
- engagement
- industry fit
- audience fit

This is where we implemented the recommended `0.45 semantic / 0.55 business` philosophy at the top level.

#### Penalty Layer

- lines 179-229:
  enforce the hard constraints

What it penalizes:

- zero GMV
- zero GPM
- very low engagement
- low view floors
- no brand-industry overlap
- weak query-intent score
- missing anchor intent

What it boosts:

- strong GMV
- strong GPM
- strong query-intent score

This is the direct answer to:

- “high vibe / zero GMV must rank lower than good vibe / high GMV”

#### Final Scoring

- lines 231-254:
  combine semantic score, query-intent grounding, business score, and penalties

Important detail:

- `semantic_score` is preserved in the output
- `projected_score` stays raw `60–100`
- `final_score` is normalized to `0–1`

#### Sorting

- lines 256-280:
  deterministic rank ordering by:
  1. `final_score`
  2. `semantic_score`
  3. raw `projected_score`
  4. username

This keeps the output stable for evaluation and tests.

### `scripts/ingest.ts`

Purpose:

- make ingestion a single command

What each block does:

- lines 8-18:
  chunk utility so embeddings are requested in batches of 25
- lines 20-24:
  load `creators.json`
- lines 26-49:
  main ingest flow
  read creators
  ensure schema
  build creator embedding texts
  batch embed them
  upsert them into Postgres
  log progress
- lines 51-58:
  error handling and pool cleanup

Why we added it:

- the challenge wanted a single ingest command
- the starter repo referenced `npm run ingest` but did not include the file

### `scripts/demo.ts`

Purpose:

- print quick top results for three demo queries

What it does:

- loads brand profiles
- calls `searchCreators`
- prints the top 5 with final score, semantic score, projected score, GMV, and GPM

Why it matters:

- it gives a fast human sanity check for ranking quality

### `scripts/generateSubmission.ts`

Purpose:

- write the required submission JSON

What it does:

- default brand:
  `brand_smart_home`
- default query:
  `Affordable home decor for small apartments`
- calls `searchCreators`
- slices top 10
- writes `output/brand_smart_home.json`

This is the exact file used for submission packaging.

### `scripts/brands.ts`

Purpose:

- central source of brand profiles for demo and submission

Why it exists:

- the website said brand profiles were in the starter repo
- the downloaded starter did not actually include them

Important caveat:

- these should still be verified against the official portal before final submission

### `docker-compose.yml`

Purpose:

- run a local pgvector-enabled Postgres

What changed:

- we originally mapped to `5432`
- your machine already had a local Postgres on `5432`
- we changed to `5435`

Why:

- the app was connecting to the wrong local database
- that caused the earlier `role "postgres" does not exist` error

### `package.json`

What changed:

- starter originally had:
  `ingest`
  `demo`
  but the files were missing
- we added:
  `submit:smart-home`
  `test`
  `typecheck`

These scripts are now all real and working.

### `test/scoring.test.ts`

Purpose:

- verify the reranker logic

What it covers:

- projected score normalization
- raw projected score is preserved in output
- zero-GMV/zero-GPM candidates lose to stronger closers
- query-intent score favors decor/apartment matches over broad adjacent matches
- reranking output is sorted and contains the required fields

### `test/integration.test.ts`

Purpose:

- verify end-to-end search stability

What it covers:

- creator count after ingest is 200
- search returns 50 results
- results are ordered by final score
- repeated runs are deterministic at the top

## 5. What Changed In The Ranking Over Time

This is important because it shows how we reached the final system.

### Version 1

We implemented:

- vector retrieval
- business reranking
- penalties for zero GMV / zero GPM / low engagement

This was structurally correct, but the first smart-home results still had a few broad false positives.

Examples:

- `home_gym_builds`
- `gaming_phones_rio`
- `thrift_flip_dani`

Why they slipped through:

- they had strong commerce signals
- they had enough broad semantic overlap to survive retrieval

### Version 2

We added:

- `query_intent_score`

This improved the semantic side by asking:

- does this creator really match `decor`, `interior`, `apartment`, `budget`, `furniture`, not just `home`?

### Version 3

We added:

- weighted intent terms
- brand-industry mismatch penalties
- low query-intent penalties
- anchor-term penalties

This is what materially improved the final top 10.

## 6. How We Came To The Final Conclusion

We did not choose the final logic arbitrarily.

The process was:

1. Start from the challenge-recommended top-level blend:
   `0.45 semantic / 0.55 business`
2. Make sure the business side can beat pure vibe where needed
3. Use dataset percentiles to set business thresholds
4. Run the real smart-home query
5. Inspect the actual top results
6. Identify false positives
7. Add targeted fixes without breaking the vector DB architecture

This is how we arrived at the current system:

- keep vector retrieval for recall
- keep commerce-aware reranking for business value
- add query-intent grounding for precision

That is a much stronger explanation than saying “we guessed some weights.”

## 7. What Was There Before vs What Changed

### Before

- no working search
- no DB
- no ingest
- no demo
- no submission command
- no tests
- no reranker
- no brand profiles file

### After

- full ingestion pipeline
- pgvector storage and retrieval
- implemented `searchCreators`
- competition-first reranking
- deterministic top-10 submission output
- tests and docs

## 8. Tests Already Done

These are already working:

- `npm run typecheck`
- `npm test`
- `npm run ingest`
- `npm run submit:smart-home`

We also manually inspected the generated smart-home output and improved the scorer based on the actual results.

## 9. Tests You Should Still Do Before Submitting

Run these in order.

### Required

1. Verify the official `brand_*` JSON in `scripts/brands.ts`
2. Re-run:
   `npm run submit:smart-home`
3. Open `output/brand_smart_home.json`
4. Manually inspect the top 10

### Recommended manual ranking checks

Use `npm run demo` and inspect whether:

- zero-GMV creators are not beating proven converters
- the top 5 are actually on-theme
- obviously wrong categories are not leaking into the top 10
- the query intent still feels right, not just the commerce score

### Additional queries you should test manually

Try these kinds of queries:

- decor-focused:
  `Budget apartment decor for renters`
- organization-focused:
  `Small space organization ideas for apartments`
- smart-home-focused:
  `Affordable smart home devices for first apartments`
- stronger electronics/home crossover:
  `Connected home setup creators who drive purchases`

What you are looking for:

- decor queries should favor decor/interior creators
- smart-home device queries can allow more electronics creators
- broad high-commerce creators should not dominate unrelated queries

### Edge-case checks

You should also test:

- empty or whitespace query
- very narrow query
- a query with strong commerce words but weak vibe words
- a query with strong vibe words but low brand-industry overlap

### Submission-quality checks

Before you upload:

- confirm `scores.semantic_score` exists
- confirm `scores.projected_score` is raw `60–100`
- confirm `scores.final_score` is `0–1`
- confirm the file has exactly 10 creators
- confirm the output is deterministic across repeated runs

## 10. Final Practical Advice

If you have limited time, the highest-value final steps are:

1. verify `scripts/brands.ts`
2. regenerate the output JSON
3. read the top 10 manually
4. rehearse the architecture story in `docs/interview-guide.md`
5. record the Loom

If a judge asks what made the project strong, your answer is:

- vector DB retrieval for semantic vibe
- commerce-aware reranking for performance
- explicit false-positive handling
- query-intent grounding to improve precision

That is the cleanest explanation of both the code and the product thinking behind it.
