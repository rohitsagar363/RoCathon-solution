import assert from 'node:assert/strict';
import test from 'node:test';

import {
  computeQueryIntentScore,
  normalizeProjectedScore,
  rerankCreators,
  scoreCandidate
} from '../src/scoring';
import type { BrandProfile, Creator } from '../src/types';

const brandProfile: BrandProfile = {
  id: 'brand_smart_home',
  industries: ['Home', 'Tools & Hardware', 'Phones & Electronics'],
  target_audience: {
    gender: 'FEMALE',
    age_ranges: ['25-34', '35-44']
  },
  gmv: 250000
};

const beautyBrandProfile: BrandProfile = {
  id: 'brand_beauty_wellness',
  industries: ['Beauty', 'Health'],
  target_audience: {
    gender: 'FEMALE',
    age_ranges: ['18-24', '25-34']
  },
  gmv: 180000
};

function buildCreator(
  username: string,
  overrides: Partial<Creator> = {},
  metricOverrides: Partial<Creator['metrics']> = {},
  demographicOverrides: Partial<Creator['metrics']['demographics']> = {}
): Creator {
  const demographics = {
    major_gender: 'FEMALE' as const,
    gender_pct: 8200,
    age_ranges: ['25-34', '35-44'],
    ...demographicOverrides
  };

  const metrics = {
    follower_count: 500000,
    total_gmv_30d: 20000,
    avg_views_30d: 750000,
    engagement_rate: 0.08,
    gpm: 25,
    demographics,
    ...metricOverrides
  };

  return {
    username,
    bio: 'Home decor creator for apartment makeovers.',
    content_style_tags: ['Home'],
    projected_score: 80,
    ...overrides,
    metrics: {
      ...metrics,
      ...overrides.metrics
    }
  };
}

test('normalizeProjectedScore maps 60 to 0 and 100 to 1', () => {
  assert.equal(normalizeProjectedScore(60), 0);
  assert.equal(normalizeProjectedScore(100), 1);
});

test('scoreCandidate preserves raw projected score while final score stays normalized', () => {
  const candidate = {
    ...buildCreator('small_space_living'),
    projected_score: 92,
    semantic_score: 0.81
  };

  const ranked = scoreCandidate(candidate, brandProfile, 'Affordable home decor for small apartments');

  assert.equal(ranked.scores.projected_score, 92);
  assert.ok(ranked.scores.final_score >= 0);
  assert.ok(ranked.scores.final_score <= 1);
  assert.equal(ranked.scores.semantic_score, 0.81);
});

test('reranker penalizes semantic matches with zero GMV and zero GPM', () => {
  const query = 'Affordable home decor for small apartments';
  const zeroCommerce = {
    ...buildCreator(
      'zero_commerce',
      {},
      {
        total_gmv_30d: 0,
        gpm: 0,
        avg_views_30d: 600000,
        engagement_rate: 0.08
      }
    ),
    semantic_score: 0.96
  };

  const closer = {
    ...buildCreator(
      'closer',
      {},
      {
        total_gmv_30d: 42000,
        gpm: 34,
        avg_views_30d: 650000,
        engagement_rate: 0.08
      }
    ),
    semantic_score: 0.83
  };

  const [topResult] = rerankCreators([zeroCommerce, closer], brandProfile, query);
  assert.equal(topResult.username, 'closer');
});

test('query intent score favors concrete query matches over broad home-adjacent matches', () => {
  const apartmentDecor = {
    ...buildCreator(
      'apartment_decor',
      {
        bio: 'Apartment decor ideas with renter-friendly furniture and small-space layouts.',
        content_style_tags: ['Home']
      },
      { total_gmv_30d: 15000, gpm: 18 }
    ),
    semantic_score: 0.65
  };

  const broadHome = {
    ...buildCreator(
      'broad_home',
      {
        bio: 'Budget home gym setup guides and apartment workout plans.',
        content_style_tags: ['Sports & Outdoors']
      },
      { total_gmv_30d: 45000, gpm: 34 }
    ),
    semantic_score: 0.65
  };

  const query = 'Affordable home decor for small apartments';

  assert.ok(
    computeQueryIntentScore(apartmentDecor, query) > computeQueryIntentScore(broadHome, query)
  );
});

test('query intent score understands beauty anchors beyond the smart-home vocabulary', () => {
  const skincareCreator = {
    ...buildCreator(
      'skincare_creator',
      {
        bio: 'Budget skincare routines for acne-prone skin with dermatologist-backed SPF and cleanser tips.',
        content_style_tags: ['Beauty']
      },
      { total_gmv_30d: 14000, gpm: 19 }
    ),
    semantic_score: 0.61
  };

  const genericWellness = {
    ...buildCreator(
      'generic_wellness',
      {
        bio: 'Healthy lifestyle advice, gym routines, and supplement recommendations for busy people.',
        content_style_tags: ['Health']
      },
      { total_gmv_30d: 36000, gpm: 31 }
    ),
    semantic_score: 0.61
  };

  const query = 'Budget skincare routines for acne-prone skin';

  assert.ok(
    computeQueryIntentScore(skincareCreator, query) > computeQueryIntentScore(genericWellness, query)
  );
});

test('reranker enforces strongest anchor intent on cross-brand queries', () => {
  const query = 'Budget skincare routines for acne-prone skin';
  const genericWellness = {
    ...buildCreator(
      'generic_wellness',
      {
        bio: 'Healthy lifestyle advice, gym routines, and supplement recommendations for busy people.',
        content_style_tags: ['Health'],
        projected_score: 92
      },
      { total_gmv_30d: 42000, gpm: 35, avg_views_30d: 900000, engagement_rate: 0.09 }
    ),
    semantic_score: 0.72
  };

  const skincareCloser = {
    ...buildCreator(
      'skincare_closer',
      {
        bio: 'Budget skincare routines for acne-prone skin with SPF, cleanser, and breakout recovery tips.',
        content_style_tags: ['Beauty'],
        projected_score: 84
      },
      { total_gmv_30d: 18000, gpm: 24, avg_views_30d: 650000, engagement_rate: 0.08 }
    ),
    semantic_score: 0.66
  };

  const [topResult] = rerankCreators(
    [genericWellness, skincareCloser],
    beautyBrandProfile,
    query
  );

  assert.equal(topResult.username, 'skincare_closer');
});

test('rerankCreators returns results sorted by final score with score fields attached', () => {
  const query = 'Affordable home decor for small apartments';
  const candidates = [
    {
      ...buildCreator('result_a'),
      semantic_score: 0.74
    },
    {
      ...buildCreator(
        'result_b',
        { projected_score: 85 },
        { total_gmv_30d: 38000, gpm: 31 }
      ),
      semantic_score: 0.72
    }
  ];

  const ranked = rerankCreators(candidates, brandProfile, query);

  assert.equal(ranked.length, 2);
  assert.ok(ranked[0].scores.final_score >= ranked[1].scores.final_score);
  assert.equal(typeof ranked[0].scores.semantic_score, 'number');
  assert.equal(typeof ranked[0].scores.projected_score, 'number');
  assert.equal(typeof ranked[0].scores.final_score, 'number');
});
