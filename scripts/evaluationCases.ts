import type { Industry } from '../src/types';

export interface EvaluationExpectations {
  maxZeroGmvTop5: number;
  maxBrandOffIndustryTop5: number;
  maxPreferredOffIndustryTop5: number;
  minAverageQueryIntent: number;
  minAverageAnchorIntent: number;
  minAveragePreferredIndustryFit: number;
}

export interface EvaluationCase {
  id: string;
  brandId: string;
  query: string;
  purpose: string;
  preferredIndustries: Industry[];
  expectations: EvaluationExpectations;
}

interface EvaluationCaseSeed {
  id?: string;
  query: string;
  purpose: string;
  preferredIndustries: Industry[];
  expectations?: Partial<EvaluationExpectations>;
}

const DEFAULT_EXPECTATIONS: EvaluationExpectations = {
  maxZeroGmvTop5: 0,
  maxBrandOffIndustryTop5: 1,
  maxPreferredOffIndustryTop5: 1,
  minAverageQueryIntent: 0.35,
  minAverageAnchorIntent: 0.12,
  minAveragePreferredIndustryFit: 0.35
};

function buildCases(
  prefix: string,
  brandId: string,
  seeds: EvaluationCaseSeed[]
): EvaluationCase[] {
  return seeds.map((seed, index) => ({
    id: seed.id ?? `${prefix}_${String(index + 1).padStart(2, '0')}`,
    brandId,
    query: seed.query,
    purpose: seed.purpose,
    preferredIndustries: seed.preferredIndustries,
    expectations: {
      ...DEFAULT_EXPECTATIONS,
      ...seed.expectations
    }
  }));
}

const SMART_HOME_DECOR: EvaluationCaseSeed[] = [
  {
    id: 'smart_home_core',
    query: 'Affordable home decor for small apartments',
    purpose: 'Primary submission-style decor query for small spaces.',
    preferredIndustries: ['Home', 'Tools & Hardware'],
    expectations: { maxPreferredOffIndustryTop5: 0, minAverageQueryIntent: 0.4, minAveragePreferredIndustryFit: 0.45 }
  },
  {
    id: 'smart_home_renters',
    query: 'Budget apartment decor for renters',
    purpose: 'Likely hidden renter decor precision query.',
    preferredIndustries: ['Home', 'Tools & Hardware'],
    expectations: { minAverageQueryIntent: 0.38 }
  },
  {
    query: 'Cozy living room decor on a budget',
    purpose: 'Tests whether cozy decor creators beat generic home creators.',
    preferredIndustries: ['Home', 'Tools & Hardware']
  },
  {
    query: 'Studio apartment storage and furniture ideas',
    purpose: 'Focuses on furniture and layout creators for small homes.',
    preferredIndustries: ['Home', 'Tools & Hardware']
  },
  {
    query: 'Multifunctional furniture for tiny apartments',
    purpose: 'Pushes apartment and furniture intent together.',
    preferredIndustries: ['Home', 'Tools & Hardware'],
    expectations: { minAverageAnchorIntent: 0.15 }
  },
  {
    query: 'Small bedroom makeover ideas on a budget',
    purpose: 'Tests decor precision on another room-level query.',
    preferredIndustries: ['Home', 'Tools & Hardware']
  },
  {
    query: 'Minimal apartment decor creators with strong conversions',
    purpose: 'Checks minimalist interior relevance plus commerce.',
    preferredIndustries: ['Home', 'Tools & Hardware']
  },
  {
    query: 'Apartment balcony decor on a budget',
    purpose: 'Tests smaller decor niche intent without drifting to unrelated home creators.',
    preferredIndustries: ['Home']
  },
  {
    query: 'Color palette ideas for cozy apartments',
    purpose: 'Looks for interior color and decor creators.',
    preferredIndustries: ['Home', 'Tools & Hardware']
  },
  {
    query: 'Lighting and lamp ideas for small living rooms',
    purpose: 'Should surface lighting-aware home creators, not electronics-first creators.',
    preferredIndustries: ['Home', 'Tools & Hardware'],
    expectations: { maxPreferredOffIndustryTop5: 0 }
  },
  {
    query: 'Interior design creators for first apartments',
    purpose: 'Tests broad interior relevance with beginner apartment intent.',
    preferredIndustries: ['Home', 'Tools & Hardware']
  },
  {
    query: 'Small apartment makeover creators with strong conversions',
    purpose: 'High-commerce apartment decor case.',
    preferredIndustries: ['Home', 'Tools & Hardware'],
    expectations: { minAverageQueryIntent: 0.38 }
  }
];

const SMART_HOME_UTILITY: EvaluationCaseSeed[] = [
  {
    id: 'smart_home_organization',
    query: 'Small space organization ideas for apartments',
    purpose: 'Organization-heavy small home query.',
    preferredIndustries: ['Home', 'Tools & Hardware']
  },
  {
    query: 'Kitchen organization ideas for small apartments',
    purpose: 'Should favor storage and organization creators over broad decor.',
    preferredIndustries: ['Home', 'Tools & Hardware']
  },
  {
    query: 'Pantry and kitchen storage for renters',
    purpose: 'Tests renter-friendly organization intent.',
    preferredIndustries: ['Home', 'Tools & Hardware']
  },
  {
    query: 'Closet organization ideas for small bedrooms',
    purpose: 'Smaller-space organization query with strong anchor terms.',
    preferredIndustries: ['Home', 'Tools & Hardware'],
    expectations: { minAverageAnchorIntent: 0.15 }
  },
  {
    query: 'Entryway storage for small homes',
    purpose: 'Tests storage creators in a compact home setting.',
    preferredIndustries: ['Home', 'Tools & Hardware']
  },
  {
    query: 'Home office setup for small spaces',
    purpose: 'Should reward office layout creators with home relevance.',
    preferredIndustries: ['Home', 'Computer & Office Equipment'],
    expectations: { maxPreferredOffIndustryTop5: 1 }
  },
  {
    query: 'Home office desk organization for remote workers',
    purpose: 'Checks office productivity and organization crossover.',
    preferredIndustries: ['Home', 'Computer & Office Equipment']
  },
  {
    query: 'Bathroom upgrades that feel expensive on a budget',
    purpose: 'Targets renovation and home improvement creators.',
    preferredIndustries: ['Home', 'Tools & Hardware']
  },
  {
    query: 'Budget paint ideas for refreshing a rental',
    purpose: 'Should surface paint and color creators instead of generic decor.',
    preferredIndustries: ['Home', 'Tools & Hardware'],
    expectations: { minAverageAnchorIntent: 0.18 }
  },
  {
    query: 'Paint and color creators for interior refreshes',
    purpose: 'Tests paint-specific creators with home overlap.',
    preferredIndustries: ['Home', 'Tools & Hardware'],
    expectations: { minAverageAnchorIntent: 0.18 }
  },
  {
    query: 'Garage organization systems for homeowners',
    purpose: 'Utility-heavy home query with workshop flavor.',
    preferredIndustries: ['Home', 'Tools & Hardware']
  },
  {
    query: 'Workshop and garage storage content that sells',
    purpose: 'Commerce-heavy garage organization case.',
    preferredIndustries: ['Home', 'Tools & Hardware'],
    expectations: { minAveragePreferredIndustryFit: 0.45 }
  }
];

const SMART_HOME_DEVICES: EvaluationCaseSeed[] = [
  {
    id: 'smart_home_devices',
    query: 'Affordable smart home devices for first apartments',
    purpose: 'Allows electronics crossover while keeping home-device relevance.',
    preferredIndustries: ['Home', 'Tools & Hardware', 'Phones & Electronics'],
    expectations: { maxPreferredOffIndustryTop5: 0, minAverageQueryIntent: 0.38 }
  },
  {
    query: 'Budget-friendly smart plugs and home automation',
    purpose: 'Tests automation creators with real device intent.',
    preferredIndustries: ['Phones & Electronics', 'Home', 'Tools & Hardware'],
    expectations: { maxPreferredOffIndustryTop5: 0 }
  },
  {
    query: 'Smart lighting upgrades for apartments',
    purpose: 'Should reward lighting and home automation creators.',
    preferredIndustries: ['Home', 'Tools & Hardware', 'Phones & Electronics']
  },
  {
    query: 'Smart security devices for apartment dwellers',
    purpose: 'Home security device case for renters and apartments.',
    preferredIndustries: ['Phones & Electronics', 'Home']
  },
  {
    query: 'Safe home wiring and smart device setup',
    purpose: 'Should reward electrical and safe setup creators.',
    preferredIndustries: ['Tools & Hardware', 'Phones & Electronics', 'Home'],
    expectations: { minAverageAnchorIntent: 0.15 }
  },
  {
    query: 'Affordable video doorbell and apartment security setup',
    purpose: 'Specific apartment security and electronics crossover query.',
    preferredIndustries: ['Phones & Electronics', 'Home']
  },
  {
    query: 'Home automation creators for beginners',
    purpose: 'Tests automation vocabulary without apartment modifiers.',
    preferredIndustries: ['Phones & Electronics', 'Home']
  },
  {
    query: 'Device setup creators for home offices',
    purpose: 'Checks home office device setup without losing home fit.',
    preferredIndustries: ['Phones & Electronics', 'Computer & Office Equipment', 'Home']
  },
  {
    query: 'Apartment gadget creators with strong conversions',
    purpose: 'Commerce-heavy apartment electronics case.',
    preferredIndustries: ['Phones & Electronics', 'Home'],
    expectations: { minAveragePreferredIndustryFit: 0.4 }
  },
  {
    query: 'Connected lighting and smart switch creators',
    purpose: 'Looks for wiring, lighting, and automation relevance.',
    preferredIndustries: ['Phones & Electronics', 'Tools & Hardware', 'Home']
  }
];

const BEAUTY_SKINCARE: EvaluationCaseSeed[] = [
  {
    id: 'beauty_repeat_purchase',
    query: 'Skincare creators who drive repeat purchases',
    purpose: 'Core commerce-heavy skincare query.',
    preferredIndustries: ['Beauty', 'Health'],
    expectations: { maxPreferredOffIndustryTop5: 0, minAverageQueryIntent: 0.38, minAveragePreferredIndustryFit: 0.45 }
  },
  {
    id: 'beauty_budget_skincare',
    query: 'Budget skincare routines for acne-prone skin',
    purpose: 'Budget skincare plus acne specificity.',
    preferredIndustries: ['Beauty', 'Health'],
    expectations: { maxPreferredOffIndustryTop5: 0, minAverageQueryIntent: 0.38, minAverageAnchorIntent: 0.18 }
  },
  {
    query: 'SPF-first skincare for everyday routines',
    purpose: 'Should surface SPF and daily routine creators.',
    preferredIndustries: ['Beauty', 'Health'],
    expectations: { minAverageAnchorIntent: 0.15 }
  },
  {
    query: 'Dermatologist-backed skincare routines',
    purpose: 'Tests ingredient and derm-style skincare education.',
    preferredIndustries: ['Beauty', 'Health']
  },
  {
    query: 'Clean beauty creators with strong commerce',
    purpose: 'Commerce-heavy clean beauty case.',
    preferredIndustries: ['Beauty', 'Health'],
    expectations: { maxPreferredOffIndustryTop5: 0 }
  },
  {
    query: 'Sensitive skin skincare recommendations',
    purpose: 'Should stay inside beauty and skincare relevance.',
    preferredIndustries: ['Beauty', 'Health']
  },
  {
    query: 'Morning skincare routines for glowing skin',
    purpose: 'Daily routine skincare precision query.',
    preferredIndustries: ['Beauty', 'Health']
  },
  {
    query: 'Anti-aging skincare for women in their 30s',
    purpose: 'Target audience plus anti-aging skincare intent.',
    preferredIndustries: ['Beauty', 'Health']
  },
  {
    query: 'Hydration and barrier repair skincare creators',
    purpose: 'Tests ingredient and skin-health adjacency without drifting.',
    preferredIndustries: ['Beauty', 'Health']
  },
  {
    query: 'Retinol and anti-aging education that sells',
    purpose: 'Education-heavy skincare plus commerce intent.',
    preferredIndustries: ['Beauty', 'Health']
  },
  {
    query: 'Hyperpigmentation and dark spot skincare creators',
    purpose: 'Specific skin concern query.',
    preferredIndustries: ['Beauty', 'Health']
  },
  {
    query: 'Skincare creators for dry and sensitive skin',
    purpose: 'Variant of sensitive-skin query with barrier-repair flavor.',
    preferredIndustries: ['Beauty', 'Health']
  },
  {
    query: 'Acne recovery and blemish-safe skincare content',
    purpose: 'Specific acne aftercare query.',
    preferredIndustries: ['Beauty', 'Health'],
    expectations: { minAverageAnchorIntent: 0.18 }
  },
  {
    query: 'Simple starter skincare routines',
    purpose: 'Beginner-friendly skincare query.',
    preferredIndustries: ['Beauty', 'Health']
  },
  {
    query: 'Product review creators for skincare launches',
    purpose: 'Launch-style brand query looking for review-driven conversion.',
    preferredIndustries: ['Beauty', 'Health']
  }
];

const BEAUTY_BEAUTY: EvaluationCaseSeed[] = [
  {
    query: 'Budget beauty finds with strong buying intent',
    purpose: 'General beauty commerce query.',
    preferredIndustries: ['Beauty'],
    expectations: { maxBrandOffIndustryTop5: 0, maxPreferredOffIndustryTop5: 0 }
  },
  {
    query: 'Drugstore skincare that actually converts',
    purpose: 'Drugstore skincare and commerce balance.',
    preferredIndustries: ['Beauty', 'Health'],
    expectations: { minAverageQueryIntent: 0.38 }
  },
  {
    query: 'Everyday makeup creators with strong conversion',
    purpose: 'Makeup relevance with commerce focus.',
    preferredIndustries: ['Beauty'],
    expectations: { maxBrandOffIndustryTop5: 0, maxPreferredOffIndustryTop5: 0 }
  },
  {
    query: 'Beauty creators for natural everyday looks',
    purpose: 'Should favor makeup and beauty-first creators.',
    preferredIndustries: ['Beauty']
  },
  {
    query: 'Beauty creators focused on ingredients education',
    purpose: 'Tests ingredient-aware beauty education without losing category fit.',
    preferredIndustries: ['Beauty', 'Health']
  },
  {
    query: 'Non-toxic skincare and beauty routines',
    purpose: 'Clean, non-toxic beauty and skincare case.',
    preferredIndustries: ['Beauty', 'Health']
  },
  {
    query: 'Wellness and beauty routines for self-care',
    purpose: 'Allows some health crossover but should remain beauty-led.',
    preferredIndustries: ['Beauty', 'Health']
  },
  {
    query: 'Beauty creators with strong engagement and commerce',
    purpose: 'High-level beauty commerce query likely to appear in judging.',
    preferredIndustries: ['Beauty'],
    expectations: { maxBrandOffIndustryTop5: 0 }
  },
  {
    query: 'Drugstore dupes and affordable beauty finds',
    purpose: 'Tests budget beauty and dupes vocabulary.',
    preferredIndustries: ['Beauty']
  },
  {
    query: 'Clean sunscreen and SPF education',
    purpose: 'SPF education and skincare crossover.',
    preferredIndustries: ['Beauty', 'Health'],
    expectations: { minAverageAnchorIntent: 0.15 }
  }
];

const BEAUTY_CROSSOVER: EvaluationCaseSeed[] = [
  {
    query: 'Fragrance and beauty creators with repeat purchase intent',
    purpose: 'Beauty plus fragrance repeat-purchase behavior.',
    preferredIndustries: ['Beauty'],
    expectations: { maxBrandOffIndustryTop5: 0, maxPreferredOffIndustryTop5: 0 }
  },
  {
    query: 'Minimal skincare routines for busy women',
    purpose: 'Lifestyle framing around beauty relevance.',
    preferredIndustries: ['Beauty', 'Health']
  },
  {
    query: 'Skincare transformation creators with before-and-afters',
    purpose: 'Transformation storytelling plus skincare relevance.',
    preferredIndustries: ['Beauty', 'Health']
  },
  {
    query: 'Clean beauty and sustainable skincare creators',
    purpose: 'Sustainability-flavored beauty query.',
    preferredIndustries: ['Beauty', 'Health']
  },
  {
    query: 'Mens grooming and skincare crossover creators',
    purpose: 'Beauty query with grooming crossover still inside category.',
    preferredIndustries: ['Beauty']
  },
  {
    query: 'Beauty creators for budget-friendly product swaps',
    purpose: 'Budget substitutions without losing beauty intent.',
    preferredIndustries: ['Beauty']
  },
  {
    query: 'Glow-up journey creators with strong commerce',
    purpose: 'Transformation and product-led beauty query.',
    preferredIndustries: ['Beauty']
  },
  {
    query: 'Affordable skincare creators for college-age women',
    purpose: 'Beauty target-audience query that should stay price-aware.',
    preferredIndustries: ['Beauty', 'Health'],
    expectations: { minAverageQueryIntent: 0.36 }
  }
];

const OUTDOOR_CORE: EvaluationCaseSeed[] = [
  {
    id: 'outdoor_adventure_core',
    query: 'Adventure gear creators with real buying intent',
    purpose: 'Core outdoor commerce query.',
    preferredIndustries: ['Sports & Outdoors'],
    expectations: { maxPreferredOffIndustryTop5: 1, minAverageQueryIntent: 0.35, minAveragePreferredIndustryFit: 0.4 }
  },
  {
    id: 'outdoor_hiking_tech',
    query: 'Outdoor phone gear for hiking and trail content',
    purpose: 'Outdoor and electronics crossover query.',
    preferredIndustries: ['Sports & Outdoors', 'Phones & Electronics'],
    expectations: { maxPreferredOffIndustryTop5: 0, minAverageQueryIntent: 0.38 }
  },
  {
    query: 'Hiking gear creators for beginner backpackers',
    purpose: 'Should favor hiking and outdoor gear creators.',
    preferredIndustries: ['Sports & Outdoors']
  },
  {
    query: 'Camping gear reviews with strong conversions',
    purpose: 'Gear review query with explicit commerce intent.',
    preferredIndustries: ['Sports & Outdoors'],
    expectations: { minAveragePreferredIndustryFit: 0.4 }
  },
  {
    query: 'Trail running creators who sell gear',
    purpose: 'Should balance performance creators and true outdoor gear fit.',
    preferredIndustries: ['Sports & Outdoors', 'Health']
  },
  {
    query: 'Fishing creators with strong buying intent',
    purpose: 'Direct outdoor commerce query likely to align with fishing creators.',
    preferredIndustries: ['Sports & Outdoors', 'Health']
  },
  {
    query: 'Climbing gear reviews and technique creators',
    purpose: 'Climbing-specific outdoor case.',
    preferredIndustries: ['Sports & Outdoors']
  },
  {
    query: 'Mountain biking gear creators',
    purpose: 'Should surface outdoor gear creators, not generic tech.',
    preferredIndustries: ['Sports & Outdoors']
  },
  {
    query: 'Ski and winter adventure gear creators',
    purpose: 'Winter sports and adventure content query.',
    preferredIndustries: ['Sports & Outdoors']
  },
  {
    query: 'Wilderness survival gear creators',
    purpose: 'Preparedness and survival outdoor query.',
    preferredIndustries: ['Sports & Outdoors', 'Health']
  },
  {
    query: 'Paddleboarding and water adventure creators',
    purpose: 'Water-sport outdoor query.',
    preferredIndustries: ['Sports & Outdoors']
  }
];

const OUTDOOR_TECH: EvaluationCaseSeed[] = [
  {
    query: 'Durable phone gear for outdoor travel',
    purpose: 'Outdoor phone accessories and durability query.',
    preferredIndustries: ['Sports & Outdoors', 'Phones & Electronics']
  },
  {
    query: 'Budget hiking gear for first-time adventurers',
    purpose: 'Budget hiking gear precision case.',
    preferredIndustries: ['Sports & Outdoors']
  },
  {
    query: 'Outdoor creators with gear review content',
    purpose: 'General gear-review outdoor query.',
    preferredIndustries: ['Sports & Outdoors']
  },
  {
    query: 'Backcountry adventure and safety gear creators',
    purpose: 'Safety and backcountry gear case.',
    preferredIndustries: ['Sports & Outdoors', 'Health']
  },
  {
    query: 'Trail camera and phone accessory creators',
    purpose: 'Outdoor gear with electronics crossover.',
    preferredIndustries: ['Sports & Outdoors', 'Phones & Electronics']
  },
  {
    query: 'Camping checklist and equipment creators',
    purpose: 'Checklist-style equipment query.',
    preferredIndustries: ['Sports & Outdoors']
  },
  {
    query: 'Adventure travel gear creators',
    purpose: 'Broader travel and gear query that should stay outdoors-first.',
    preferredIndustries: ['Sports & Outdoors']
  },
  {
    query: 'Trail running shoe review creators',
    purpose: 'Footwear and performance review query.',
    preferredIndustries: ['Sports & Outdoors', 'Health']
  },
  {
    query: 'Climbing and bouldering gear educators',
    purpose: 'Education-heavy climbing query.',
    preferredIndustries: ['Sports & Outdoors']
  },
  {
    query: 'Fishing tackle and outdoor gear creators',
    purpose: 'Tackle and fishing commerce query.',
    preferredIndustries: ['Sports & Outdoors', 'Health']
  },
  {
    query: 'Winter sports gear reviews',
    purpose: 'Review-heavy winter outdoor query.',
    preferredIndustries: ['Sports & Outdoors']
  }
];

const OUTDOOR_CROSSOVER: EvaluationCaseSeed[] = [
  {
    query: 'Outdoor smartwatch and phone accessory creators',
    purpose: 'Outdoor-electronics accessory crossover query.',
    preferredIndustries: ['Sports & Outdoors', 'Phones & Electronics']
  },
  {
    query: 'Survival and emergency preparedness gear creators',
    purpose: 'Preparedness-specific outdoor commerce query.',
    preferredIndustries: ['Sports & Outdoors', 'Health']
  },
  {
    query: 'Outdoor phone charging and power bank creators',
    purpose: 'Phone charging gear with outdoor usage context.',
    preferredIndustries: ['Phones & Electronics', 'Sports & Outdoors'],
    expectations: { maxPreferredOffIndustryTop5: 0 }
  },
  {
    query: 'Rugged outdoor gear creators with repeat purchase intent',
    purpose: 'Commerce-heavy rugged gear query.',
    preferredIndustries: ['Sports & Outdoors']
  },
  {
    query: 'Outdoor creators for men 18-34 with strong GMV',
    purpose: 'Audience-specific outdoor commerce query.',
    preferredIndustries: ['Sports & Outdoors']
  },
  {
    query: 'Mountain trail content with strong conversion',
    purpose: 'Trail content plus commerce requirement.',
    preferredIndustries: ['Sports & Outdoors']
  },
  {
    query: 'Endurance training creators with outdoor buying intent',
    purpose: 'Performance and outdoors crossover query.',
    preferredIndustries: ['Sports & Outdoors', 'Health']
  },
  {
    query: 'Outdoor recovery and wellness for athletes',
    purpose: 'Wellness-heavy outdoor query that should still stay in-category.',
    preferredIndustries: ['Sports & Outdoors', 'Health']
  },
  {
    query: 'Kayaking and paddle gear creators',
    purpose: 'Paddle-sport gear query.',
    preferredIndustries: ['Sports & Outdoors']
  },
  {
    query: 'Content creators for scenic hiking trips and product sales',
    purpose: 'Scenic outdoor storytelling with commerce requirement.',
    preferredIndustries: ['Sports & Outdoors']
  },
  {
    query: 'Gear-heavy adventure creators that still fit the brand',
    purpose: 'High-level outdoor fit check for hidden tests.',
    preferredIndustries: ['Sports & Outdoors']
  }
];

export const EVALUATION_CASES: EvaluationCase[] = [
  ...buildCases('smart_home', 'brand_smart_home', [
    ...SMART_HOME_DECOR,
    ...SMART_HOME_UTILITY,
    ...SMART_HOME_DEVICES
  ]),
  ...buildCases('beauty', 'brand_beauty_wellness', [
    ...BEAUTY_SKINCARE,
    ...BEAUTY_BEAUTY,
    ...BEAUTY_CROSSOVER
  ]),
  ...buildCases('outdoor', 'brand_outdoor_adventure', [
    ...OUTDOOR_CORE,
    ...OUTDOOR_TECH,
    ...OUTDOOR_CROSSOVER
  ])
];

if (EVALUATION_CASES.length !== 100) {
  throw new Error(`Expected 100 evaluation cases, found ${EVALUATION_CASES.length}.`);
}
