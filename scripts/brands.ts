import type { BrandProfile } from '../src/types';

// Replace these values with the portal-provided brand profiles if your RoCathon workspace differs.
export const BRAND_PROFILES: Record<string, BrandProfile> = {
  brand_smart_home: {
    id: 'brand_smart_home',
    industries: ['Home', 'Tools & Hardware', 'Phones & Electronics'],
    target_audience: {
      gender: 'FEMALE',
      age_ranges: ['25-34', '35-44']
    },
    gmv: 250000
  },
  brand_beauty_wellness: {
    id: 'brand_beauty_wellness',
    industries: ['Beauty', 'Health'],
    target_audience: {
      gender: 'FEMALE',
      age_ranges: ['18-24', '25-34']
    },
    gmv: 180000
  },
  brand_outdoor_adventure: {
    id: 'brand_outdoor_adventure',
    industries: ['Sports & Outdoors', 'Phones & Electronics'],
    target_audience: {
      gender: 'MALE',
      age_ranges: ['18-24', '25-34']
    },
    gmv: 220000
  }
};

export const DEMO_RUNS = [
  {
    brandId: 'brand_smart_home',
    query: 'Affordable home decor for small apartments'
  },
  {
    brandId: 'brand_beauty_wellness',
    query: 'Skincare creators who drive repeat purchases'
  },
  {
    brandId: 'brand_outdoor_adventure',
    query: 'Adventure gear creators with real buying intent'
  }
] as const;

export function getBrandProfile(brandId: string): BrandProfile {
  const brandProfile = BRAND_PROFILES[brandId];

  if (!brandProfile) {
    throw new Error(`Unknown brand profile "${brandId}".`);
  }

  return brandProfile;
}
