# Loom Script

This is a concise 2-minute script for the optional RoCathon demo.

## Structure

### 1. Problem

"The challenge is not just semantic search. The hard part is balancing vibe with commerce, so a high-vibe but zero-GMV creator should not outrank a good-vibe creator with strong sales performance."

### 2. Architecture

"I built this as a two-stage system. First, I ingest the creator dataset, generate OpenAI embeddings for `bio + content_style_tags`, and store them in Postgres with `pgvector`. At query time, I embed `query + brand industries` and retrieve the top 50 creators by cosine similarity. That gives me semantic recall using a real vector database instead of a linear scan."

### 3. Reranking

"Then I rerank those 50 creators with a commerce-aware scoring layer. The top-level blend stays close to the recommended baseline: 45% semantic and 55% business. The business side uses projected score, GMV, GPM, engagement, industry fit, query-specific industry fit, and audience fit. After that, I apply hard penalties for zero GMV, zero GPM, low engagement, missing anchor intent, and wrong query category. That is what enforces the rule that commercially weak creators should not beat proven converters."

### 4. Precision Improvements

"The main improvement after the first working version was adding explicit query grounding on top of embeddings. I built a query-intent layer with weighted anchors and synonyms, then later added compound-token support for phrases like `glow-up`, `anti-aging`, `self care`, and `power bank`. I also tightened query-industry inference so it uses direct query hints instead of overly broad synonym propagation. That reduced false positives without changing the retrieval architecture."

### 5. Validation

"To avoid tuning by intuition, I added a benchmark harness with semantic-only, business-only, and hybrid ablations. I then scaled that into a 100-case hidden-test-style benchmark across smart-home, beauty, and outdoor queries. The current version improved from 34 out of 100 passing cases at baseline to 94 out of 100, while keeping the required smart-home submission output strong."

### 6. Close

"For the required query, the top results are commercially credible and on-theme, led by creators like `small_space_living_lee`, `mid_century_milo`, and `paint_pro_tips_mick`. So the final system is not just semantically relevant, it is optimized for the actual judging tradeoff between relevance and business performance."

## Screen Flow

Show these in order:

1. `README.md`
2. `src/searchCreators.ts`
3. `src/scoring.ts`
4. `submissions/brand_smart_home.json`
5. `submissions/hidden-test-benchmark.md`

## Optional 20-Second Q&A Add-On

If they ask why you did not just increase business weight more aggressively:

"I kept the top-level weights close to the recommended baseline for explainability. Instead of turning the whole model into a commerce leaderboard, I used targeted penalties and query grounding to handle the hard edge cases."
