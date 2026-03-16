# V1 Vs V2

This document compares the previous submission-ready version of the project with the current `codex/v2-eval-explain` branch.

The key point is:

- V1 made the search engine work end to end
- V2 did not replace the core ranking pipeline
- V2 added proof, explainability, and tracked deliverables so the project is easier to defend in judging and interviews

## Snapshot

### V1

V1 already had:

- OpenAI creator and query embeddings
- Postgres + `pgvector` retrieval
- top-50 semantic candidate retrieval
- commerce-aware reranking
- ingest, demo, and submission scripts
- unit and integration coverage
- interview and implementation docs

V1 was the first version that was functionally submission-capable.

### V2

V2 keeps all of the above and adds:

- explainability output for ranked creators
- an evaluation harness with benchmark cases
- tracked submission artifacts under `submissions/`
- clearer proof that hybrid ranking is better than semantic-only or business-only

V2 is about making the project more defensible and more polished, not rebuilding the engine.

## What Did Not Change

These parts are intentionally the same between V1 and V2:

- `src/searchCreators.ts` still embeds the query, retrieves the top 50 from pgvector, and reranks them
- the system still uses `bio + content_style_tags` for creator embeddings
- the system still uses `query + brand industries` for query embeddings
- retrieval still happens in Postgres with vector search, not a linear scan
- the main hybrid ranking formula still prioritizes commerce over pure vibe
- ingest, schema creation, and DB bootstrap behavior are unchanged

This is important in interviews because it shows V2 did not move the goalposts. It made the same system easier to evaluate and explain.

## What Changed In V2

## 1. Explainability Layer

New file:

- `src/explain.ts`

Why it was added:

- judges and interviewers will ask why a creator ranked highly
- raw scores alone are not enough for a convincing demo

What it does:

- turns a ranked result into a human-readable explanation
- highlights positive signals
- highlights risks or penalties
- includes score breakdowns for semantic, business, and penalty components

What changed in practice:

- V1 could rank creators well
- V2 can now explain each ranking decision clearly

## 2. Scoring Refactor For Breakdown Output

Changed file:

- `src/scoring.ts`

Why it changed:

- V1 computed the final score directly
- V2 needed reusable internal structures so the same scoring logic could power both ranking and explainability

What was added:

- `BusinessScoreComponents`
- `PenaltyFlags`
- `ScoreWeights`
- `ScoreBreakdown`
- helper functions to compute reusable components and penalty decisions

What did not change:

- the ranking intent stayed the same
- the hybrid score still rewards commerce-backed creators and penalizes zero-GMV false positives

This was mostly a structural improvement, not a new formula.

## 3. Evaluation Harness

New files:

- `scripts/evaluationCases.ts`
- `scripts/evaluate.ts`

Why they were added:

- many teams will say their weights are “good”
- far fewer teams will show benchmark evidence

What they do:

- define a small benchmark set of realistic brand-query cases
- compare three ranking modes:
  - semantic-only
  - business-only
  - hybrid
- write machine-readable and human-readable reports

Artifacts produced:

- `submissions/evaluation-report.json`
- `submissions/evaluation-report.md`

Why this matters:

- it gives you a measurement story in the interview
- it helps show that tuning was evidence-backed, not just intuitive

## 4. Tracked Submission Artifacts

Changed file:

- `scripts/generateSubmission.ts`

New folder:

- `submissions/`

Why this changed:

- V1 wrote the generated JSON to `output/`
- `output/` is gitignored
- that meant the exact submission artifact was not preserved in the repo

What V2 does:

- still writes the local output copy to `output/brand_smart_home.json`
- also writes tracked copies to:
  - `submissions/brand_smart_home.json`
  - `submissions/brand_smart_home_explain.json`

Why this matters:

- your repo now contains the actual artifact you can point judges to
- the explainability sidecar makes the ranking audit-friendly

## 5. Extra Test Coverage

New file:

- `test/explain.test.ts`

Why it was added:

- once explainability became part of the repo, it needed correctness checks

What it verifies:

- score breakdowns are consistent with final scoring
- explainability output contains the expected highlights and signals

## File-Level Comparison

### Unchanged Core Flow

- `src/searchCreators.ts`
- `src/db.ts`
- `src/embeddings.ts`
- `scripts/ingest.ts`
- `scripts/demo.ts`
- `docker-compose.yml`

These files still define the actual retrieval architecture.

### Changed In V2

- `src/scoring.ts`
- `scripts/generateSubmission.ts`
- `package.json`
- `README.md`
- `docs/interview-guide.md`
- `docs/code-explain.md`

### Added In V2

- `src/explain.ts`
- `scripts/evaluationCases.ts`
- `scripts/evaluate.ts`
- `test/explain.test.ts`
- `submissions/README.md`
- `submissions/brand_smart_home.json`
- `submissions/brand_smart_home_explain.json`
- `submissions/evaluation-report.json`
- `submissions/evaluation-report.md`

## Behavioral Difference

The most honest description is:

- V1 improved the ranking quality
- V2 improved the evidence and presentation quality

In other words:

- V1 answered: “Does the search engine work?”
- V2 answered: “Can I prove why it works and show the artifact cleanly?”

That distinction is useful in the interview because it shows you know the difference between model quality and evaluation quality.

## Why V2 Is Better For Judging

V2 stands out more because it gives three things many hackathon repos skip:

- a tracked final submission artifact
- a benchmark harness
- explainability for each result

That makes the project look more like an engineered system and less like a one-off demo.

## How To Explain This Upgrade

You can say this almost verbatim:

“Version 1 made the engine work end to end: ingest, vector retrieval, reranking, and submission output. Version 2 was about turning that into a stronger competition artifact. I added an evaluation harness to compare semantic-only, business-only, and hybrid ranking, and I added explainability so each ranked creator can be justified with a score breakdown and penalty flags. I also started tracking the exact submission artifact inside the repo, so the project is easier to inspect and demo.”

## When To Mention V1 Vs V2

Use this comparison if someone asks:

- what changed recently
- how you iterated on the system
- how you validated your ranking choices
- what makes your repo stronger than a basic semantic-search submission

If they do not ask, keep the summary short and lead with the final architecture instead.
