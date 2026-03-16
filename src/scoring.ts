import type { BrandProfile, RankedCreator } from './types';
import type { SemanticCandidate } from './db';

const PROJECTED_SCORE_FLOOR = 60;
const PROJECTED_SCORE_RANGE = 40;
const GMV_REFERENCE = 58248;
const GPM_REFERENCE = 44;
const LOW_VIEW_THRESHOLD = 203880;
const HIGH_GMV_THRESHOLD = 15829;
const HIGH_GPM_THRESHOLD = 27;

const STOPWORDS = new Set([
  'a',
  'an',
  'and',
  'for',
  'from',
  'in',
  'into',
  'of',
  'on',
  'or',
  'the',
  'to',
  'with'
]);

const LOW_SIGNAL_TERMS = new Set(['home', 'smart', 'creator', 'creators', 'content', 'style']);

const TERM_WEIGHTS: Record<string, number> = {
  affordable: 1.1,
  budget: 1.1,
  decor: 1.5,
  design: 1.4,
  interior: 1.4,
  furniture: 1.3,
  apartment: 1.1,
  apartments: 1.1,
  small: 1.1,
  lighting: 1.2,
  organization: 1.2
};

const TERM_SYNONYMS: Record<string, string[]> = {
  affordable: ['affordable', 'budget', 'cheap', 'value', 'frugal'],
  budget: ['affordable', 'budget', 'cheap', 'value', 'frugal'],
  decor: ['decor', 'design', 'interior', 'furniture', 'layout', 'aesthetic', 'makeover', 'makeovers'],
  apartments: ['apartment', 'apartments', 'studio', 'renter', 'renters', 'tiny'],
  apartment: ['apartment', 'apartments', 'studio', 'renter', 'renters', 'tiny'],
  small: ['small', 'tiny', 'compact', 'space', 'spaces', 'multifunctional', 'space-saving', 'spacesaving'],
  lighting: ['lighting', 'lamp', 'lamps', 'light'],
  organization: ['organization', 'organizing', 'storage', 'pantry', 'layout'],
  smart: ['smart', 'automation', 'connected', 'alexa', 'google', 'homekit', 'wiring']
};

function clamp(value: number, minimum = 0, maximum = 1): number {
  return Math.min(maximum, Math.max(minimum, value));
}

function ratioOfIntersection(left: readonly string[], right: readonly string[]): number {
  if (right.length === 0) {
    return 0;
  }

  const leftSet = new Set(left);
  const intersection = right.filter((value) => leftSet.has(value)).length;

  return intersection / right.length;
}

function normalizeToken(token: string): string {
  const stripped = token.toLowerCase().replace(/[^a-z0-9]+/g, '');

  if (stripped.endsWith('ies') && stripped.length > 4) {
    return `${stripped.slice(0, -3)}y`;
  }

  if (stripped.endsWith('s') && stripped.length > 4) {
    return stripped.slice(0, -1);
  }

  return stripped;
}

function tokenize(text: string): string[] {
  return text
    .split(/\s+/)
    .map(normalizeToken)
    .filter((token) => token.length > 1);
}

function buildCandidateText(candidate: SemanticCandidate): string {
  return `${candidate.bio} ${candidate.content_style_tags.join(' ')}`;
}

function computeKeywordWeight(token: string): number {
  if (token in TERM_WEIGHTS) {
    return TERM_WEIGHTS[token];
  }

  return LOW_SIGNAL_TERMS.has(token) ? 0.35 : 1;
}

function keywordMatches(token: string, textTokens: Set<string>): boolean {
  const normalizedToken = normalizeToken(token);
  const variants = TERM_SYNONYMS[normalizedToken] ?? [normalizedToken];

  return variants.some((variant) => textTokens.has(normalizeToken(variant)));
}

export function computeQueryIntentScore(candidate: SemanticCandidate, query: string): number {
  return computeIntentScore(candidate, query, false);
}

function computeIntentScore(
  candidate: SemanticCandidate,
  query: string,
  anchorsOnly: boolean
): number {
  const queryTokens = Array.from(
    new Set(
      tokenize(query).filter((token) => token.length > 2 && !STOPWORDS.has(token))
    )
  ).filter((token) => !anchorsOnly || computeKeywordWeight(token) >= 1.25);

  if (queryTokens.length === 0) {
    return 0;
  }

  const candidateTokens = new Set(tokenize(buildCandidateText(candidate)));

  let matchedWeight = 0;
  let totalWeight = 0;

  for (const token of queryTokens) {
    const weight = computeKeywordWeight(token);
    totalWeight += weight;

    if (keywordMatches(token, candidateTokens)) {
      matchedWeight += weight;
    }
  }

  return totalWeight === 0 ? 0 : matchedWeight / totalWeight;
}

export function computeAnchorIntentScore(candidate: SemanticCandidate, query: string): number {
  return computeIntentScore(candidate, query, true);
}

export function normalizeProjectedScore(projectedScore: number): number {
  return clamp((projectedScore - PROJECTED_SCORE_FLOOR) / PROJECTED_SCORE_RANGE);
}

export function computeBusinessScore(candidate: SemanticCandidate, brandProfile: BrandProfile): number {
  const projectedNorm = normalizeProjectedScore(candidate.projected_score);
  const gmvNorm = clamp(Math.log1p(candidate.metrics.total_gmv_30d) / Math.log1p(GMV_REFERENCE));
  const gpmNorm = clamp(candidate.metrics.gpm / GPM_REFERENCE);
  const engagementNorm = clamp((candidate.metrics.engagement_rate - 0.01) / 0.14);
  const industryFit = ratioOfIntersection(candidate.content_style_tags, brandProfile.industries);
  const genderMatch =
    candidate.metrics.demographics.major_gender === brandProfile.target_audience.gender ? 1 : 0;
  const ageOverlap = ratioOfIntersection(
    candidate.metrics.demographics.age_ranges,
    brandProfile.target_audience.age_ranges
  );
  const audienceFit = 0.6 * genderMatch + 0.4 * ageOverlap;

  return (
    0.45 * projectedNorm +
    0.25 * gmvNorm +
    0.15 * gpmNorm +
    0.05 * engagementNorm +
    0.05 * industryFit +
    0.05 * audienceFit
  );
}

export function computePenaltyMultiplier(
  candidate: SemanticCandidate,
  brandProfile: BrandProfile,
  queryIntentScore: number,
  anchorIntentScore: number
): number {
  let penalty = 1;
  const industryFit = ratioOfIntersection(candidate.content_style_tags, brandProfile.industries);

  if (candidate.metrics.total_gmv_30d === 0) {
    penalty *= 0.65;
  }

  if (candidate.metrics.gpm === 0) {
    penalty *= 0.85;
  }

  if (candidate.metrics.engagement_rate <= 0.02) {
    penalty *= 0.85;
  }

  if (candidate.metrics.avg_views_30d < LOW_VIEW_THRESHOLD) {
    penalty *= 0.9;
  }

  if (candidate.metrics.total_gmv_30d >= HIGH_GMV_THRESHOLD) {
    penalty *= 1.05;
  }

  if (candidate.metrics.gpm >= HIGH_GPM_THRESHOLD) {
    penalty *= 1.05;
  }

  if (industryFit === 0) {
    penalty *= 0.8;
  }

  if (queryIntentScore < 0.2) {
    penalty *= 0.8;
  }

  if (queryIntentScore >= 0.45) {
    penalty *= 1.05;
  }

  if (anchorIntentScore === 0) {
    penalty *= 0.8;
  }

  return penalty;
}

export function scoreCandidate(
  candidate: SemanticCandidate,
  brandProfile: BrandProfile,
  query: string
): RankedCreator {
  const semanticScore = clamp(candidate.semantic_score);
  const queryIntentScore = computeQueryIntentScore(candidate, query);
  const anchorIntentScore = computeAnchorIntentScore(candidate, query);
  const contentScore = clamp(0.8 * semanticScore + 0.2 * queryIntentScore);
  const businessScore = computeBusinessScore(candidate, brandProfile);
  const blend = 0.45 * contentScore + 0.55 * businessScore;
  const finalScore = clamp(
    blend * computePenaltyMultiplier(candidate, brandProfile, queryIntentScore, anchorIntentScore)
  );

  return {
    ...candidate,
    scores: {
      semantic_score: semanticScore,
      projected_score: candidate.projected_score,
      final_score: finalScore
    }
  };
}

function compareRankedCreators(left: RankedCreator, right: RankedCreator): number {
  if (right.scores.final_score !== left.scores.final_score) {
    return right.scores.final_score - left.scores.final_score;
  }

  if (right.scores.semantic_score !== left.scores.semantic_score) {
    return right.scores.semantic_score - left.scores.semantic_score;
  }

  if (right.projected_score !== left.projected_score) {
    return right.projected_score - left.projected_score;
  }

  return left.username.localeCompare(right.username);
}

export function rerankCreators(
  candidates: SemanticCandidate[],
  brandProfile: BrandProfile,
  query: string
): RankedCreator[] {
  return candidates
    .map((candidate) => scoreCandidate(candidate, brandProfile, query))
    .sort(compareRankedCreators);
}
