import assert from 'node:assert/strict';
import test from 'node:test';

import { explainRankedCreator } from '../src/explain';
import { buildScoreBreakdown, scoreCandidate } from '../src/scoring';
import type { BrandProfile, Creator, Industry } from '../src/types';

const brandProfile: BrandProfile = {
  id: 'brand_smart_home',
  industries: ['Home', 'Tools & Hardware', 'Phones & Electronics'],
  target_audience: {
    gender: 'FEMALE',
    age_ranges: ['25-34', '35-44']
  },
  gmv: 250000
};

function buildCandidate(overrides: Partial<Creator> = {}) {
  const contentStyleTags: Industry[] = ['Home'];

  return {
    username: 'small_space_living',
    bio: 'Apartment decor ideas with renter-friendly furniture and small-space layouts.',
    content_style_tags: contentStyleTags,
    projected_score: 90,
    metrics: {
      follower_count: 400000,
      total_gmv_30d: 30000,
      avg_views_30d: 600000,
      engagement_rate: 0.08,
      gpm: 28,
      demographics: {
        major_gender: 'FEMALE' as const,
        gender_pct: 8000,
        age_ranges: ['25-34', '35-44']
      }
    },
    ...overrides,
    semantic_score: 0.72
  };
}

test('buildScoreBreakdown stays consistent with scoreCandidate final score', () => {
  const candidate = buildCandidate();
  const query = 'Affordable home decor for small apartments';
  const breakdown = buildScoreBreakdown(candidate, brandProfile, query);
  const ranked = scoreCandidate(candidate, brandProfile, query);

  assert.equal(breakdown.final_score, ranked.scores.final_score);
  assert.equal(breakdown.semantic_score, ranked.scores.semantic_score);
});

test('explainRankedCreator includes highlights and a consistent breakdown', () => {
  const candidate = buildCandidate();
  const query = 'Affordable home decor for small apartments';
  const ranked = scoreCandidate(candidate, brandProfile, query);
  const explanation = explainRankedCreator(ranked, brandProfile, query, 1);

  assert.equal(explanation.rank, 1);
  assert.equal(explanation.username, ranked.username);
  assert.equal(explanation.breakdown.final_score, ranked.scores.final_score);
  assert.ok(explanation.highlights.length > 0);
});
