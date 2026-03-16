import type { SemanticCandidate } from './db';
import {
  buildScoreBreakdown,
  type ScoreBreakdown
} from './scoring';
import type { BrandProfile, RankedCreator } from './types';

export interface CreatorExplanation {
  rank: number;
  username: string;
  content_style_tags: RankedCreator['content_style_tags'];
  scores: RankedCreator['scores'];
  metrics: RankedCreator['metrics'];
  breakdown: ScoreBreakdown;
  highlights: string[];
  risks: string[];
}

function toSemanticCandidate(creator: RankedCreator): SemanticCandidate {
  return {
    ...creator,
    semantic_score: creator.scores.semantic_score
  };
}

function formatPercent(value: number): string {
  return `${(value * 100).toFixed(1)}%`;
}

function buildHighlights(
  candidate: SemanticCandidate,
  brandProfile: BrandProfile,
  breakdown: ScoreBreakdown
): string[] {
  const highlights: string[] = [];

  if (breakdown.query_intent_score >= 0.55) {
    highlights.push(`Strong direct query-intent match (${formatPercent(breakdown.query_intent_score)} coverage).`);
  }

  if (breakdown.components.industry_fit > 0) {
    highlights.push(
      `Matches brand industries with ${formatPercent(breakdown.components.industry_fit)} overlap.`
    );
  }

  if (candidate.metrics.total_gmv_30d >= 15000) {
    highlights.push(`Solid GMV history (${candidate.metrics.total_gmv_30d.toFixed(0)} in the last 30d).`);
  }

  if (candidate.metrics.gpm >= 27) {
    highlights.push(`High conversion efficiency with GPM ${candidate.metrics.gpm.toFixed(1)}.`);
  }

  if (
    candidate.metrics.demographics.major_gender === brandProfile.target_audience.gender &&
    breakdown.components.age_overlap > 0
  ) {
    highlights.push('Audience demographics align with the brand target.');
  }

  return highlights;
}

function buildRisks(breakdown: ScoreBreakdown): string[] {
  const risks: string[] = [];

  if (breakdown.penalties.zero_gmv) {
    risks.push('Zero GMV penalty applied.');
  }

  if (breakdown.penalties.zero_gpm) {
    risks.push('Zero GPM penalty applied.');
  }

  if (breakdown.penalties.low_engagement) {
    risks.push('Low-engagement penalty applied.');
  }

  if (breakdown.penalties.industry_mismatch) {
    risks.push('No brand-industry overlap penalty applied.');
  }

  if (breakdown.penalties.low_query_intent) {
    risks.push('Weak query-intent penalty applied.');
  }

  if (breakdown.penalties.missing_anchor_intent) {
    risks.push('Missing anchor-intent penalty applied.');
  }

  return risks;
}

export function explainRankedCreator(
  creator: RankedCreator,
  brandProfile: BrandProfile,
  query: string,
  rank: number
): CreatorExplanation {
  const candidate = toSemanticCandidate(creator);
  const breakdown = buildScoreBreakdown(candidate, brandProfile, query);

  return {
    rank,
    username: creator.username,
    content_style_tags: creator.content_style_tags,
    scores: creator.scores,
    metrics: creator.metrics,
    breakdown,
    highlights: buildHighlights(candidate, brandProfile, breakdown),
    risks: buildRisks(breakdown)
  };
}

export function explainRankedCreators(
  creators: RankedCreator[],
  brandProfile: BrandProfile,
  query: string
): CreatorExplanation[] {
  return creators.map((creator, index) => explainRankedCreator(creator, brandProfile, query, index + 1));
}
