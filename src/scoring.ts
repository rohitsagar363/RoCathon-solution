import type { BrandProfile, Industry, RankedCreator } from './types';
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
  'who',
  'with'
]);

const LOW_SIGNAL_TERMS = new Set([
  'actually',
  'age',
  'beginner',
  'beginners',
  'buying',
  'college',
  'commerce',
  'content',
  'conversion',
  'conversions',
  'creator',
  'creators',
  'drive',
  'driven',
  'education',
  'expensive',
  'feel',
  'first',
  'friendly',
  'focused',
  'home',
  'idea',
  'ideas',
  'intent',
  'look',
  'looks',
  'men',
  'money',
  'purchase',
  'purchases',
  'real',
  'repeat',
  'routine',
  'routines',
  'sales',
  'sell',
  'sells',
  'smart',
  'strong',
  'style',
  'their',
  'who',
  'women'
]);

const TERM_WEIGHTS: Record<string, number> = {
  accessory: 1.35,
  accessories: 1.35,
  acne: 1.45,
  affordable: 1.1,
  adventure: 1.5,
  antiaging: 1.4,
  aging: 1.35,
  automation: 1.3,
  backpacking: 1.35,
  backup: 1.2,
  balcony: 1.25,
  barrier: 1.4,
  bathroom: 1.35,
  beauty: 1.35,
  budget: 1.1,
  camera: 1.35,
  camping: 1.45,
  charging: 1.3,
  checklist: 1.3,
  clean: 1.3,
  closet: 1.35,
  climbing: 1.45,
  color: 1.3,
  connected: 1.35,
  cozy: 1.25,
  decor: 1.5,
  desk: 1.35,
  design: 1.4,
  device: 1.35,
  devices: 1.35,
  doorbell: 1.35,
  drugstore: 1.4,
  dupe: 1.35,
  dupes: 1.35,
  electronics: 1.25,
  entryway: 1.3,
  everyday: 1.2,
  fishing: 1.5,
  fragrance: 1.35,
  garage: 1.35,
  gadget: 1.3,
  gadgets: 1.3,
  gear: 1.45,
  glowup: 1.25,
  hyperpigmentation: 1.5,
  hiking: 1.45,
  hydration: 1.35,
  ingredient: 1.35,
  ingredients: 1.35,
  interior: 1.4,
  kitchen: 1.35,
  lamp: 1.3,
  lighting: 1.3,
  living: 1.25,
  makeup: 1.45,
  makeover: 1.35,
  minimal: 1.25,
  multifunctional: 1.35,
  mountain: 1.3,
  office: 1.35,
  organization: 1.3,
  furniture: 1.3,
  apartment: 1.1,
  apartments: 1.1,
  outdoor: 1.4,
  paint: 1.45,
  palette: 1.3,
  pantry: 1.35,
  phone: 1.35,
  phones: 1.35,
  plug: 1.3,
  plugs: 1.3,
  powerbank: 1.35,
  preparedness: 1.35,
  refresh: 1.25,
  refreshing: 1.25,
  renter: 1.2,
  renters: 1.2,
  retinol: 1.45,
  room: 1.25,
  rental: 1.2,
  security: 1.35,
  selfcare: 1.3,
  sensitive: 1.35,
  skin: 1.35,
  skincare: 1.5,
  skiing: 1.4,
  small: 1.1,
  spf: 1.45,
  storage: 1.35,
  studio: 1.35,
  survival: 1.5,
  switch: 1.35,
  sunscreen: 1.45,
  tackle: 1.45,
  trail: 1.4,
  upgrade: 1.25,
  upgrades: 1.25,
  winter: 1.35,
  workshop: 1.35,
  wiring: 1.35
};

const TERM_SYNONYMS: Record<string, string[]> = {
  accessory: ['accessory', 'accessories', 'gear', 'charger', 'charging', 'phone'],
  accessories: ['accessory', 'accessories', 'gear', 'charger', 'charging', 'phone'],
  acne: ['acne', 'breakout', 'breakouts', 'blemish', 'blemishes', 'pimple', 'pimples'],
  affordable: ['affordable', 'budget', 'cheap', 'value', 'frugal'],
  adventure: [
    'adventure',
    'outdoor',
    'hiking',
    'trail',
    'trails',
    'camping',
    'wilderness',
    'backcountry'
  ],
  antiaging: ['antiaging', 'antiaging', 'aging', 'ageing', 'retinol', 'wrinkle', 'wrinkles'],
  aging: ['aging', 'ageing', 'antiaging', 'retinol', 'wrinkle', 'wrinkles', 'skincare'],
  automation: ['automation', 'automated', 'smart', 'connected', 'homekit', 'alexa', 'google'],
  backpacking: ['backpacking', 'backpacker', 'backpackers', 'backcountry', 'hiking', 'trail'],
  balcony: ['balcony', 'patio', 'outdoor', 'apartment'],
  barrier: ['barrier', 'repair', 'hydration', 'moisture', 'moisturizing'],
  bathroom: ['bathroom', 'tile', 'vanity', 'reno', 'renovation'],
  beauty: ['beauty', 'makeup', 'skincare', 'glam', 'fragrance', 'grooming'],
  budget: ['affordable', 'budget', 'cheap', 'value', 'frugal'],
  camera: ['camera', 'webcam', 'video', 'phone', 'iphone', 'android'],
  camping: ['camping', 'camp', 'backcountry', 'outdoor', 'survival', 'wilderness'],
  charging: ['charging', 'charger', 'battery', 'power', 'powerbank', 'wireless'],
  checklist: ['checklist', 'essentials', 'gear', 'equipment', 'kit'],
  clean: ['clean', 'nontoxic', 'non-toxic', 'holistic', 'natural', 'sustainable'],
  closet: ['closet', 'wardrobe', 'storage', 'organization', 'bedroom'],
  climbing: ['climbing', 'climb', 'bouldering', 'boulder', 'rock', 'outdoor'],
  color: ['color', 'palette', 'paint', 'interior', 'decor'],
  connected: ['connected', 'smart', 'automation', 'wireless', 'homekit', 'alexa', 'google'],
  cozy: ['cozy', 'warm', 'livedin', 'decor', 'home'],
  decor: ['decor', 'design', 'interior', 'furniture', 'layout', 'aesthetic', 'makeover', 'makeovers'],
  desk: ['desk', 'office', 'workspace', 'setup', 'organization'],
  device: ['device', 'devices', 'electronics', 'gadget', 'gadgets', 'automation', 'smart'],
  devices: ['device', 'devices', 'electronics', 'gadget', 'gadgets', 'automation', 'smart'],
  doorbell: ['doorbell', 'security', 'camera', 'video', 'smart'],
  drugstore: ['drugstore', 'budget', 'affordable', 'beauty', 'skincare', 'dupe', 'dupes'],
  dupe: ['dupe', 'dupes', 'drugstore', 'budget', 'affordable', 'beauty'],
  dupes: ['dupe', 'dupes', 'drugstore', 'budget', 'affordable', 'beauty'],
  electronics: ['electronics', 'device', 'devices', 'gadget', 'gadgets', 'phone', 'phones'],
  entryway: ['entryway', 'entry', 'foyer', 'storage', 'organization'],
  fragrance: ['fragrance', 'perfume', 'scent', 'layering', 'beauty'],
  fishing: ['fishing', 'fish', 'tackle', 'freshwater', 'saltwater', 'outdoor'],
  garage: ['garage', 'workshop', 'storage', 'organization', 'layout'],
  gadget: ['gadget', 'gadgets', 'device', 'devices', 'electronics', 'smart'],
  gadgets: ['gadget', 'gadgets', 'device', 'devices', 'electronics', 'smart'],
  gear: ['gear', 'equipment', 'kit', 'kits', 'accessory', 'accessories', 'review', 'reviews'],
  glowup: ['glowup', 'glow', 'journey', 'transformation', 'before', 'after', 'documenting', 'skincare'],
  hyperpigmentation: ['hyperpigmentation', 'dark', 'spot', 'spots', 'pigmentation', 'skin', 'skincare'],
  hiking: ['hiking', 'hike', 'trail', 'trails', 'trek', 'trekking', 'backpacking', 'outdoor'],
  hydration: ['hydration', 'hydrating', 'barrier', 'moisture', 'repair', 'skin', 'skincare', 'glow'],
  ingredient: ['ingredient', 'ingredients', 'dermatology', 'dermatologist', 'science', 'skincare', 'beauty'],
  ingredients: ['ingredient', 'ingredients', 'dermatology', 'dermatologist', 'science', 'skincare', 'beauty'],
  apartments: ['apartment', 'apartments', 'studio', 'renter', 'renters', 'tiny'],
  apartment: ['apartment', 'apartments', 'studio', 'renter', 'renters', 'tiny'],
  kitchen: ['kitchen', 'pantry', 'storage', 'organization', 'home'],
  lamp: ['lamp', 'lamps', 'lighting', 'light', 'decor'],
  multifunctional: ['multifunctional', 'space-saving', 'spacesaving', 'compact', 'tiny', 'furniture'],
  small: ['small', 'tiny', 'compact', 'space', 'spaces', 'multifunctional', 'space-saving', 'spacesaving'],
  lighting: ['lighting', 'lamp', 'lamps', 'light'],
  living: ['living', 'room', 'decor', 'interior', 'home'],
  makeup: ['makeup', 'glam', 'beauty', 'contour', 'look', 'looks'],
  makeover: ['makeover', 'refresh', 'refreshes', 'decor', 'paint', 'interior'],
  minimal: ['minimal', 'minimalist', 'simple', 'clean', 'decluttered'],
  office: ['office', 'desk', 'workspace', 'remote', 'productivity', 'setup'],
  organization: ['organization', 'organizing', 'storage', 'pantry', 'layout', 'closet', 'garage'],
  outdoor: ['outdoor', 'adventure', 'hiking', 'trail', 'trails', 'camping', 'wilderness'],
  paint: ['paint', 'painting', 'color', 'palette', 'interior', 'roller', 'brush'],
  palette: ['palette', 'color', 'paint', 'interior', 'decor'],
  pantry: ['pantry', 'kitchen', 'storage', 'organization', 'layout'],
  phone: ['phone', 'phones', 'mobile', 'iphone', 'android', 'apple', 'smartphone'],
  phones: ['phone', 'phones', 'mobile', 'iphone', 'android', 'apple', 'smartphone'],
  plug: ['plug', 'plugs', 'smart', 'switch', 'outlet', 'device'],
  plugs: ['plug', 'plugs', 'smart', 'switch', 'outlet', 'device'],
  powerbank: ['powerbank', 'charging', 'battery', 'charger', 'power'],
  preparedness: ['preparedness', 'emergency', 'survival', 'safety', 'gear'],
  refresh: ['refresh', 'refreshing', 'makeover', 'paint', 'interior', 'rental'],
  refreshing: ['refresh', 'refreshing', 'makeover', 'paint', 'interior', 'rental'],
  renter: ['renter', 'renters', 'apartment', 'apartments', 'studio', 'lease'],
  renters: ['renter', 'renters', 'apartment', 'apartments', 'studio', 'lease'],
  retinol: ['retinol', 'antiaging', 'anti-aging', 'wrinkle', 'wrinkles', 'skincare', 'spf'],
  rental: ['rental', 'renter', 'renters', 'apartment', 'apartments', 'lease'],
  room: ['room', 'living', 'bedroom', 'interior', 'home'],
  security: ['security', 'camera', 'doorbell', 'smart', 'video'],
  selfcare: ['selfcare', 'self', 'care', 'wellness', 'beauty', 'routine', 'routines'],
  sensitive: ['sensitive', 'gentle', 'barrier', 'soothing', 'skincare'],
  skin: ['skin', 'skincare', 'spf', 'serum', 'serums', 'dermatology', 'dermatologist'],
  skincare: ['skincare', 'skin', 'spf', 'serum', 'serums', 'cleanser', 'cleansers', 'dermatology', 'dermatologist'],
  skiing: ['skiing', 'ski', 'winter', 'snow', 'backcountry'],
  smart: ['smart', 'automation', 'connected', 'alexa', 'google', 'homekit', 'wiring', 'device', 'devices'],
  spf: ['spf', 'sunscreen', 'sun', 'protection', 'skincare'],
  storage: ['storage', 'organization', 'closet', 'pantry', 'garage', 'shelving', 'space'],
  studio: ['studio', 'apartment', 'apartments', 'small', 'tiny', 'space'],
  survival: ['survival', 'wilderness', 'preparedness', 'emergency', 'outdoor'],
  switch: ['switch', 'switches', 'outlet', 'outlets', 'wiring', 'electrical', 'lighting'],
  sunscreen: ['sunscreen', 'spf', 'sun', 'protection', 'skincare'],
  tackle: ['tackle', 'fishing', 'gear', 'outdoor'],
  trail: ['trail', 'trails', 'hiking', 'hike', 'outdoor', 'trek', 'trekking']
};

const INDUSTRY_QUERY_HINTS: Partial<Record<Industry, string[]>> = {
  Home: [
    'apartment',
    'apartments',
    'balcony',
    'bathroom',
    'bedroom',
    'closet',
    'cozy',
    'decor',
    'entryway',
    'furniture',
    'garage',
    'home',
    'interior',
    'kitchen',
    'lamp',
    'layout',
    'lighting',
    'living',
    'makeover',
    'organization',
    'paint',
    'palette',
    'pantry',
    'room',
    'shelf',
    'shelving',
    'small',
    'space',
    'spaces',
    'storage',
    'studio'
  ],
  'Tools & Hardware': [
    'automation',
    'doorbell',
    'electrical',
    'garage',
    'hardware',
    'lighting',
    'outlet',
    'paint',
    'plumbing',
    'reno',
    'renovation',
    'security',
    'switch',
    'upgrade',
    'upgrades',
    'wiring',
    'workshop'
  ],
  'Phones & Electronics': [
    'accessory',
    'accessories',
    'automation',
    'battery',
    'camera',
    'charging',
    'device',
    'devices',
    'doorbell',
    'electronics',
    'gadget',
    'gadgets',
    'iphone',
    'mobile',
    'phone',
    'phones',
    'plug',
    'plugs',
    'power',
    'powerbank',
    'security',
    'smart',
    'smartphone',
    'video',
    'webcam'
  ],
  Beauty: [
    'acne',
    'antiaging',
    'beauty',
    'blemish',
    'clean',
    'fragrance',
    'glam',
    'glowup',
    'grooming',
    'hyperpigmentation',
    'makeup',
    'retinol',
    'sensitive',
    'skin',
    'skincare',
    'spf',
    'sunscreen'
  ],
  Health: [
    'barrier',
    'dermatologist',
    'dermatology',
    'health',
    'hydration',
    'ingredient',
    'ingredients',
    'recovery',
    'sensitive',
    'selfcare',
    'wellness'
  ],
  'Sports & Outdoors': [
    'adventure',
    'backcountry',
    'backpacking',
    'camping',
    'climbing',
    'emergency',
    'fishing',
    'gear',
    'hiking',
    'kayak',
    'marathon',
    'mountain',
    'outdoor',
    'paddle',
    'preparedness',
    'rugged',
    'running',
    'skiing',
    'survival',
    'tackle',
    'trail',
    'travel',
    'winter'
  ],
  'Computer & Office Equipment': [
    'camera',
    'computer',
    'desk',
    'laptop',
    'monitor',
    'office',
    'remote',
    'setup',
    'streaming',
    'webcam',
    'workspace'
  ]
};

export interface BusinessScoreComponents {
  projected_norm: number;
  gmv_norm: number;
  gpm_norm: number;
  engagement_norm: number;
  industry_fit: number;
  query_industry_fit: number;
  gender_match: number;
  age_overlap: number;
  audience_fit: number;
}

export interface PenaltyFlags {
  zero_gmv: boolean;
  zero_gpm: boolean;
  low_engagement: boolean;
  low_views: boolean;
  high_gmv_boost: boolean;
  high_gpm_boost: boolean;
  industry_mismatch: boolean;
  query_industry_mismatch: boolean;
  low_query_intent: boolean;
  high_query_intent_boost: boolean;
  high_query_industry_boost: boolean;
  missing_anchor_intent: boolean;
}

export interface ScoreWeights {
  semantic_weight: number;
  business_weight: number;
  semantic_blend_weight: number;
  query_intent_blend_weight: number;
  query_industry_blend_weight: number;
}

export interface ScoreBreakdown {
  semantic_score: number;
  query_intent_score: number;
  anchor_intent_score: number;
  query_industry_score: number;
  content_score: number;
  business_score: number;
  blend_score: number;
  penalty_multiplier: number;
  final_score: number;
  components: BusinessScoreComponents;
  penalties: PenaltyFlags;
  weights: ScoreWeights;
}

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
  const baseTokens = (text.toLowerCase().match(/[a-z0-9]+/g) ?? [])
    .map(normalizeToken)
    .filter((token) => token.length > 1);
  const compoundTokens: string[] = [];

  for (let index = 0; index < baseTokens.length - 1; index += 1) {
    const compoundToken = `${baseTokens[index]}${baseTokens[index + 1]}`;

    if (compoundToken in TERM_WEIGHTS || compoundToken in TERM_SYNONYMS) {
      compoundTokens.push(compoundToken);
    }
  }

  return [...baseTokens, ...compoundTokens];
}

function buildCandidateText(candidate: SemanticCandidate): string {
  const usernameText = candidate.username.replace(/[_-]+/g, ' ');
  return `${usernameText} ${candidate.bio} ${candidate.content_style_tags.join(' ')}`;
}

function getCandidateTokens(candidate: SemanticCandidate): Set<string> {
  return new Set(tokenize(buildCandidateText(candidate)));
}

function getQueryTokens(query: string, anchorsOnly = false): string[] {
  return Array.from(
    new Set(
      tokenize(query).filter((token) => token.length > 2 && !STOPWORDS.has(token))
    )
  ).filter((token) => !anchorsOnly || computeKeywordWeight(token) >= 1.25);
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

function getStrongestAnchorToken(query: string): string | null {
  const anchorTokens = getQueryTokens(query, true);

  if (anchorTokens.length === 0) {
    return null;
  }

  return anchorTokens.reduce((bestToken, token) =>
    computeKeywordWeight(token) > computeKeywordWeight(bestToken) ? token : bestToken
  );
}

function inferQueryIndustries(query: string, brandProfile: BrandProfile): Industry[] {
  const queryTokens = new Set(getQueryTokens(query));
  const matchedIndustries = new Set<Industry>();

  for (const industry of Object.keys(INDUSTRY_QUERY_HINTS) as Industry[]) {
    const hints = INDUSTRY_QUERY_HINTS[industry] ?? [];

    if (hints.some((hint) => queryTokens.has(normalizeToken(hint)))) {
      matchedIndustries.add(industry);
    }
  }

  if (matchedIndustries.size === 0) {
    return [...brandProfile.industries];
  }

  return [...matchedIndustries];
}

export function computeQueryIndustryFit(
  candidate: SemanticCandidate,
  brandProfile: BrandProfile,
  query: string
): number {
  return ratioOfIntersection(candidate.content_style_tags, inferQueryIndustries(query, brandProfile));
}

export function computeQueryIntentScore(candidate: SemanticCandidate, query: string): number {
  return computeIntentScore(candidate, query, false);
}

function computeIntentScore(
  candidate: SemanticCandidate,
  query: string,
  anchorsOnly: boolean
): number {
  const queryTokens = getQueryTokens(query, anchorsOnly);

  if (queryTokens.length === 0) {
    return 0;
  }

  const candidateTokens = getCandidateTokens(candidate);

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

export function buildBusinessScoreComponents(
  candidate: SemanticCandidate,
  brandProfile: BrandProfile,
  query?: string
): BusinessScoreComponents {
  const projectedNorm = normalizeProjectedScore(candidate.projected_score);
  const gmvNorm = clamp(Math.log1p(candidate.metrics.total_gmv_30d) / Math.log1p(GMV_REFERENCE));
  const gpmNorm = clamp(candidate.metrics.gpm / GPM_REFERENCE);
  const engagementNorm = clamp((candidate.metrics.engagement_rate - 0.01) / 0.14);
  const industryFit = ratioOfIntersection(candidate.content_style_tags, brandProfile.industries);
  const queryIndustryFit = query
    ? computeQueryIndustryFit(candidate, brandProfile, query)
    : industryFit;
  const genderMatch =
    candidate.metrics.demographics.major_gender === brandProfile.target_audience.gender ? 1 : 0;
  const ageOverlap = ratioOfIntersection(
    candidate.metrics.demographics.age_ranges,
    brandProfile.target_audience.age_ranges
  );
  const audienceFit = 0.6 * genderMatch + 0.4 * ageOverlap;

  return {
    projected_norm: projectedNorm,
    gmv_norm: gmvNorm,
    gpm_norm: gpmNorm,
    engagement_norm: engagementNorm,
    industry_fit: industryFit,
    query_industry_fit: queryIndustryFit,
    gender_match: genderMatch,
    age_overlap: ageOverlap,
    audience_fit: audienceFit
  };
}

export function computeBusinessScore(
  candidate: SemanticCandidate,
  brandProfile: BrandProfile,
  query?: string
): number {
  return computeBusinessScoreFromComponents(buildBusinessScoreComponents(candidate, brandProfile, query));
}

function computeBusinessScoreFromComponents(components: BusinessScoreComponents): number {
  return (
    0.42 * components.projected_norm +
    0.24 * components.gmv_norm +
    0.14 * components.gpm_norm +
    0.05 * components.engagement_norm +
    0.05 * components.industry_fit +
    0.05 * components.query_industry_fit +
    0.05 * components.audience_fit
  );
}

export function buildPenaltyFlags(
  candidate: SemanticCandidate,
  brandProfile: BrandProfile,
  queryIntentScore: number,
  _anchorIntentScore: number,
  query: string
): PenaltyFlags {
  const industryFit = ratioOfIntersection(candidate.content_style_tags, brandProfile.industries);
  const queryIndustryFit = computeQueryIndustryFit(candidate, brandProfile, query);
  const strongestAnchor = getStrongestAnchorToken(query);
  const candidateTokens = getCandidateTokens(candidate);

  return {
    zero_gmv: candidate.metrics.total_gmv_30d === 0,
    zero_gpm: candidate.metrics.gpm === 0,
    low_engagement: candidate.metrics.engagement_rate <= 0.02,
    low_views: candidate.metrics.avg_views_30d < LOW_VIEW_THRESHOLD,
    high_gmv_boost: candidate.metrics.total_gmv_30d >= HIGH_GMV_THRESHOLD,
    high_gpm_boost: candidate.metrics.gpm >= HIGH_GPM_THRESHOLD,
    industry_mismatch: industryFit === 0,
    query_industry_mismatch: queryIndustryFit === 0,
    low_query_intent: queryIntentScore < 0.2,
    high_query_intent_boost: queryIntentScore >= 0.45,
    high_query_industry_boost: queryIndustryFit >= 0.5,
    missing_anchor_intent:
      strongestAnchor !== null && !keywordMatches(strongestAnchor, candidateTokens)
  };
}

export function computePenaltyMultiplier(
  candidate: SemanticCandidate,
  brandProfile: BrandProfile,
  queryIntentScore: number,
  anchorIntentScore: number,
  query: string
): number {
  const flags = buildPenaltyFlags(candidate, brandProfile, queryIntentScore, anchorIntentScore, query);
  return computePenaltyMultiplierFromFlags(flags);
}

function computePenaltyMultiplierFromFlags(flags: PenaltyFlags): number {
  let penalty = 1;

  if (flags.zero_gmv) {
    penalty *= 0.65;
  }

  if (flags.zero_gpm) {
    penalty *= 0.85;
  }

  if (flags.low_engagement) {
    penalty *= 0.85;
  }

  if (flags.low_views) {
    penalty *= 0.9;
  }

  if (flags.high_gmv_boost) {
    penalty *= 1.05;
  }

  if (flags.high_gpm_boost) {
    penalty *= 1.05;
  }

  if (flags.industry_mismatch) {
    penalty *= 0.8;
  }

  if (flags.query_industry_mismatch) {
    penalty *= 0.72;
  }

  if (flags.low_query_intent) {
    penalty *= 0.8;
  }

  if (flags.industry_mismatch && flags.low_query_intent) {
    penalty *= 0.75;
  }

  if (flags.query_industry_mismatch && flags.low_query_intent) {
    penalty *= 0.7;
  }

  if (flags.high_query_intent_boost) {
    penalty *= 1.05;
  }

  if (flags.high_query_industry_boost) {
    penalty *= 1.03;
  }

  if (flags.missing_anchor_intent) {
    penalty *= 0.8;
  }

  if (flags.query_industry_mismatch && flags.missing_anchor_intent) {
    penalty *= 0.75;
  }

  return penalty;
}

export function buildScoreBreakdown(
  candidate: SemanticCandidate,
  brandProfile: BrandProfile,
  query: string
): ScoreBreakdown {
  const semanticScore = clamp(candidate.semantic_score);
  const queryIntentScore = computeQueryIntentScore(candidate, query);
  const anchorIntentScore = computeAnchorIntentScore(candidate, query);
  const queryIndustryScore = computeQueryIndustryFit(candidate, brandProfile, query);
  const contentScore = clamp(
    0.72 * semanticScore + 0.18 * queryIntentScore + 0.1 * queryIndustryScore
  );
  const components = buildBusinessScoreComponents(candidate, brandProfile, query);
  const businessScore = computeBusinessScoreFromComponents(components);
  const blendScore = 0.45 * contentScore + 0.55 * businessScore;
  const penalties = buildPenaltyFlags(
    candidate,
    brandProfile,
    queryIntentScore,
    anchorIntentScore,
    query
  );
  const penaltyMultiplier = computePenaltyMultiplierFromFlags(penalties);
  const finalScore = clamp(blendScore * penaltyMultiplier);

  return {
    semantic_score: semanticScore,
    query_intent_score: queryIntentScore,
    anchor_intent_score: anchorIntentScore,
    query_industry_score: queryIndustryScore,
    content_score: contentScore,
    business_score: businessScore,
    blend_score: blendScore,
    penalty_multiplier: penaltyMultiplier,
    final_score: finalScore,
    components,
    penalties,
    weights: {
      semantic_weight: 0.45,
      business_weight: 0.55,
      semantic_blend_weight: 0.72,
      query_intent_blend_weight: 0.18,
      query_industry_blend_weight: 0.1
    }
  };
}

export function scoreCandidate(
  candidate: SemanticCandidate,
  brandProfile: BrandProfile,
  query: string
): RankedCreator {
  const breakdown = buildScoreBreakdown(candidate, brandProfile, query);

  return {
    ...candidate,
    scores: {
      semantic_score: breakdown.semantic_score,
      projected_score: candidate.projected_score,
      final_score: breakdown.final_score
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
