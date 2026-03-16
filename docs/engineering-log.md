# Engineering Log

This is the running implementation log for the project.

Purpose:

- keep an append-only record of what changed
- capture why each change happened
- preserve benchmark results across tuning passes
- make future iterations easier to explain in judging and interviews

This file should be updated on major implementation steps going forward.

## 2026-03-16: Starter Repo To Working System

Initial repo state:

- starter types existed
- `searchCreators` was a stub
- no DB schema
- no ingest script
- no demo script
- no submission script
- no tests
- no official brand profile file in the local starter

What was added:

- `src/config.ts`
- `src/embeddings.ts`
- `src/db.ts`
- `src/scoring.ts`
- `scripts/ingest.ts`
- `scripts/demo.ts`
- `scripts/generateSubmission.ts`
- `scripts/brands.ts`
- `docker-compose.yml`
- `test/scoring.test.ts`
- `test/integration.test.ts`

Architecture decision:

- vector retrieval in Postgres with `pgvector`
- commerce-aware reranking after retrieval
- `bio + content_style_tags` for creator embeddings
- `query + brand industries` for query embeddings

Reason:

- satisfy the vector DB requirement
- keep retrieval semantic
- keep commerce logic explicit and explainable

## 2026-03-16: First Ranking Hardening Pass

Problem found:

- broad home-adjacent creators were still slipping into smart-home results

What changed:

- added query-intent scoring on top of embeddings
- added weighted query terms
- added stronger penalties for low-intent and off-theme creators
- added anchor-term logic

Result:

- smart-home submission quality improved materially
- zero-GMV and low-fit false positives were pushed down

## 2026-03-16: V2 Explainability And Evaluation

What changed:

- added `src/explain.ts`
- added tracked submission artifacts in `submissions/`
- added `scripts/evaluate.ts`
- added `scripts/evaluationCases.ts`
- added `test/explain.test.ts`

Why:

- make the repo easier to judge
- show why each creator ranked where they did
- compare hybrid ranking with semantic-only and business-only baselines

Artifacts added:

- `submissions/brand_smart_home.json`
- `submissions/brand_smart_home_explain.json`
- `submissions/evaluation-report.json`
- `submissions/evaluation-report.md`

## 2026-03-16: Cross-Brand Tuning

Problem found:

- the first strong version worked well for smart-home
- it was weaker on beauty and outdoor crossover queries

What changed:

- broadened synonym and anchor vocabulary beyond smart-home
- made tokenization hyphen-aware
- enforced the strongest anchor term more strictly

Result:

- the smaller benchmark across smart-home, beauty, and outdoor improved and passed cleanly

## 2026-03-16: 100-Case Hidden-Test Benchmark

Goal:

- simulate likely hidden hackathon tests instead of relying on a few hand-picked examples

What changed:

- expanded the benchmark to 100 cases
- added query-specific preferred industries and stricter evaluation expectations
- wrote full reports to:
  - `submissions/hidden-test-benchmark.json`
  - `submissions/hidden-test-benchmark.md`
  - `submissions/hidden-test-learning-log.md`

Baseline result:

- cases passing: `34 / 100`
- checks passing: `469 / 600`

Main failure clusters:

- low average query-intent
- low average anchor-intent
- wrong query-specific industries in the top 5

## 2026-03-16: Hidden-Test Tuning Pass 1

What changed:

- expanded lexical weights and synonyms
- added inferred query-specific industry fit
- added stronger penalties for wrong-category plus low-intent combinations
- added `query_industry_score` into the semantic-side blend

Result:

- cases passing: `59 / 100`
- checks passing: `552 / 600`

## 2026-03-16: Hidden-Test Tuning Pass 2

Problem found after pass 1:

- query-industry inference was still too generous
- generic commerce words were still inflating intent scores

What changed:

- query-industry inference became truly query-specific instead of carrying the full brand set forward
- more generic framing words were marked low-signal

Result:

- cases passing: `75 / 100`
- checks passing: `572 / 600`
- check pass rate: `0.9533`

Brand-level result:

- smart-home: `26 / 34`
- beauty: `20 / 33`
- outdoor: `29 / 33`

## 2026-03-16: Hidden-Test Tuning Pass 3

Problem found after pass 2:

- the model still missed a cluster of long-tail beauty, outdoor device, and smart-home wording cases
- several queries needed more literal lexical coverage, not a new architecture change

What changed:

- added more targeted vocabulary for beauty, outdoor, and device-specific queries
- widened lexical coverage for terms like `drugstore`, `dupes`, `sunscreen`, `camera`, `connected`, `rental`, and `fishing`
- kept the core ranking formula stable while improving the intent layer

Result:

- cases passing: `82 / 100`
- checks passing: `580 / 600`
- outdoor and beauty both improved without regressing the main smart-home submission

## 2026-03-16: Hidden-Test Tuning Pass 4

Problem found after pass 3:

- preferred-industry leakage still appeared on some beauty and outdoor queries
- multi-word and hyphenated anchors like `glow-up` and `power bank` were still under-counted

What changed:

- query-industry inference stopped using broad transitive synonym matching and now relies on direct query hint matching
- tokenization now emits compound tokens when adjacent words form a known concept like `glowup`, `antiaging`, `selfcare`, or `powerbank`

Why this mattered:

- it fixed a real query-industry bug where beauty intent could incorrectly pull in `Health`
- it made outdoor gear queries less likely to admit generic electronics creators just because the word `gear` appeared
- it improved lexical precision without touching the vector retrieval layer

Result:

- cases passing: `94 / 100`
- checks passing: `592 / 600`
- smart-home: `29 / 34`
- beauty: `32 / 33`
- outdoor: `33 / 33`

Stopping decision:

- the remaining 6 misses are mostly dataset edge cases in smart-home lighting and device wording
- I stopped here because further tuning looked more like benchmark overfitting than general improvement

## Current Status

What is strong now:

- vector DB architecture is correct
- main smart-home submission is strong
- the repo has clear docs and tracked artifacts
- the model is materially more robust on hidden-style queries than before
- the current hidden benchmark is `94 / 100` cases and `592 / 600` checks

What still remains:

- the remaining failures are now a small smart-home device and lighting cluster
- official brand profiles should still be verified against the portal

## Update Rule

For future work, append new entries here with:

1. the problem observed
2. the files changed
3. the reason for the change
4. the measured outcome

That will keep the repo history explainable even if the code keeps evolving.
