# Hidden Test Benchmark

Generated: 2026-03-16T19:21:44.481Z

## Summary

- Cases: 100
- Passing cases: 34
- Failing cases: 66
- Case pass rate: 0.34
- Total checks: 600
- Passed checks: 469
- Failed checks: 131
- Check pass rate: 0.7817

## Brand Breakdown

- brand_smart_home: 7/34 cases passing, 145/204 checks passing
- brand_beauty_wellness: 13/33 cases passing, 159/198 checks passing
- brand_outdoor_adventure: 14/33 cases passing, 165/198 checks passing

## Failure Hotspots

- Average query-intent should stay high: 48
- Average anchor-intent should stay meaningful: 36
- Top 5 should match query-specific preferred industries: 31
- Average preferred-industry fit should stay high: 9
- Top 5 should mostly overlap brand industries: 7

## Weakest Cases

- smart_home_26 (brand_smart_home): 5 failed checks
- beauty_16 (brand_beauty_wellness): 4 failed checks
- beauty_18 (brand_beauty_wellness): 4 failed checks
- outdoor_17 (brand_outdoor_adventure): 4 failed checks
- outdoor_26 (brand_outdoor_adventure): 4 failed checks
- smart_home_06 (brand_smart_home): 4 failed checks
- smart_home_21 (brand_smart_home): 4 failed checks
- beauty_24 (brand_beauty_wellness): 3 failed checks
- beauty_31 (brand_beauty_wellness): 3 failed checks
- outdoor_06 (brand_outdoor_adventure): 3 failed checks

## Case Results

### smart_home_core

- Brand: `brand_smart_home`
- Query: "Affordable home decor for small apartments"
- Purpose: Primary submission-style decor query for small spaces.
- Preferred industries: Home, Tools & Hardware
- Hybrid top 5: small_space_living_lee, mid_century_milo, paint_pro_tips_mick, home_office_setup_pam, garage_org_hal
- Metrics: avg_final=0.6236, avg_query_intent=0.5301, avg_anchor_intent=1, avg_brand_industry_fit=0.5333, avg_preferred_industry_fit=0.8, zero_gmv_top5=0, off_brand_top5=0, off_preferred_top5=0, missing_anchor_top5=0
- Checks:
  - PASS Top 5 should avoid zero-GMV false positives (0 zero-GMV creators)
  - PASS Top 5 should mostly overlap brand industries (0 off-brand creators)
  - PASS Top 5 should match query-specific preferred industries (0 off-preferred creators)
  - PASS Average query-intent should stay high (0.530)
  - PASS Average anchor-intent should stay meaningful (1.000)
  - PASS Average preferred-industry fit should stay high (0.800)
- Ablation:
  - semantic_only: small_space_living_lee, renter_decor_tips_kay, diy_furniture_flip_jo, home_gym_builds, garage_org_hal
  - business_only: small_space_living_lee, paint_pro_tips_mick, mid_century_milo, home_office_setup_pam, home_gym_builds
  - hybrid: small_space_living_lee, mid_century_milo, paint_pro_tips_mick, home_office_setup_pam, garage_org_hal

### smart_home_renters

- Brand: `brand_smart_home`
- Query: "Budget apartment decor for renters"
- Purpose: Likely hidden renter decor precision query.
- Preferred industries: Home, Tools & Hardware
- Hybrid top 5: small_space_living_lee, paint_pro_tips_mick, mid_century_milo, home_office_setup_pam, home_gym_builds
- Metrics: avg_final=0.6032, avg_query_intent=0.4776, avg_anchor_intent=0.8, avg_brand_industry_fit=0.4, avg_preferred_industry_fit=0.6, zero_gmv_top5=0, off_brand_top5=1, off_preferred_top5=1, missing_anchor_top5=1
- Checks:
  - PASS Top 5 should avoid zero-GMV false positives (0 zero-GMV creators)
  - PASS Top 5 should mostly overlap brand industries (1 off-brand creators)
  - PASS Top 5 should match query-specific preferred industries (1 off-preferred creators)
  - PASS Average query-intent should stay high (0.478)
  - PASS Average anchor-intent should stay meaningful (0.800)
  - PASS Average preferred-industry fit should stay high (0.600)
- Ablation:
  - semantic_only: renter_decor_tips_kay, home_gym_builds, small_space_living_lee, budget_pc_builds_max, bathroom_reno_tips_sue
  - business_only: small_space_living_lee, paint_pro_tips_mick, mid_century_milo, home_office_setup_pam, home_gym_builds
  - hybrid: small_space_living_lee, paint_pro_tips_mick, mid_century_milo, home_office_setup_pam, home_gym_builds

### smart_home_03

- Brand: `brand_smart_home`
- Query: "Cozy living room decor on a budget"
- Purpose: Tests whether cozy decor creators beat generic home creators.
- Preferred industries: Home, Tools & Hardware
- Hybrid top 5: small_space_living_lee, paint_pro_tips_mick, mid_century_milo, home_office_setup_pam, cozy_home_eleanor
- Metrics: avg_final=0.5863, avg_query_intent=0.375, avg_anchor_intent=1, avg_brand_industry_fit=0.4667, avg_preferred_industry_fit=0.7, zero_gmv_top5=0, off_brand_top5=0, off_preferred_top5=0, missing_anchor_top5=0
- Checks:
  - PASS Top 5 should avoid zero-GMV false positives (0 zero-GMV creators)
  - PASS Top 5 should mostly overlap brand industries (0 off-brand creators)
  - PASS Top 5 should match query-specific preferred industries (0 off-preferred creators)
  - PASS Average query-intent should stay high (0.375)
  - PASS Average anchor-intent should stay meaningful (1.000)
  - PASS Average preferred-industry fit should stay high (0.700)
- Ablation:
  - semantic_only: cozy_home_eleanor, diy_furniture_flip_jo, small_space_living_lee, renter_decor_tips_kay, budget_pc_builds_max
  - business_only: small_space_living_lee, paint_pro_tips_mick, mid_century_milo, home_office_setup_pam, garage_org_hal
  - hybrid: small_space_living_lee, paint_pro_tips_mick, mid_century_milo, home_office_setup_pam, cozy_home_eleanor

### smart_home_04

- Brand: `brand_smart_home`
- Query: "Studio apartment storage and furniture ideas"
- Purpose: Focuses on furniture and layout creators for small homes.
- Preferred industries: Home, Tools & Hardware
- Hybrid top 5: small_space_living_lee, mid_century_milo, home_gym_builds, paint_pro_tips_mick, gaming_phones_rio
- Metrics: avg_final=0.5146, avg_query_intent=0.2519, avg_anchor_intent=0.4, avg_brand_industry_fit=0.4, avg_preferred_industry_fit=0.5, zero_gmv_top5=0, off_brand_top5=1, off_preferred_top5=2, missing_anchor_top5=3
- Checks:
  - PASS Top 5 should avoid zero-GMV false positives (0 zero-GMV creators)
  - PASS Top 5 should mostly overlap brand industries (1 off-brand creators)
  - FAIL Top 5 should match query-specific preferred industries (2 off-preferred creators)
  - FAIL Average query-intent should stay high (0.252)
  - PASS Average anchor-intent should stay meaningful (0.400)
  - PASS Average preferred-industry fit should stay high (0.500)
- Ablation:
  - semantic_only: small_space_living_lee, renter_decor_tips_kay, garage_org_hal, home_gym_builds, nas_builds_otto
  - business_only: small_space_living_lee, mid_century_milo, home_gym_builds, gaming_phones_rio, plumbing_diy_skip
  - hybrid: small_space_living_lee, mid_century_milo, home_gym_builds, paint_pro_tips_mick, gaming_phones_rio

### smart_home_05

- Brand: `brand_smart_home`
- Query: "Multifunctional furniture for tiny apartments"
- Purpose: Pushes apartment and furniture intent together.
- Preferred industries: Home, Tools & Hardware
- Hybrid top 5: small_space_living_lee, mid_century_milo, home_gym_builds, gaming_phones_rio, plumbing_diy_skip
- Metrics: avg_final=0.5199, avg_query_intent=0.3091, avg_anchor_intent=0.4, avg_brand_industry_fit=0.4, avg_preferred_industry_fit=0.5, zero_gmv_top5=0, off_brand_top5=1, off_preferred_top5=2, missing_anchor_top5=3
- Checks:
  - PASS Top 5 should avoid zero-GMV false positives (0 zero-GMV creators)
  - PASS Top 5 should mostly overlap brand industries (1 off-brand creators)
  - FAIL Top 5 should match query-specific preferred industries (2 off-preferred creators)
  - FAIL Average query-intent should stay high (0.309)
  - PASS Average anchor-intent should stay meaningful (0.400)
  - PASS Average preferred-industry fit should stay high (0.500)
- Ablation:
  - semantic_only: small_space_living_lee, garage_org_hal, renter_decor_tips_kay, home_office_setup_pam, mid_century_milo
  - business_only: small_space_living_lee, mid_century_milo, home_gym_builds, gaming_phones_rio, plumbing_diy_skip
  - hybrid: small_space_living_lee, mid_century_milo, home_gym_builds, gaming_phones_rio, plumbing_diy_skip

### smart_home_06

- Brand: `brand_smart_home`
- Query: "Small bedroom makeover ideas on a budget"
- Purpose: Tests decor precision on another room-level query.
- Preferred industries: Home, Tools & Hardware
- Hybrid top 5: small_space_living_lee, home_gym_builds, mid_century_milo, thrift_flip_dani, plumbing_diy_skip
- Metrics: avg_final=0.5647, avg_query_intent=0.2115, avg_anchor_intent=0, avg_brand_industry_fit=0.3333, avg_preferred_industry_fit=0.5, zero_gmv_top5=0, off_brand_top5=2, off_preferred_top5=2, missing_anchor_top5=0
- Checks:
  - PASS Top 5 should avoid zero-GMV false positives (0 zero-GMV creators)
  - FAIL Top 5 should mostly overlap brand industries (2 off-brand creators)
  - FAIL Top 5 should match query-specific preferred industries (2 off-preferred creators)
  - FAIL Average query-intent should stay high (0.212)
  - FAIL Average anchor-intent should stay meaningful (0.000)
  - PASS Average preferred-industry fit should stay high (0.500)
- Ablation:
  - semantic_only: bathroom_reno_tips_sue, diy_furniture_flip_jo, small_space_living_lee, home_gym_builds, plumbing_diy_skip
  - business_only: small_space_living_lee, home_gym_builds, mid_century_milo, thrift_flip_dani, gaming_phones_rio
  - hybrid: small_space_living_lee, home_gym_builds, mid_century_milo, thrift_flip_dani, plumbing_diy_skip

### smart_home_07

- Brand: `brand_smart_home`
- Query: "Minimal apartment decor creators with strong conversions"
- Purpose: Checks minimalist interior relevance plus commerce.
- Preferred industries: Home, Tools & Hardware
- Hybrid top 5: small_space_living_lee, mid_century_milo, paint_pro_tips_mick, home_office_setup_pam, garage_org_hal
- Metrics: avg_final=0.595, avg_query_intent=0.2891, avg_anchor_intent=1, avg_brand_industry_fit=0.5333, avg_preferred_industry_fit=0.8, zero_gmv_top5=0, off_brand_top5=0, off_preferred_top5=0, missing_anchor_top5=0
- Checks:
  - PASS Top 5 should avoid zero-GMV false positives (0 zero-GMV creators)
  - PASS Top 5 should mostly overlap brand industries (0 off-brand creators)
  - PASS Top 5 should match query-specific preferred industries (0 off-preferred creators)
  - FAIL Average query-intent should stay high (0.289)
  - PASS Average anchor-intent should stay meaningful (1.000)
  - PASS Average preferred-industry fit should stay high (0.800)
- Ablation:
  - semantic_only: small_space_living_lee, renter_decor_tips_kay, mid_century_milo, diy_furniture_flip_jo, garage_org_hal
  - business_only: small_space_living_lee, paint_pro_tips_mick, mid_century_milo, home_office_setup_pam, garage_org_hal
  - hybrid: small_space_living_lee, mid_century_milo, paint_pro_tips_mick, home_office_setup_pam, garage_org_hal

### smart_home_08

- Brand: `brand_smart_home`
- Query: "Apartment balcony decor on a budget"
- Purpose: Tests smaller decor niche intent without drifting to unrelated home creators.
- Preferred industries: Home
- Hybrid top 5: small_space_living_lee, paint_pro_tips_mick, mid_century_milo, home_office_setup_pam, home_gym_builds
- Metrics: avg_final=0.5858, avg_query_intent=0.3957, avg_anchor_intent=0.8, avg_brand_industry_fit=0.4, avg_preferred_industry_fit=0.8, zero_gmv_top5=0, off_brand_top5=1, off_preferred_top5=1, missing_anchor_top5=1
- Checks:
  - PASS Top 5 should avoid zero-GMV false positives (0 zero-GMV creators)
  - PASS Top 5 should mostly overlap brand industries (1 off-brand creators)
  - PASS Top 5 should match query-specific preferred industries (1 off-preferred creators)
  - PASS Average query-intent should stay high (0.396)
  - PASS Average anchor-intent should stay meaningful (0.800)
  - PASS Average preferred-industry fit should stay high (0.800)
- Ablation:
  - semantic_only: renter_decor_tips_kay, home_gym_builds, diy_furniture_flip_jo, small_space_living_lee, plumbing_diy_skip
  - business_only: small_space_living_lee, paint_pro_tips_mick, mid_century_milo, home_office_setup_pam, home_gym_builds
  - hybrid: small_space_living_lee, paint_pro_tips_mick, mid_century_milo, home_office_setup_pam, home_gym_builds

### smart_home_09

- Brand: `brand_smart_home`
- Query: "Color palette ideas for cozy apartments"
- Purpose: Looks for interior color and decor creators.
- Preferred industries: Home, Tools & Hardware
- Hybrid top 5: small_space_living_lee, apple_insider_cy, home_gym_builds, paint_pro_tips_mick, mid_century_milo
- Metrics: avg_final=0.5358, avg_query_intent=0.1255, avg_anchor_intent=0, avg_brand_industry_fit=0.4, avg_preferred_industry_fit=0.5, zero_gmv_top5=0, off_brand_top5=1, off_preferred_top5=2, missing_anchor_top5=0
- Checks:
  - PASS Top 5 should avoid zero-GMV false positives (0 zero-GMV creators)
  - PASS Top 5 should mostly overlap brand industries (1 off-brand creators)
  - FAIL Top 5 should match query-specific preferred industries (2 off-preferred creators)
  - FAIL Average query-intent should stay high (0.125)
  - FAIL Average anchor-intent should stay meaningful (0.000)
  - PASS Average preferred-industry fit should stay high (0.500)
- Ablation:
  - semantic_only: color_palette_home_cc, cozy_home_eleanor, paint_pro_tips_mick, small_space_living_lee, renter_decor_tips_kay
  - business_only: small_space_living_lee, apple_insider_cy, home_gym_builds, paint_pro_tips_mick, mid_century_milo
  - hybrid: small_space_living_lee, apple_insider_cy, home_gym_builds, paint_pro_tips_mick, mid_century_milo

### smart_home_10

- Brand: `brand_smart_home`
- Query: "Lighting and lamp ideas for small living rooms"
- Purpose: Should surface lighting-aware home creators, not electronics-first creators.
- Preferred industries: Home, Tools & Hardware
- Hybrid top 5: small_space_living_lee, plumbing_diy_skip, paint_pro_tips_mick, gaming_phones_rio, mid_century_milo
- Metrics: avg_final=0.4621, avg_query_intent=0.0698, avg_anchor_intent=0, avg_brand_industry_fit=0.5333, avg_preferred_industry_fit=0.7, zero_gmv_top5=0, off_brand_top5=0, off_preferred_top5=1, missing_anchor_top5=0
- Checks:
  - PASS Top 5 should avoid zero-GMV false positives (0 zero-GMV creators)
  - PASS Top 5 should mostly overlap brand industries (0 off-brand creators)
  - FAIL Top 5 should match query-specific preferred industries (1 off-preferred creators)
  - FAIL Average query-intent should stay high (0.070)
  - FAIL Average anchor-intent should stay meaningful (0.000)
  - PASS Average preferred-industry fit should stay high (0.700)
- Ablation:
  - semantic_only: lighting_design_tess, small_space_living_lee, electrical_safe_pat, garage_org_hal, kitchen_organizer_jo
  - business_only: small_space_living_lee, gaming_phones_rio, plumbing_diy_skip, paint_pro_tips_mick, mid_century_milo
  - hybrid: small_space_living_lee, plumbing_diy_skip, paint_pro_tips_mick, gaming_phones_rio, mid_century_milo

### smart_home_11

- Brand: `brand_smart_home`
- Query: "Interior design creators for first apartments"
- Purpose: Tests broad interior relevance with beginner apartment intent.
- Preferred industries: Home, Tools & Hardware
- Hybrid top 5: mid_century_milo, paint_pro_tips_mick, small_space_living_lee, color_palette_home_cc, home_office_setup_pam
- Metrics: avg_final=0.5422, avg_query_intent=0.3522, avg_anchor_intent=0.5, avg_brand_industry_fit=0.4667, avg_preferred_industry_fit=0.7, zero_gmv_top5=0, off_brand_top5=0, off_preferred_top5=0, missing_anchor_top5=2
- Checks:
  - PASS Top 5 should avoid zero-GMV false positives (0 zero-GMV creators)
  - PASS Top 5 should mostly overlap brand industries (0 off-brand creators)
  - PASS Top 5 should match query-specific preferred industries (0 off-preferred creators)
  - PASS Average query-intent should stay high (0.352)
  - PASS Average anchor-intent should stay meaningful (0.500)
  - PASS Average preferred-industry fit should stay high (0.700)
- Ablation:
  - semantic_only: renter_decor_tips_kay, small_space_living_lee, mid_century_milo, coding_setup_cait, lighting_design_tess
  - business_only: paint_pro_tips_mick, mid_century_milo, small_space_living_lee, apple_insider_cy, home_gym_builds
  - hybrid: mid_century_milo, paint_pro_tips_mick, small_space_living_lee, color_palette_home_cc, home_office_setup_pam

### smart_home_12

- Brand: `brand_smart_home`
- Query: "Small apartment makeover creators with strong conversions"
- Purpose: High-commerce apartment decor case.
- Preferred industries: Home, Tools & Hardware
- Hybrid top 5: small_space_living_lee, home_gym_builds, plumbing_diy_skip, gaming_phones_rio, mid_century_milo
- Metrics: avg_final=0.5509, avg_query_intent=0.1982, avg_anchor_intent=0, avg_brand_industry_fit=0.4, avg_preferred_industry_fit=0.5, zero_gmv_top5=0, off_brand_top5=1, off_preferred_top5=2, missing_anchor_top5=0
- Checks:
  - PASS Top 5 should avoid zero-GMV false positives (0 zero-GMV creators)
  - PASS Top 5 should mostly overlap brand industries (1 off-brand creators)
  - FAIL Top 5 should match query-specific preferred industries (2 off-preferred creators)
  - FAIL Average query-intent should stay high (0.198)
  - FAIL Average anchor-intent should stay meaningful (0.000)
  - PASS Average preferred-industry fit should stay high (0.500)
- Ablation:
  - semantic_only: small_space_living_lee, renter_decor_tips_kay, diy_furniture_flip_jo, bathroom_reno_tips_sue, kitchen_organizer_jo
  - business_only: small_space_living_lee, home_gym_builds, gaming_phones_rio, plumbing_diy_skip, paint_pro_tips_mick
  - hybrid: small_space_living_lee, home_gym_builds, plumbing_diy_skip, gaming_phones_rio, mid_century_milo

### smart_home_organization

- Brand: `brand_smart_home`
- Query: "Small space organization ideas for apartments"
- Purpose: Organization-heavy small home query.
- Preferred industries: Home, Tools & Hardware
- Hybrid top 5: small_space_living_lee, home_gym_builds, mid_century_milo, garage_org_hal, home_office_setup_pam
- Metrics: avg_final=0.6187, avg_query_intent=0.5259, avg_anchor_intent=0, avg_brand_industry_fit=0.4, avg_preferred_industry_fit=0.6, zero_gmv_top5=0, off_brand_top5=1, off_preferred_top5=1, missing_anchor_top5=0
- Checks:
  - PASS Top 5 should avoid zero-GMV false positives (0 zero-GMV creators)
  - PASS Top 5 should mostly overlap brand industries (1 off-brand creators)
  - PASS Top 5 should match query-specific preferred industries (1 off-preferred creators)
  - PASS Average query-intent should stay high (0.526)
  - FAIL Average anchor-intent should stay meaningful (0.000)
  - PASS Average preferred-industry fit should stay high (0.600)
- Ablation:
  - semantic_only: small_space_living_lee, garage_org_hal, renter_decor_tips_kay, home_gym_builds, kitchen_organizer_jo
  - business_only: small_space_living_lee, apple_insider_cy, home_gym_builds, mid_century_milo, home_office_setup_pam
  - hybrid: small_space_living_lee, home_gym_builds, mid_century_milo, garage_org_hal, home_office_setup_pam

### smart_home_14

- Brand: `brand_smart_home`
- Query: "Kitchen organization ideas for small apartments"
- Purpose: Should favor storage and organization creators over broad decor.
- Preferred industries: Home, Tools & Hardware
- Hybrid top 5: small_space_living_lee, home_office_setup_pam, home_gym_builds, mid_century_milo, apple_insider_cy
- Metrics: avg_final=0.5997, avg_query_intent=0.2926, avg_anchor_intent=0, avg_brand_industry_fit=0.3333, avg_preferred_industry_fit=0.4, zero_gmv_top5=0, off_brand_top5=1, off_preferred_top5=2, missing_anchor_top5=0
- Checks:
  - PASS Top 5 should avoid zero-GMV false positives (0 zero-GMV creators)
  - PASS Top 5 should mostly overlap brand industries (1 off-brand creators)
  - FAIL Top 5 should match query-specific preferred industries (2 off-preferred creators)
  - FAIL Average query-intent should stay high (0.293)
  - FAIL Average anchor-intent should stay meaningful (0.000)
  - PASS Average preferred-industry fit should stay high (0.400)
- Ablation:
  - semantic_only: kitchen_organizer_jo, small_space_living_lee, garage_org_hal, renter_decor_tips_kay, home_office_setup_pam
  - business_only: small_space_living_lee, apple_insider_cy, home_gym_builds, mid_century_milo, home_office_setup_pam
  - hybrid: small_space_living_lee, home_office_setup_pam, home_gym_builds, mid_century_milo, apple_insider_cy

### smart_home_15

- Brand: `brand_smart_home`
- Query: "Pantry and kitchen storage for renters"
- Purpose: Tests renter-friendly organization intent.
- Preferred industries: Home, Tools & Hardware
- Hybrid top 5: small_space_living_lee, home_gym_builds, garage_org_hal, plumbing_diy_skip, paint_pro_tips_mick
- Metrics: avg_final=0.5311, avg_query_intent=0.2095, avg_anchor_intent=0, avg_brand_industry_fit=0.4667, avg_preferred_industry_fit=0.7, zero_gmv_top5=0, off_brand_top5=1, off_preferred_top5=1, missing_anchor_top5=0
- Checks:
  - PASS Top 5 should avoid zero-GMV false positives (0 zero-GMV creators)
  - PASS Top 5 should mostly overlap brand industries (1 off-brand creators)
  - PASS Top 5 should match query-specific preferred industries (1 off-preferred creators)
  - FAIL Average query-intent should stay high (0.210)
  - FAIL Average anchor-intent should stay meaningful (0.000)
  - PASS Average preferred-industry fit should stay high (0.700)
- Ablation:
  - semantic_only: kitchen_organizer_jo, small_space_living_lee, renter_decor_tips_kay, garage_org_hal, nas_builds_otto
  - business_only: small_space_living_lee, home_gym_builds, plumbing_diy_skip, paint_pro_tips_mick, mid_century_milo
  - hybrid: small_space_living_lee, home_gym_builds, garage_org_hal, plumbing_diy_skip, paint_pro_tips_mick

### smart_home_16

- Brand: `brand_smart_home`
- Query: "Closet organization ideas for small bedrooms"
- Purpose: Smaller-space organization query with strong anchor terms.
- Preferred industries: Home, Tools & Hardware
- Hybrid top 5: small_space_living_lee, mid_century_milo, home_office_setup_pam, home_gym_builds, garage_org_hal
- Metrics: avg_final=0.5692, avg_query_intent=0.3019, avg_anchor_intent=0, avg_brand_industry_fit=0.4, avg_preferred_industry_fit=0.6, zero_gmv_top5=0, off_brand_top5=1, off_preferred_top5=1, missing_anchor_top5=0
- Checks:
  - PASS Top 5 should avoid zero-GMV false positives (0 zero-GMV creators)
  - PASS Top 5 should mostly overlap brand industries (1 off-brand creators)
  - PASS Top 5 should match query-specific preferred industries (1 off-preferred creators)
  - FAIL Average query-intent should stay high (0.302)
  - FAIL Average anchor-intent should stay meaningful (0.000)
  - PASS Average preferred-industry fit should stay high (0.600)
- Ablation:
  - semantic_only: garage_org_hal, small_space_living_lee, kitchen_organizer_jo, cable_management_al, bookshelf_tours_gem
  - business_only: small_space_living_lee, home_gym_builds, mid_century_milo, home_office_setup_pam, plumbing_diy_skip
  - hybrid: small_space_living_lee, mid_century_milo, home_office_setup_pam, home_gym_builds, garage_org_hal

### smart_home_17

- Brand: `brand_smart_home`
- Query: "Entryway storage for small homes"
- Purpose: Tests storage creators in a compact home setting.
- Preferred industries: Home, Tools & Hardware
- Hybrid top 5: small_space_living_lee, mid_century_milo, garage_org_hal, home_gym_builds, plumbing_diy_skip
- Metrics: avg_final=0.5956, avg_query_intent=0.4725, avg_anchor_intent=0, avg_brand_industry_fit=0.4667, avg_preferred_industry_fit=0.7, zero_gmv_top5=0, off_brand_top5=1, off_preferred_top5=1, missing_anchor_top5=0
- Checks:
  - PASS Top 5 should avoid zero-GMV false positives (0 zero-GMV creators)
  - PASS Top 5 should mostly overlap brand industries (1 off-brand creators)
  - PASS Top 5 should match query-specific preferred industries (1 off-preferred creators)
  - PASS Average query-intent should stay high (0.472)
  - FAIL Average anchor-intent should stay meaningful (0.000)
  - PASS Average preferred-industry fit should stay high (0.700)
- Ablation:
  - semantic_only: small_space_living_lee, garage_org_hal, kitchen_organizer_jo, nas_builds_otto, diy_furniture_flip_jo
  - business_only: small_space_living_lee, home_gym_builds, mid_century_milo, plumbing_diy_skip, paint_pro_tips_mick
  - hybrid: small_space_living_lee, mid_century_milo, garage_org_hal, home_gym_builds, plumbing_diy_skip

### smart_home_18

- Brand: `brand_smart_home`
- Query: "Home office setup for small spaces"
- Purpose: Should reward office layout creators with home relevance.
- Preferred industries: Home, Computer & Office Equipment
- Hybrid top 5: small_space_living_lee, home_office_setup_pam, home_gym_builds, mid_century_milo, webcam_reviews_sky
- Metrics: avg_final=0.6441, avg_query_intent=0.5258, avg_anchor_intent=0, avg_brand_industry_fit=0.3333, avg_preferred_industry_fit=0.4, zero_gmv_top5=0, off_brand_top5=1, off_preferred_top5=1, missing_anchor_top5=0
- Checks:
  - PASS Top 5 should avoid zero-GMV false positives (0 zero-GMV creators)
  - PASS Top 5 should mostly overlap brand industries (1 off-brand creators)
  - PASS Top 5 should match query-specific preferred industries (1 off-preferred creators)
  - PASS Average query-intent should stay high (0.526)
  - FAIL Average anchor-intent should stay meaningful (0.000)
  - PASS Average preferred-industry fit should stay high (0.400)
- Ablation:
  - semantic_only: home_office_setup_pam, desk_setup_reviews_jo, coding_setup_cait, cable_management_al, garage_org_hal
  - business_only: small_space_living_lee, home_gym_builds, mid_century_milo, home_office_setup_pam, webcam_reviews_sky
  - hybrid: small_space_living_lee, home_office_setup_pam, home_gym_builds, mid_century_milo, webcam_reviews_sky

### smart_home_19

- Brand: `brand_smart_home`
- Query: "Home office desk organization for remote workers"
- Purpose: Checks office productivity and organization crossover.
- Preferred industries: Home, Computer & Office Equipment
- Hybrid top 5: home_office_setup_pam, small_space_living_lee, webcam_reviews_sky, apple_insider_cy, desk_setup_reviews_jo
- Metrics: avg_final=0.612, avg_query_intent=0.5081, avg_anchor_intent=0, avg_brand_industry_fit=0.3333, avg_preferred_industry_fit=0.4, zero_gmv_top5=0, off_brand_top5=0, off_preferred_top5=1, missing_anchor_top5=0
- Checks:
  - PASS Top 5 should avoid zero-GMV false positives (0 zero-GMV creators)
  - PASS Top 5 should mostly overlap brand industries (0 off-brand creators)
  - PASS Top 5 should match query-specific preferred industries (1 off-preferred creators)
  - PASS Average query-intent should stay high (0.508)
  - FAIL Average anchor-intent should stay meaningful (0.000)
  - PASS Average preferred-industry fit should stay high (0.400)
- Ablation:
  - semantic_only: home_office_setup_pam, desk_setup_reviews_jo, cable_management_al, coding_setup_cait, garage_org_hal
  - business_only: small_space_living_lee, apple_insider_cy, home_office_setup_pam, webcam_reviews_sky, gaming_phones_rio
  - hybrid: home_office_setup_pam, small_space_living_lee, webcam_reviews_sky, apple_insider_cy, desk_setup_reviews_jo

### smart_home_20

- Brand: `brand_smart_home`
- Query: "Bathroom upgrades that feel expensive on a budget"
- Purpose: Targets renovation and home improvement creators.
- Preferred industries: Home, Tools & Hardware
- Hybrid top 5: plumbing_diy_skip, bathroom_reno_tips_sue, apple_insider_cy, small_space_living_lee, paint_pro_tips_mick
- Metrics: avg_final=0.544, avg_query_intent=0.1672, avg_anchor_intent=0, avg_brand_industry_fit=0.4667, avg_preferred_industry_fit=0.6, zero_gmv_top5=0, off_brand_top5=0, off_preferred_top5=1, missing_anchor_top5=0
- Checks:
  - PASS Top 5 should avoid zero-GMV false positives (0 zero-GMV creators)
  - PASS Top 5 should mostly overlap brand industries (0 off-brand creators)
  - PASS Top 5 should match query-specific preferred industries (1 off-preferred creators)
  - FAIL Average query-intent should stay high (0.167)
  - FAIL Average anchor-intent should stay meaningful (0.000)
  - PASS Average preferred-industry fit should stay high (0.600)
- Ablation:
  - semantic_only: bathroom_reno_tips_sue, plumbing_diy_skip, tile_work_pro_sal, budget_pc_builds_max, diy_furniture_flip_jo
  - business_only: plumbing_diy_skip, apple_insider_cy, small_space_living_lee, paint_pro_tips_mick, mid_century_milo
  - hybrid: plumbing_diy_skip, bathroom_reno_tips_sue, apple_insider_cy, small_space_living_lee, paint_pro_tips_mick

### smart_home_21

- Brand: `brand_smart_home`
- Query: "Budget paint ideas for refreshing a rental"
- Purpose: Should surface paint and color creators instead of generic decor.
- Preferred industries: Home, Tools & Hardware
- Hybrid top 5: home_gym_builds, paint_pro_tips_mick, small_space_living_lee, thrift_flip_dani, plumbing_diy_skip
- Metrics: avg_final=0.5004, avg_query_intent=0.0863, avg_anchor_intent=0, avg_brand_industry_fit=0.3333, avg_preferred_industry_fit=0.5, zero_gmv_top5=0, off_brand_top5=2, off_preferred_top5=2, missing_anchor_top5=0
- Checks:
  - PASS Top 5 should avoid zero-GMV false positives (0 zero-GMV creators)
  - FAIL Top 5 should mostly overlap brand industries (2 off-brand creators)
  - FAIL Top 5 should match query-specific preferred industries (2 off-preferred creators)
  - FAIL Average query-intent should stay high (0.086)
  - FAIL Average anchor-intent should stay meaningful (0.000)
  - PASS Average preferred-industry fit should stay high (0.500)
- Ablation:
  - semantic_only: diy_furniture_flip_jo, paint_pro_tips_mick, bathroom_reno_tips_sue, renter_decor_tips_kay, color_palette_home_cc
  - business_only: home_gym_builds, thrift_flip_dani, small_space_living_lee, gaming_phones_rio, plumbing_diy_skip
  - hybrid: home_gym_builds, paint_pro_tips_mick, small_space_living_lee, thrift_flip_dani, plumbing_diy_skip

### smart_home_22

- Brand: `brand_smart_home`
- Query: "Paint and color creators for interior refreshes"
- Purpose: Tests paint-specific creators with home overlap.
- Preferred industries: Home, Tools & Hardware
- Hybrid top 5: paint_pro_tips_mick, mid_century_milo, color_palette_home_cc, apple_insider_cy, small_space_living_lee
- Metrics: avg_final=0.5417, avg_query_intent=0.3032, avg_anchor_intent=0.6, avg_brand_industry_fit=0.4667, avg_preferred_industry_fit=0.6, zero_gmv_top5=0, off_brand_top5=0, off_preferred_top5=1, missing_anchor_top5=2
- Checks:
  - PASS Top 5 should avoid zero-GMV false positives (0 zero-GMV creators)
  - PASS Top 5 should mostly overlap brand industries (0 off-brand creators)
  - PASS Top 5 should match query-specific preferred industries (1 off-preferred creators)
  - FAIL Average query-intent should stay high (0.303)
  - PASS Average anchor-intent should stay meaningful (0.600)
  - PASS Average preferred-industry fit should stay high (0.600)
- Ablation:
  - semantic_only: paint_pro_tips_mick, color_palette_home_cc, diy_furniture_flip_jo, bathroom_reno_tips_sue, art_supplies_luna
  - business_only: paint_pro_tips_mick, mid_century_milo, apple_insider_cy, small_space_living_lee, color_palette_home_cc
  - hybrid: paint_pro_tips_mick, mid_century_milo, color_palette_home_cc, apple_insider_cy, small_space_living_lee

### smart_home_23

- Brand: `brand_smart_home`
- Query: "Garage organization systems for homeowners"
- Purpose: Utility-heavy home query with workshop flavor.
- Preferred industries: Home, Tools & Hardware
- Hybrid top 5: small_space_living_lee, garage_org_hal, plumbing_diy_skip, home_office_setup_pam, apple_insider_cy
- Metrics: avg_final=0.6027, avg_query_intent=0.3143, avg_anchor_intent=0, avg_brand_industry_fit=0.4667, avg_preferred_industry_fit=0.6, zero_gmv_top5=0, off_brand_top5=0, off_preferred_top5=1, missing_anchor_top5=0
- Checks:
  - PASS Top 5 should avoid zero-GMV false positives (0 zero-GMV creators)
  - PASS Top 5 should mostly overlap brand industries (0 off-brand creators)
  - PASS Top 5 should match query-specific preferred industries (1 off-preferred creators)
  - FAIL Average query-intent should stay high (0.314)
  - FAIL Average anchor-intent should stay meaningful (0.000)
  - PASS Average preferred-industry fit should stay high (0.600)
- Ablation:
  - semantic_only: garage_org_hal, nas_builds_otto, kitchen_organizer_jo, cable_management_al, power_tools_sam
  - business_only: small_space_living_lee, plumbing_diy_skip, apple_insider_cy, home_office_setup_pam, gaming_phones_rio
  - hybrid: small_space_living_lee, garage_org_hal, plumbing_diy_skip, home_office_setup_pam, apple_insider_cy

### smart_home_24

- Brand: `brand_smart_home`
- Query: "Workshop and garage storage content that sells"
- Purpose: Commerce-heavy garage organization case.
- Preferred industries: Home, Tools & Hardware
- Hybrid top 5: garage_org_hal, apple_insider_cy, small_space_living_lee, plumbing_diy_skip, gaming_phones_rio
- Metrics: avg_final=0.5232, avg_query_intent=0.1869, avg_anchor_intent=0, avg_brand_industry_fit=0.4667, avg_preferred_industry_fit=0.5, zero_gmv_top5=0, off_brand_top5=0, off_preferred_top5=2, missing_anchor_top5=0
- Checks:
  - PASS Top 5 should avoid zero-GMV false positives (0 zero-GMV creators)
  - PASS Top 5 should mostly overlap brand industries (0 off-brand creators)
  - FAIL Top 5 should match query-specific preferred industries (2 off-preferred creators)
  - FAIL Average query-intent should stay high (0.187)
  - FAIL Average anchor-intent should stay meaningful (0.000)
  - PASS Average preferred-industry fit should stay high (0.500)
- Ablation:
  - semantic_only: garage_org_hal, workshop_builds_ed, nas_builds_otto, cable_management_al, power_tools_sam
  - business_only: apple_insider_cy, small_space_living_lee, gaming_phones_rio, plumbing_diy_skip, paint_pro_tips_mick
  - hybrid: garage_org_hal, apple_insider_cy, small_space_living_lee, plumbing_diy_skip, gaming_phones_rio

### smart_home_devices

- Brand: `brand_smart_home`
- Query: "Affordable smart home devices for first apartments"
- Purpose: Allows electronics crossover while keeping home-device relevance.
- Preferred industries: Home, Tools & Hardware, Phones & Electronics
- Hybrid top 5: small_space_living_lee, apple_insider_cy, gaming_phones_rio, electrical_safe_pat, webcam_reviews_sky
- Metrics: avg_final=0.6297, avg_query_intent=0.4022, avg_anchor_intent=1, avg_brand_industry_fit=0.3333, avg_preferred_industry_fit=0.3333, zero_gmv_top5=0, off_brand_top5=0, off_preferred_top5=0, missing_anchor_top5=0
- Checks:
  - PASS Top 5 should avoid zero-GMV false positives (0 zero-GMV creators)
  - PASS Top 5 should mostly overlap brand industries (0 off-brand creators)
  - PASS Top 5 should match query-specific preferred industries (0 off-preferred creators)
  - PASS Average query-intent should stay high (0.402)
  - PASS Average anchor-intent should stay meaningful (1.000)
  - FAIL Average preferred-industry fit should stay high (0.333)
- Ablation:
  - semantic_only: smart_home_build_eli, budget_phones_sal, home_gym_builds, renter_decor_tips_kay, electrical_safe_pat
  - business_only: apple_insider_cy, small_space_living_lee, gaming_phones_rio, webcam_reviews_sky, kids_toy_reviews
  - hybrid: small_space_living_lee, apple_insider_cy, gaming_phones_rio, electrical_safe_pat, webcam_reviews_sky

### smart_home_26

- Brand: `brand_smart_home`
- Query: "Budget-friendly smart plugs and home automation"
- Purpose: Tests automation creators with real device intent.
- Preferred industries: Phones & Electronics, Home, Tools & Hardware
- Hybrid top 5: kids_toy_reviews, home_gym_builds, apple_insider_cy, small_space_living_lee, plumbing_diy_skip
- Metrics: avg_final=0.5307, avg_query_intent=0.15, avg_anchor_intent=0, avg_brand_industry_fit=0.2667, avg_preferred_industry_fit=0.2667, zero_gmv_top5=0, off_brand_top5=2, off_preferred_top5=2, missing_anchor_top5=0
- Checks:
  - PASS Top 5 should avoid zero-GMV false positives (0 zero-GMV creators)
  - FAIL Top 5 should mostly overlap brand industries (2 off-brand creators)
  - FAIL Top 5 should match query-specific preferred industries (2 off-preferred creators)
  - FAIL Average query-intent should stay high (0.150)
  - FAIL Average anchor-intent should stay meaningful (0.000)
  - FAIL Average preferred-industry fit should stay high (0.267)
- Ablation:
  - semantic_only: smart_home_build_eli, electrical_safe_pat, budget_phones_sal, budget_pc_builds_max, plumbing_diy_skip
  - business_only: kids_toy_reviews, apple_insider_cy, home_gym_builds, small_space_living_lee, gaming_phones_rio
  - hybrid: kids_toy_reviews, home_gym_builds, apple_insider_cy, small_space_living_lee, plumbing_diy_skip

### smart_home_27

- Brand: `brand_smart_home`
- Query: "Smart lighting upgrades for apartments"
- Purpose: Should reward lighting and home automation creators.
- Preferred industries: Home, Tools & Hardware, Phones & Electronics
- Hybrid top 5: small_space_living_lee, plumbing_diy_skip, home_gym_builds, apple_insider_cy, gaming_phones_rio
- Metrics: avg_final=0.5683, avg_query_intent=0.1945, avg_anchor_intent=0, avg_brand_industry_fit=0.3333, avg_preferred_industry_fit=0.3333, zero_gmv_top5=0, off_brand_top5=1, off_preferred_top5=1, missing_anchor_top5=0
- Checks:
  - PASS Top 5 should avoid zero-GMV false positives (0 zero-GMV creators)
  - PASS Top 5 should mostly overlap brand industries (1 off-brand creators)
  - PASS Top 5 should match query-specific preferred industries (1 off-preferred creators)
  - FAIL Average query-intent should stay high (0.195)
  - FAIL Average anchor-intent should stay meaningful (0.000)
  - FAIL Average preferred-industry fit should stay high (0.333)
- Ablation:
  - semantic_only: lighting_design_tess, smart_home_build_eli, electrical_safe_pat, plumbing_diy_skip, small_space_living_lee
  - business_only: small_space_living_lee, plumbing_diy_skip, apple_insider_cy, home_gym_builds, gaming_phones_rio
  - hybrid: small_space_living_lee, plumbing_diy_skip, home_gym_builds, apple_insider_cy, gaming_phones_rio

### smart_home_28

- Brand: `brand_smart_home`
- Query: "Smart security devices for apartment dwellers"
- Purpose: Home security device case for renters and apartments.
- Preferred industries: Phones & Electronics, Home
- Hybrid top 5: small_space_living_lee, apple_insider_cy, gaming_phones_rio, electrical_safe_pat, webcam_reviews_sky
- Metrics: avg_final=0.6213, avg_query_intent=0.3563, avg_anchor_intent=1, avg_brand_industry_fit=0.3333, avg_preferred_industry_fit=0.4, zero_gmv_top5=0, off_brand_top5=0, off_preferred_top5=1, missing_anchor_top5=0
- Checks:
  - PASS Top 5 should avoid zero-GMV false positives (0 zero-GMV creators)
  - PASS Top 5 should mostly overlap brand industries (0 off-brand creators)
  - PASS Top 5 should match query-specific preferred industries (1 off-preferred creators)
  - PASS Average query-intent should stay high (0.356)
  - PASS Average anchor-intent should stay meaningful (1.000)
  - PASS Average preferred-industry fit should stay high (0.400)
- Ablation:
  - semantic_only: smart_home_build_eli, electrical_safe_pat, renter_decor_tips_kay, nas_builds_otto, home_gym_builds
  - business_only: apple_insider_cy, small_space_living_lee, gaming_phones_rio, webcam_reviews_sky, streaming_setup_ada
  - hybrid: small_space_living_lee, apple_insider_cy, gaming_phones_rio, electrical_safe_pat, webcam_reviews_sky

### smart_home_29

- Brand: `brand_smart_home`
- Query: "Safe home wiring and smart device setup"
- Purpose: Should reward electrical and safe setup creators.
- Preferred industries: Tools & Hardware, Phones & Electronics, Home
- Hybrid top 5: apple_insider_cy, electrical_safe_pat, small_space_living_lee, gaming_phones_rio, webcam_reviews_sky
- Metrics: avg_final=0.6261, avg_query_intent=0.3624, avg_anchor_intent=1, avg_brand_industry_fit=0.3333, avg_preferred_industry_fit=0.3333, zero_gmv_top5=0, off_brand_top5=0, off_preferred_top5=0, missing_anchor_top5=0
- Checks:
  - PASS Top 5 should avoid zero-GMV false positives (0 zero-GMV creators)
  - PASS Top 5 should mostly overlap brand industries (0 off-brand creators)
  - PASS Top 5 should match query-specific preferred industries (0 off-preferred creators)
  - PASS Average query-intent should stay high (0.362)
  - PASS Average anchor-intent should stay meaningful (1.000)
  - FAIL Average preferred-industry fit should stay high (0.333)
- Ablation:
  - semantic_only: electrical_safe_pat, smart_home_build_eli, network_nerd_evan, ladder_safety_tom, cable_management_al
  - business_only: apple_insider_cy, small_space_living_lee, gaming_phones_rio, electrical_safe_pat, webcam_reviews_sky
  - hybrid: apple_insider_cy, electrical_safe_pat, small_space_living_lee, gaming_phones_rio, webcam_reviews_sky

### smart_home_30

- Brand: `brand_smart_home`
- Query: "Affordable video doorbell and apartment security setup"
- Purpose: Specific apartment security and electronics crossover query.
- Preferred industries: Phones & Electronics, Home
- Hybrid top 5: home_gym_builds, apple_insider_cy, small_space_living_lee, gaming_phones_rio, plumbing_diy_skip
- Metrics: avg_final=0.4961, avg_query_intent=0.1387, avg_anchor_intent=0, avg_brand_industry_fit=0.3333, avg_preferred_industry_fit=0.4, zero_gmv_top5=0, off_brand_top5=1, off_preferred_top5=1, missing_anchor_top5=0
- Checks:
  - PASS Top 5 should avoid zero-GMV false positives (0 zero-GMV creators)
  - PASS Top 5 should mostly overlap brand industries (1 off-brand creators)
  - PASS Top 5 should match query-specific preferred industries (1 off-preferred creators)
  - FAIL Average query-intent should stay high (0.139)
  - FAIL Average anchor-intent should stay meaningful (0.000)
  - PASS Average preferred-industry fit should stay high (0.400)
- Ablation:
  - semantic_only: webcam_reviews_sky, budget_phones_sal, home_gym_builds, desk_setup_reviews_jo, smart_home_build_eli
  - business_only: apple_insider_cy, home_gym_builds, small_space_living_lee, gaming_phones_rio, plumbing_diy_skip
  - hybrid: home_gym_builds, apple_insider_cy, small_space_living_lee, gaming_phones_rio, plumbing_diy_skip

### smart_home_31

- Brand: `brand_smart_home`
- Query: "Home automation creators for beginners"
- Purpose: Tests automation vocabulary without apartment modifiers.
- Preferred industries: Phones & Electronics, Home
- Hybrid top 5: welding_basics_hugo, apple_insider_cy, small_space_living_lee, plumbing_diy_skip, gaming_phones_rio
- Metrics: avg_final=0.5229, avg_query_intent=0.1519, avg_anchor_intent=0, avg_brand_industry_fit=0.4667, avg_preferred_industry_fit=0.5, zero_gmv_top5=0, off_brand_top5=0, off_preferred_top5=0, missing_anchor_top5=0
- Checks:
  - PASS Top 5 should avoid zero-GMV false positives (0 zero-GMV creators)
  - PASS Top 5 should mostly overlap brand industries (0 off-brand creators)
  - PASS Top 5 should match query-specific preferred industries (0 off-preferred creators)
  - FAIL Average query-intent should stay high (0.152)
  - FAIL Average anchor-intent should stay meaningful (0.000)
  - PASS Average preferred-industry fit should stay high (0.500)
- Ablation:
  - semantic_only: smart_home_build_eli, electrical_safe_pat, coding_setup_cait, plumbing_diy_skip, network_nerd_evan
  - business_only: apple_insider_cy, welding_basics_hugo, small_space_living_lee, gaming_phones_rio, plumbing_diy_skip
  - hybrid: welding_basics_hugo, apple_insider_cy, small_space_living_lee, plumbing_diy_skip, gaming_phones_rio

### smart_home_32

- Brand: `brand_smart_home`
- Query: "Device setup creators for home offices"
- Purpose: Checks home office device setup without losing home fit.
- Preferred industries: Phones & Electronics, Computer & Office Equipment, Home
- Hybrid top 5: apple_insider_cy, small_space_living_lee, gaming_phones_rio, webcam_reviews_sky, streaming_setup_ada
- Metrics: avg_final=0.6404, avg_query_intent=0.4494, avg_anchor_intent=1, avg_brand_industry_fit=0.3333, avg_preferred_industry_fit=0.4667, zero_gmv_top5=0, off_brand_top5=0, off_preferred_top5=0, missing_anchor_top5=0
- Checks:
  - PASS Top 5 should avoid zero-GMV false positives (0 zero-GMV creators)
  - PASS Top 5 should mostly overlap brand industries (0 off-brand creators)
  - PASS Top 5 should match query-specific preferred industries (0 off-preferred creators)
  - PASS Average query-intent should stay high (0.449)
  - PASS Average anchor-intent should stay meaningful (1.000)
  - PASS Average preferred-industry fit should stay high (0.467)
- Ablation:
  - semantic_only: coding_setup_cait, desk_setup_reviews_jo, home_office_setup_pam, cable_management_al, network_nerd_evan
  - business_only: apple_insider_cy, small_space_living_lee, gaming_phones_rio, webcam_reviews_sky, streaming_setup_ada
  - hybrid: apple_insider_cy, small_space_living_lee, gaming_phones_rio, webcam_reviews_sky, streaming_setup_ada

### smart_home_33

- Brand: `brand_smart_home`
- Query: "Apartment gadget creators with strong conversions"
- Purpose: Commerce-heavy apartment electronics case.
- Preferred industries: Phones & Electronics, Home
- Hybrid top 5: small_space_living_lee, home_gym_builds, apple_insider_cy, gaming_phones_rio, plumbing_diy_skip
- Metrics: avg_final=0.5404, avg_query_intent=0.0989, avg_anchor_intent=0, avg_brand_industry_fit=0.3333, avg_preferred_industry_fit=0.4, zero_gmv_top5=0, off_brand_top5=1, off_preferred_top5=1, missing_anchor_top5=0
- Checks:
  - PASS Top 5 should avoid zero-GMV false positives (0 zero-GMV creators)
  - PASS Top 5 should mostly overlap brand industries (1 off-brand creators)
  - PASS Top 5 should match query-specific preferred industries (1 off-preferred creators)
  - FAIL Average query-intent should stay high (0.099)
  - FAIL Average anchor-intent should stay meaningful (0.000)
  - PASS Average preferred-industry fit should stay high (0.400)
- Ablation:
  - semantic_only: smart_home_build_eli, power_tools_sam, small_space_living_lee, renter_decor_tips_kay, gaming_phones_rio
  - business_only: small_space_living_lee, apple_insider_cy, home_gym_builds, gaming_phones_rio, plumbing_diy_skip
  - hybrid: small_space_living_lee, home_gym_builds, apple_insider_cy, gaming_phones_rio, plumbing_diy_skip

### smart_home_34

- Brand: `brand_smart_home`
- Query: "Connected lighting and smart switch creators"
- Purpose: Looks for wiring, lighting, and automation relevance.
- Preferred industries: Phones & Electronics, Tools & Hardware, Home
- Hybrid top 5: apple_insider_cy, small_space_living_lee, gaming_phones_rio, plumbing_diy_skip, electrical_safe_pat
- Metrics: avg_final=0.4688, avg_query_intent=0.0359, avg_anchor_intent=0, avg_brand_industry_fit=0.4, avg_preferred_industry_fit=0.4, zero_gmv_top5=0, off_brand_top5=0, off_preferred_top5=0, missing_anchor_top5=0
- Checks:
  - PASS Top 5 should avoid zero-GMV false positives (0 zero-GMV creators)
  - PASS Top 5 should mostly overlap brand industries (0 off-brand creators)
  - PASS Top 5 should match query-specific preferred industries (0 off-preferred creators)
  - FAIL Average query-intent should stay high (0.036)
  - FAIL Average anchor-intent should stay meaningful (0.000)
  - PASS Average preferred-industry fit should stay high (0.400)
- Ablation:
  - semantic_only: smart_home_build_eli, lighting_design_tess, electrical_safe_pat, power_tools_sam, network_nerd_evan
  - business_only: apple_insider_cy, small_space_living_lee, gaming_phones_rio, plumbing_diy_skip, mid_century_milo
  - hybrid: apple_insider_cy, small_space_living_lee, gaming_phones_rio, plumbing_diy_skip, electrical_safe_pat

### beauty_repeat_purchase

- Brand: `brand_beauty_wellness`
- Query: "Skincare creators who drive repeat purchases"
- Purpose: Core commerce-heavy skincare query.
- Preferred industries: Beauty, Health
- Hybrid top 5: natural_beauty_jade, glow_up_journey_mei, glam_by_destiny, spf_every_day_quinn, mens_grooming_kai
- Metrics: avg_final=0.5938, avg_query_intent=0.5172, avg_anchor_intent=1, avg_brand_industry_fit=0.6, avg_preferred_industry_fit=0.6, zero_gmv_top5=0, off_brand_top5=0, off_preferred_top5=0, missing_anchor_top5=0
- Checks:
  - PASS Top 5 should avoid zero-GMV false positives (0 zero-GMV creators)
  - PASS Top 5 should mostly overlap brand industries (0 off-brand creators)
  - PASS Top 5 should match query-specific preferred industries (0 off-preferred creators)
  - PASS Average query-intent should stay high (0.517)
  - PASS Average anchor-intent should stay meaningful (1.000)
  - PASS Average preferred-industry fit should stay high (0.600)
- Ablation:
  - semantic_only: skincare_first_anya, natural_beauty_jade, drugstore_beauty_hana, glow_up_journey_mei, spf_every_day_quinn
  - business_only: natural_beauty_jade, glow_up_journey_mei, glam_by_destiny, spf_every_day_quinn, plus_size_glam_val
  - hybrid: natural_beauty_jade, glow_up_journey_mei, glam_by_destiny, spf_every_day_quinn, mens_grooming_kai

### beauty_budget_skincare

- Brand: `brand_beauty_wellness`
- Query: "Budget skincare routines for acne-prone skin"
- Purpose: Budget skincare plus acne specificity.
- Preferred industries: Beauty, Health
- Hybrid top 5: natural_beauty_jade, glow_up_journey_mei, glam_by_destiny, spf_every_day_quinn, mens_grooming_kai
- Metrics: avg_final=0.5787, avg_query_intent=0.4756, avg_anchor_intent=0.6628, avg_brand_industry_fit=0.6, avg_preferred_industry_fit=0.6, zero_gmv_top5=0, off_brand_top5=0, off_preferred_top5=0, missing_anchor_top5=0
- Checks:
  - PASS Top 5 should avoid zero-GMV false positives (0 zero-GMV creators)
  - PASS Top 5 should mostly overlap brand industries (0 off-brand creators)
  - PASS Top 5 should match query-specific preferred industries (0 off-preferred creators)
  - PASS Average query-intent should stay high (0.476)
  - PASS Average anchor-intent should stay meaningful (0.663)
  - PASS Average preferred-industry fit should stay high (0.600)
- Ablation:
  - semantic_only: skincare_first_anya, glow_up_journey_mei, mens_grooming_kai, drugstore_beauty_hana, natural_beauty_jade
  - business_only: natural_beauty_jade, glow_up_journey_mei, glam_by_destiny, home_gym_builds, spf_every_day_quinn
  - hybrid: natural_beauty_jade, glow_up_journey_mei, glam_by_destiny, spf_every_day_quinn, mens_grooming_kai

### beauty_03

- Brand: `brand_beauty_wellness`
- Query: "SPF-first skincare for everyday routines"
- Purpose: Should surface SPF and daily routine creators.
- Preferred industries: Beauty, Health
- Hybrid top 5: natural_beauty_jade, glam_by_destiny, glow_up_journey_mei, spf_every_day_quinn, mens_grooming_kai
- Metrics: avg_final=0.5954, avg_query_intent=0.4857, avg_anchor_intent=1, avg_brand_industry_fit=0.6, avg_preferred_industry_fit=0.6, zero_gmv_top5=0, off_brand_top5=0, off_preferred_top5=0, missing_anchor_top5=0
- Checks:
  - PASS Top 5 should avoid zero-GMV false positives (0 zero-GMV creators)
  - PASS Top 5 should mostly overlap brand industries (0 off-brand creators)
  - PASS Top 5 should match query-specific preferred industries (0 off-preferred creators)
  - PASS Average query-intent should stay high (0.486)
  - PASS Average anchor-intent should stay meaningful (1.000)
  - PASS Average preferred-industry fit should stay high (0.600)
- Ablation:
  - semantic_only: spf_every_day_quinn, skincare_first_anya, glow_up_journey_mei, natural_beauty_jade, mens_grooming_kai
  - business_only: natural_beauty_jade, glam_by_destiny, glow_up_journey_mei, thrift_flip_dani, spf_every_day_quinn
  - hybrid: natural_beauty_jade, glam_by_destiny, glow_up_journey_mei, spf_every_day_quinn, mens_grooming_kai

### beauty_04

- Brand: `brand_beauty_wellness`
- Query: "Dermatologist-backed skincare routines"
- Purpose: Tests ingredient and derm-style skincare education.
- Preferred industries: Beauty, Health
- Hybrid top 5: natural_beauty_jade, glow_up_journey_mei, glam_by_destiny, spf_every_day_quinn, mens_grooming_kai
- Metrics: avg_final=0.5754, avg_query_intent=0.426, avg_anchor_intent=1, avg_brand_industry_fit=0.6, avg_preferred_industry_fit=0.6, zero_gmv_top5=0, off_brand_top5=0, off_preferred_top5=0, missing_anchor_top5=0
- Checks:
  - PASS Top 5 should avoid zero-GMV false positives (0 zero-GMV creators)
  - PASS Top 5 should mostly overlap brand industries (0 off-brand creators)
  - PASS Top 5 should match query-specific preferred industries (0 off-preferred creators)
  - PASS Average query-intent should stay high (0.426)
  - PASS Average anchor-intent should stay meaningful (1.000)
  - PASS Average preferred-industry fit should stay high (0.600)
- Ablation:
  - semantic_only: skincare_first_anya, glow_up_journey_mei, mens_grooming_kai, spf_every_day_quinn, natural_beauty_jade
  - business_only: natural_beauty_jade, glow_up_journey_mei, glam_by_destiny, spf_every_day_quinn, gut_health_guru_sam
  - hybrid: natural_beauty_jade, glow_up_journey_mei, glam_by_destiny, spf_every_day_quinn, mens_grooming_kai

### beauty_05

- Brand: `brand_beauty_wellness`
- Query: "Clean beauty creators with strong commerce"
- Purpose: Commerce-heavy clean beauty case.
- Preferred industries: Beauty, Health
- Hybrid top 5: natural_beauty_jade, holistic_liv_grace, plus_size_glam_val, glam_by_destiny, glow_up_journey_mei
- Metrics: avg_final=0.6399, avg_query_intent=0.3218, avg_anchor_intent=0, avg_brand_industry_fit=0.6, avg_preferred_industry_fit=0.6, zero_gmv_top5=0, off_brand_top5=0, off_preferred_top5=0, missing_anchor_top5=0
- Checks:
  - PASS Top 5 should avoid zero-GMV false positives (0 zero-GMV creators)
  - PASS Top 5 should mostly overlap brand industries (0 off-brand creators)
  - PASS Top 5 should match query-specific preferred industries (0 off-preferred creators)
  - FAIL Average query-intent should stay high (0.322)
  - FAIL Average anchor-intent should stay meaningful (0.000)
  - PASS Average preferred-industry fit should stay high (0.600)
- Ablation:
  - semantic_only: natural_beauty_jade, drugstore_beauty_hana, holistic_liv_grace, skincare_first_anya, glam_by_destiny
  - business_only: natural_beauty_jade, plus_size_glam_val, holistic_liv_grace, run_daily_derek, glow_up_journey_mei
  - hybrid: natural_beauty_jade, holistic_liv_grace, plus_size_glam_val, glam_by_destiny, glow_up_journey_mei

### beauty_06

- Brand: `brand_beauty_wellness`
- Query: "Sensitive skin skincare recommendations"
- Purpose: Should stay inside beauty and skincare relevance.
- Preferred industries: Beauty, Health
- Hybrid top 5: natural_beauty_jade, glow_up_journey_mei, glam_by_destiny, spf_every_day_quinn, mens_grooming_kai
- Metrics: avg_final=0.5909, avg_query_intent=0.5876, avg_anchor_intent=1, avg_brand_industry_fit=0.6, avg_preferred_industry_fit=0.6, zero_gmv_top5=0, off_brand_top5=0, off_preferred_top5=0, missing_anchor_top5=0
- Checks:
  - PASS Top 5 should avoid zero-GMV false positives (0 zero-GMV creators)
  - PASS Top 5 should mostly overlap brand industries (0 off-brand creators)
  - PASS Top 5 should match query-specific preferred industries (0 off-preferred creators)
  - PASS Average query-intent should stay high (0.588)
  - PASS Average anchor-intent should stay meaningful (1.000)
  - PASS Average preferred-industry fit should stay high (0.600)
- Ablation:
  - semantic_only: skincare_first_anya, glow_up_journey_mei, natural_beauty_jade, spf_every_day_quinn, mens_grooming_kai
  - business_only: natural_beauty_jade, glow_up_journey_mei, glam_by_destiny, spf_every_day_quinn, holistic_liv_grace
  - hybrid: natural_beauty_jade, glow_up_journey_mei, glam_by_destiny, spf_every_day_quinn, mens_grooming_kai

### beauty_07

- Brand: `brand_beauty_wellness`
- Query: "Morning skincare routines for glowing skin"
- Purpose: Daily routine skincare precision query.
- Preferred industries: Beauty, Health
- Hybrid top 5: natural_beauty_jade, glow_up_journey_mei, glam_by_destiny, spf_every_day_quinn, mens_grooming_kai
- Metrics: avg_final=0.6203, avg_query_intent=0.6135, avg_anchor_intent=1, avg_brand_industry_fit=0.6, avg_preferred_industry_fit=0.6, zero_gmv_top5=0, off_brand_top5=0, off_preferred_top5=0, missing_anchor_top5=0
- Checks:
  - PASS Top 5 should avoid zero-GMV false positives (0 zero-GMV creators)
  - PASS Top 5 should mostly overlap brand industries (0 off-brand creators)
  - PASS Top 5 should match query-specific preferred industries (0 off-preferred creators)
  - PASS Average query-intent should stay high (0.613)
  - PASS Average anchor-intent should stay meaningful (1.000)
  - PASS Average preferred-industry fit should stay high (0.600)
- Ablation:
  - semantic_only: skincare_first_anya, spf_every_day_quinn, mens_grooming_kai, glam_by_destiny, glow_up_journey_mei
  - business_only: natural_beauty_jade, glow_up_journey_mei, glam_by_destiny, spf_every_day_quinn, holistic_liv_grace
  - hybrid: natural_beauty_jade, glow_up_journey_mei, glam_by_destiny, spf_every_day_quinn, mens_grooming_kai

### beauty_08

- Brand: `brand_beauty_wellness`
- Query: "Anti-aging skincare for women in their 30s"
- Purpose: Target audience plus anti-aging skincare intent.
- Preferred industries: Beauty, Health
- Hybrid top 5: natural_beauty_jade, glow_up_journey_mei, glam_by_destiny, spf_every_day_quinn, mens_grooming_kai
- Metrics: avg_final=0.5432, avg_query_intent=0.2923, avg_anchor_intent=1, avg_brand_industry_fit=0.6, avg_preferred_industry_fit=0.6, zero_gmv_top5=0, off_brand_top5=0, off_preferred_top5=0, missing_anchor_top5=0
- Checks:
  - PASS Top 5 should avoid zero-GMV false positives (0 zero-GMV creators)
  - PASS Top 5 should mostly overlap brand industries (0 off-brand creators)
  - PASS Top 5 should match query-specific preferred industries (0 off-preferred creators)
  - FAIL Average query-intent should stay high (0.292)
  - PASS Average anchor-intent should stay meaningful (1.000)
  - PASS Average preferred-industry fit should stay high (0.600)
- Ablation:
  - semantic_only: spf_every_day_quinn, skincare_first_anya, glow_up_journey_mei, natural_beauty_jade, mens_grooming_kai
  - business_only: natural_beauty_jade, glow_up_journey_mei, glam_by_destiny, spf_every_day_quinn, plus_size_glam_val
  - hybrid: natural_beauty_jade, glow_up_journey_mei, glam_by_destiny, spf_every_day_quinn, mens_grooming_kai

### beauty_09

- Brand: `brand_beauty_wellness`
- Query: "Hydration and barrier repair skincare creators"
- Purpose: Tests ingredient and skin-health adjacency without drifting.
- Preferred industries: Beauty, Health
- Hybrid top 5: natural_beauty_jade, glow_up_journey_mei, glam_by_destiny, spf_every_day_quinn, mens_grooming_kai
- Metrics: avg_final=0.5332, avg_query_intent=0.3093, avg_anchor_intent=1, avg_brand_industry_fit=0.6, avg_preferred_industry_fit=0.6, zero_gmv_top5=0, off_brand_top5=0, off_preferred_top5=0, missing_anchor_top5=0
- Checks:
  - PASS Top 5 should avoid zero-GMV false positives (0 zero-GMV creators)
  - PASS Top 5 should mostly overlap brand industries (0 off-brand creators)
  - PASS Top 5 should match query-specific preferred industries (0 off-preferred creators)
  - FAIL Average query-intent should stay high (0.309)
  - PASS Average anchor-intent should stay meaningful (1.000)
  - PASS Average preferred-industry fit should stay high (0.600)
- Ablation:
  - semantic_only: skincare_first_anya, natural_beauty_jade, spf_every_day_quinn, holistic_liv_grace, glow_up_journey_mei
  - business_only: natural_beauty_jade, glow_up_journey_mei, glam_by_destiny, spf_every_day_quinn, plumbing_diy_skip
  - hybrid: natural_beauty_jade, glow_up_journey_mei, glam_by_destiny, spf_every_day_quinn, mens_grooming_kai

### beauty_10

- Brand: `brand_beauty_wellness`
- Query: "Retinol and anti-aging education that sells"
- Purpose: Education-heavy skincare plus commerce intent.
- Preferred industries: Beauty, Health
- Hybrid top 5: natural_beauty_jade, spf_every_day_quinn, holistic_liv_grace, glow_up_journey_mei, run_daily_derek
- Metrics: avg_final=0.466, avg_query_intent=0.0667, avg_anchor_intent=0, avg_brand_industry_fit=0.6, avg_preferred_industry_fit=0.6, zero_gmv_top5=0, off_brand_top5=0, off_preferred_top5=0, missing_anchor_top5=0
- Checks:
  - PASS Top 5 should avoid zero-GMV false positives (0 zero-GMV creators)
  - PASS Top 5 should mostly overlap brand industries (0 off-brand creators)
  - PASS Top 5 should match query-specific preferred industries (0 off-preferred creators)
  - FAIL Average query-intent should stay high (0.067)
  - FAIL Average anchor-intent should stay meaningful (0.000)
  - PASS Average preferred-industry fit should stay high (0.600)
- Ablation:
  - semantic_only: spf_every_day_quinn, glow_up_journey_mei, natural_beauty_jade, skincare_first_anya, vintage_glam_rita
  - business_only: natural_beauty_jade, toddler_activities_jen, exotic_pets_world_cy, holistic_liv_grace, run_daily_derek
  - hybrid: natural_beauty_jade, spf_every_day_quinn, holistic_liv_grace, glow_up_journey_mei, run_daily_derek

### beauty_11

- Brand: `brand_beauty_wellness`
- Query: "Hyperpigmentation and dark spot skincare creators"
- Purpose: Specific skin concern query.
- Preferred industries: Beauty, Health
- Hybrid top 5: natural_beauty_jade, glow_up_journey_mei, glam_by_destiny, spf_every_day_quinn, mens_grooming_kai
- Metrics: avg_final=0.5344, avg_query_intent=0.3093, avg_anchor_intent=1, avg_brand_industry_fit=0.6, avg_preferred_industry_fit=0.6, zero_gmv_top5=0, off_brand_top5=0, off_preferred_top5=0, missing_anchor_top5=0
- Checks:
  - PASS Top 5 should avoid zero-GMV false positives (0 zero-GMV creators)
  - PASS Top 5 should mostly overlap brand industries (0 off-brand creators)
  - PASS Top 5 should match query-specific preferred industries (0 off-preferred creators)
  - FAIL Average query-intent should stay high (0.309)
  - PASS Average anchor-intent should stay meaningful (1.000)
  - PASS Average preferred-industry fit should stay high (0.600)
- Ablation:
  - semantic_only: skincare_first_anya, spf_every_day_quinn, glam_by_destiny, natural_beauty_jade, glow_up_journey_mei
  - business_only: natural_beauty_jade, glow_up_journey_mei, glam_by_destiny, spf_every_day_quinn, plus_size_glam_val
  - hybrid: natural_beauty_jade, glow_up_journey_mei, glam_by_destiny, spf_every_day_quinn, mens_grooming_kai

### beauty_12

- Brand: `brand_beauty_wellness`
- Query: "Skincare creators for dry and sensitive skin"
- Purpose: Variant of sensitive-skin query with barrier-repair flavor.
- Preferred industries: Beauty, Health
- Hybrid top 5: natural_beauty_jade, glow_up_journey_mei, glam_by_destiny, spf_every_day_quinn, mens_grooming_kai
- Metrics: avg_final=0.5925, avg_query_intent=0.5481, avg_anchor_intent=1, avg_brand_industry_fit=0.6, avg_preferred_industry_fit=0.6, zero_gmv_top5=0, off_brand_top5=0, off_preferred_top5=0, missing_anchor_top5=0
- Checks:
  - PASS Top 5 should avoid zero-GMV false positives (0 zero-GMV creators)
  - PASS Top 5 should mostly overlap brand industries (0 off-brand creators)
  - PASS Top 5 should match query-specific preferred industries (0 off-preferred creators)
  - PASS Average query-intent should stay high (0.548)
  - PASS Average anchor-intent should stay meaningful (1.000)
  - PASS Average preferred-industry fit should stay high (0.600)
- Ablation:
  - semantic_only: skincare_first_anya, natural_beauty_jade, glow_up_journey_mei, spf_every_day_quinn, mens_grooming_kai
  - business_only: natural_beauty_jade, glow_up_journey_mei, glam_by_destiny, spf_every_day_quinn, toddler_activities_jen
  - hybrid: natural_beauty_jade, glow_up_journey_mei, glam_by_destiny, spf_every_day_quinn, mens_grooming_kai

### beauty_13

- Brand: `brand_beauty_wellness`
- Query: "Acne recovery and blemish-safe skincare content"
- Purpose: Specific acne aftercare query.
- Preferred industries: Beauty, Health
- Hybrid top 5: natural_beauty_jade, glow_up_journey_mei, glam_by_destiny, spf_every_day_quinn, mens_grooming_kai
- Metrics: avg_final=0.5518, avg_query_intent=0.2381, avg_anchor_intent=0.5085, avg_brand_industry_fit=0.6, avg_preferred_industry_fit=0.6, zero_gmv_top5=0, off_brand_top5=0, off_preferred_top5=0, missing_anchor_top5=0
- Checks:
  - PASS Top 5 should avoid zero-GMV false positives (0 zero-GMV creators)
  - PASS Top 5 should mostly overlap brand industries (0 off-brand creators)
  - PASS Top 5 should match query-specific preferred industries (0 off-preferred creators)
  - FAIL Average query-intent should stay high (0.238)
  - PASS Average anchor-intent should stay meaningful (0.508)
  - PASS Average preferred-industry fit should stay high (0.600)
- Ablation:
  - semantic_only: skincare_first_anya, natural_beauty_jade, glow_up_journey_mei, holistic_liv_grace, mens_grooming_kai
  - business_only: natural_beauty_jade, glow_up_journey_mei, glam_by_destiny, spf_every_day_quinn, holistic_liv_grace
  - hybrid: natural_beauty_jade, glow_up_journey_mei, glam_by_destiny, spf_every_day_quinn, mens_grooming_kai

### beauty_14

- Brand: `brand_beauty_wellness`
- Query: "Simple starter skincare routines"
- Purpose: Beginner-friendly skincare query.
- Preferred industries: Beauty, Health
- Hybrid top 5: natural_beauty_jade, glow_up_journey_mei, glam_by_destiny, spf_every_day_quinn, mens_grooming_kai
- Metrics: avg_final=0.5903, avg_query_intent=0.4779, avg_anchor_intent=1, avg_brand_industry_fit=0.6, avg_preferred_industry_fit=0.6, zero_gmv_top5=0, off_brand_top5=0, off_preferred_top5=0, missing_anchor_top5=0
- Checks:
  - PASS Top 5 should avoid zero-GMV false positives (0 zero-GMV creators)
  - PASS Top 5 should mostly overlap brand industries (0 off-brand creators)
  - PASS Top 5 should match query-specific preferred industries (0 off-preferred creators)
  - PASS Average query-intent should stay high (0.478)
  - PASS Average anchor-intent should stay meaningful (1.000)
  - PASS Average preferred-industry fit should stay high (0.600)
- Ablation:
  - semantic_only: mens_grooming_kai, skincare_first_anya, spf_every_day_quinn, glow_up_journey_mei, natural_beauty_jade
  - business_only: natural_beauty_jade, glow_up_journey_mei, glam_by_destiny, spf_every_day_quinn, holistic_liv_grace
  - hybrid: natural_beauty_jade, glow_up_journey_mei, glam_by_destiny, spf_every_day_quinn, mens_grooming_kai

### beauty_15

- Brand: `brand_beauty_wellness`
- Query: "Product review creators for skincare launches"
- Purpose: Launch-style brand query looking for review-driven conversion.
- Preferred industries: Beauty, Health
- Hybrid top 5: natural_beauty_jade, glam_by_destiny, glow_up_journey_mei, kids_toy_reviews, spf_every_day_quinn
- Metrics: avg_final=0.5894, avg_query_intent=0.4124, avg_anchor_intent=0.8, avg_brand_industry_fit=0.5, avg_preferred_industry_fit=0.5, zero_gmv_top5=0, off_brand_top5=1, off_preferred_top5=1, missing_anchor_top5=1
- Checks:
  - PASS Top 5 should avoid zero-GMV false positives (0 zero-GMV creators)
  - PASS Top 5 should mostly overlap brand industries (1 off-brand creators)
  - PASS Top 5 should match query-specific preferred industries (1 off-preferred creators)
  - PASS Average query-intent should stay high (0.412)
  - PASS Average anchor-intent should stay meaningful (0.800)
  - PASS Average preferred-industry fit should stay high (0.500)
- Ablation:
  - semantic_only: skincare_first_anya, glam_by_destiny, natural_beauty_jade, glow_up_journey_mei, spf_every_day_quinn
  - business_only: natural_beauty_jade, glow_up_journey_mei, glam_by_destiny, kids_toy_reviews, baby_gear_reviews_amy
  - hybrid: natural_beauty_jade, glam_by_destiny, glow_up_journey_mei, kids_toy_reviews, spf_every_day_quinn

### beauty_16

- Brand: `brand_beauty_wellness`
- Query: "Budget beauty finds with strong buying intent"
- Purpose: General beauty commerce query.
- Preferred industries: Beauty
- Hybrid top 5: home_gym_builds, glow_up_journey_mei, natural_beauty_jade, thrift_flip_dani, plus_size_glam_val
- Metrics: avg_final=0.5698, avg_query_intent=0.3046, avg_anchor_intent=0, avg_brand_industry_fit=0.4, avg_preferred_industry_fit=0.6, zero_gmv_top5=0, off_brand_top5=1, off_preferred_top5=2, missing_anchor_top5=0
- Checks:
  - PASS Top 5 should avoid zero-GMV false positives (0 zero-GMV creators)
  - FAIL Top 5 should mostly overlap brand industries (1 off-brand creators)
  - FAIL Top 5 should match query-specific preferred industries (2 off-preferred creators)
  - FAIL Average query-intent should stay high (0.305)
  - FAIL Average anchor-intent should stay meaningful (0.000)
  - PASS Average preferred-industry fit should stay high (0.600)
- Ablation:
  - semantic_only: drugstore_beauty_hana, ootd_with_amber, glow_up_journey_mei, natural_beauty_jade, glam_by_destiny
  - business_only: home_gym_builds, natural_beauty_jade, thrift_flip_dani, glow_up_journey_mei, plus_size_glam_val
  - hybrid: home_gym_builds, glow_up_journey_mei, natural_beauty_jade, thrift_flip_dani, plus_size_glam_val

### beauty_17

- Brand: `brand_beauty_wellness`
- Query: "Drugstore skincare that actually converts"
- Purpose: Drugstore skincare and commerce balance.
- Preferred industries: Beauty, Health
- Hybrid top 5: natural_beauty_jade, glow_up_journey_mei, glam_by_destiny, spf_every_day_quinn, mens_grooming_kai
- Metrics: avg_final=0.543, avg_query_intent=0.2727, avg_anchor_intent=1, avg_brand_industry_fit=0.6, avg_preferred_industry_fit=0.6, zero_gmv_top5=0, off_brand_top5=0, off_preferred_top5=0, missing_anchor_top5=0
- Checks:
  - PASS Top 5 should avoid zero-GMV false positives (0 zero-GMV creators)
  - PASS Top 5 should mostly overlap brand industries (0 off-brand creators)
  - PASS Top 5 should match query-specific preferred industries (0 off-preferred creators)
  - FAIL Average query-intent should stay high (0.273)
  - PASS Average anchor-intent should stay meaningful (1.000)
  - PASS Average preferred-industry fit should stay high (0.600)
- Ablation:
  - semantic_only: glow_up_journey_mei, drugstore_beauty_hana, skincare_first_anya, natural_beauty_jade, spf_every_day_quinn
  - business_only: natural_beauty_jade, glow_up_journey_mei, glam_by_destiny, spf_every_day_quinn, plus_size_glam_val
  - hybrid: natural_beauty_jade, glow_up_journey_mei, glam_by_destiny, spf_every_day_quinn, mens_grooming_kai

### beauty_18

- Brand: `brand_beauty_wellness`
- Query: "Everyday makeup creators with strong conversion"
- Purpose: Makeup relevance with commerce focus.
- Preferred industries: Beauty
- Hybrid top 5: glam_by_destiny, natural_beauty_jade, lifestyle_creator_bri, vintage_glam_rita, thrift_flip_dani
- Metrics: avg_final=0.555, avg_query_intent=0.2299, avg_anchor_intent=0, avg_brand_industry_fit=0.5, avg_preferred_industry_fit=0.6, zero_gmv_top5=0, off_brand_top5=1, off_preferred_top5=2, missing_anchor_top5=0
- Checks:
  - PASS Top 5 should avoid zero-GMV false positives (0 zero-GMV creators)
  - FAIL Top 5 should mostly overlap brand industries (1 off-brand creators)
  - FAIL Top 5 should match query-specific preferred industries (2 off-preferred creators)
  - FAIL Average query-intent should stay high (0.230)
  - FAIL Average anchor-intent should stay meaningful (0.000)
  - PASS Average preferred-industry fit should stay high (0.600)
- Ablation:
  - semantic_only: drugstore_beauty_hana, glam_by_destiny, natural_beauty_jade, contour_queen_paris, glow_up_journey_mei
  - business_only: natural_beauty_jade, thrift_flip_dani, glam_by_destiny, lifestyle_creator_bri, craft_room_heidi
  - hybrid: glam_by_destiny, natural_beauty_jade, lifestyle_creator_bri, vintage_glam_rita, thrift_flip_dani

### beauty_19

- Brand: `brand_beauty_wellness`
- Query: "Beauty creators for natural everyday looks"
- Purpose: Should favor makeup and beauty-first creators.
- Preferred industries: Beauty
- Hybrid top 5: natural_beauty_jade, glam_by_destiny, holistic_liv_grace, plus_size_glam_val, glow_up_journey_mei
- Metrics: avg_final=0.6484, avg_query_intent=0.3218, avg_anchor_intent=0, avg_brand_industry_fit=0.6, avg_preferred_industry_fit=0.8, zero_gmv_top5=0, off_brand_top5=0, off_preferred_top5=1, missing_anchor_top5=0
- Checks:
  - PASS Top 5 should avoid zero-GMV false positives (0 zero-GMV creators)
  - PASS Top 5 should mostly overlap brand industries (0 off-brand creators)
  - PASS Top 5 should match query-specific preferred industries (1 off-preferred creators)
  - FAIL Average query-intent should stay high (0.322)
  - FAIL Average anchor-intent should stay meaningful (0.000)
  - PASS Average preferred-industry fit should stay high (0.800)
- Ablation:
  - semantic_only: glam_by_destiny, drugstore_beauty_hana, natural_beauty_jade, contour_queen_paris, vintage_glam_rita
  - business_only: natural_beauty_jade, plus_size_glam_val, holistic_liv_grace, thrift_flip_dani, run_daily_derek
  - hybrid: natural_beauty_jade, glam_by_destiny, holistic_liv_grace, plus_size_glam_val, glow_up_journey_mei

### beauty_20

- Brand: `brand_beauty_wellness`
- Query: "Beauty creators focused on ingredients education"
- Purpose: Tests ingredient-aware beauty education without losing category fit.
- Preferred industries: Beauty, Health
- Hybrid top 5: natural_beauty_jade, holistic_liv_grace, glam_by_destiny, glow_up_journey_mei, run_daily_derek
- Metrics: avg_final=0.6165, avg_query_intent=0.2299, avg_anchor_intent=0, avg_brand_industry_fit=0.7, avg_preferred_industry_fit=0.7, zero_gmv_top5=0, off_brand_top5=0, off_preferred_top5=0, missing_anchor_top5=0
- Checks:
  - PASS Top 5 should avoid zero-GMV false positives (0 zero-GMV creators)
  - PASS Top 5 should mostly overlap brand industries (0 off-brand creators)
  - PASS Top 5 should match query-specific preferred industries (0 off-preferred creators)
  - FAIL Average query-intent should stay high (0.230)
  - FAIL Average anchor-intent should stay meaningful (0.000)
  - PASS Average preferred-industry fit should stay high (0.700)
- Ablation:
  - semantic_only: natural_beauty_jade, skincare_first_anya, spf_every_day_quinn, contour_queen_paris, glam_by_destiny
  - business_only: natural_beauty_jade, exotic_pets_world_cy, holistic_liv_grace, run_daily_derek, glow_up_journey_mei
  - hybrid: natural_beauty_jade, holistic_liv_grace, glam_by_destiny, glow_up_journey_mei, run_daily_derek

### beauty_21

- Brand: `brand_beauty_wellness`
- Query: "Non-toxic skincare and beauty routines"
- Purpose: Clean, non-toxic beauty and skincare case.
- Preferred industries: Beauty, Health
- Hybrid top 5: natural_beauty_jade, glow_up_journey_mei, glam_by_destiny, spf_every_day_quinn, holistic_liv_grace
- Metrics: avg_final=0.6321, avg_query_intent=0.5649, avg_anchor_intent=0.8, avg_brand_industry_fit=0.6, avg_preferred_industry_fit=0.6, zero_gmv_top5=0, off_brand_top5=0, off_preferred_top5=0, missing_anchor_top5=1
- Checks:
  - PASS Top 5 should avoid zero-GMV false positives (0 zero-GMV creators)
  - PASS Top 5 should mostly overlap brand industries (0 off-brand creators)
  - PASS Top 5 should match query-specific preferred industries (0 off-preferred creators)
  - PASS Average query-intent should stay high (0.565)
  - PASS Average anchor-intent should stay meaningful (0.800)
  - PASS Average preferred-industry fit should stay high (0.600)
- Ablation:
  - semantic_only: natural_beauty_jade, skincare_first_anya, holistic_liv_grace, spf_every_day_quinn, glow_up_journey_mei
  - business_only: natural_beauty_jade, glow_up_journey_mei, glam_by_destiny, holistic_liv_grace, run_daily_derek
  - hybrid: natural_beauty_jade, glow_up_journey_mei, glam_by_destiny, spf_every_day_quinn, holistic_liv_grace

### beauty_22

- Brand: `brand_beauty_wellness`
- Query: "Wellness and beauty routines for self-care"
- Purpose: Allows some health crossover but should remain beauty-led.
- Preferred industries: Beauty, Health
- Hybrid top 5: natural_beauty_jade, holistic_liv_grace, glow_up_journey_mei, run_daily_derek, glam_by_destiny
- Metrics: avg_final=0.6138, avg_query_intent=0.246, avg_anchor_intent=0, avg_brand_industry_fit=0.7, avg_preferred_industry_fit=0.7, zero_gmv_top5=0, off_brand_top5=0, off_preferred_top5=0, missing_anchor_top5=0
- Checks:
  - PASS Top 5 should avoid zero-GMV false positives (0 zero-GMV creators)
  - PASS Top 5 should mostly overlap brand industries (0 off-brand creators)
  - PASS Top 5 should match query-specific preferred industries (0 off-preferred creators)
  - FAIL Average query-intent should stay high (0.246)
  - FAIL Average anchor-intent should stay meaningful (0.000)
  - PASS Average preferred-industry fit should stay high (0.700)
- Ablation:
  - semantic_only: holistic_liv_grace, skincare_first_anya, natural_beauty_jade, mens_grooming_kai, glow_up_journey_mei
  - business_only: natural_beauty_jade, holistic_liv_grace, run_daily_derek, glow_up_journey_mei, glam_by_destiny
  - hybrid: natural_beauty_jade, holistic_liv_grace, glow_up_journey_mei, run_daily_derek, glam_by_destiny

### beauty_23

- Brand: `brand_beauty_wellness`
- Query: "Beauty creators with strong engagement and commerce"
- Purpose: High-level beauty commerce query likely to appear in judging.
- Preferred industries: Beauty
- Hybrid top 5: natural_beauty_jade, holistic_liv_grace, plus_size_glam_val, glam_by_destiny, glow_up_journey_mei
- Metrics: avg_final=0.6083, avg_query_intent=0.2299, avg_anchor_intent=0, avg_brand_industry_fit=0.6, avg_preferred_industry_fit=0.8, zero_gmv_top5=0, off_brand_top5=0, off_preferred_top5=1, missing_anchor_top5=0
- Checks:
  - PASS Top 5 should avoid zero-GMV false positives (0 zero-GMV creators)
  - PASS Top 5 should mostly overlap brand industries (0 off-brand creators)
  - PASS Top 5 should match query-specific preferred industries (1 off-preferred creators)
  - FAIL Average query-intent should stay high (0.230)
  - FAIL Average anchor-intent should stay meaningful (0.000)
  - PASS Average preferred-industry fit should stay high (0.800)
- Ablation:
  - semantic_only: natural_beauty_jade, glam_by_destiny, drugstore_beauty_hana, contour_queen_paris, skincare_first_anya
  - business_only: natural_beauty_jade, plus_size_glam_val, holistic_liv_grace, run_daily_derek, glow_up_journey_mei
  - hybrid: natural_beauty_jade, holistic_liv_grace, plus_size_glam_val, glam_by_destiny, glow_up_journey_mei

### beauty_24

- Brand: `brand_beauty_wellness`
- Query: "Drugstore dupes and affordable beauty finds"
- Purpose: Tests budget beauty and dupes vocabulary.
- Preferred industries: Beauty
- Hybrid top 5: glow_up_journey_mei, home_gym_builds, natural_beauty_jade, thrift_flip_dani, holistic_liv_grace
- Metrics: avg_final=0.5702, avg_query_intent=0.3255, avg_anchor_intent=0, avg_brand_industry_fit=0.4, avg_preferred_industry_fit=0.4, zero_gmv_top5=0, off_brand_top5=1, off_preferred_top5=3, missing_anchor_top5=0
- Checks:
  - PASS Top 5 should avoid zero-GMV false positives (0 zero-GMV creators)
  - PASS Top 5 should mostly overlap brand industries (1 off-brand creators)
  - FAIL Top 5 should match query-specific preferred industries (3 off-preferred creators)
  - FAIL Average query-intent should stay high (0.325)
  - FAIL Average anchor-intent should stay meaningful (0.000)
  - PASS Average preferred-industry fit should stay high (0.400)
- Ablation:
  - semantic_only: drugstore_beauty_hana, glow_up_journey_mei, glam_by_destiny, natural_beauty_jade, skincare_first_anya
  - business_only: home_gym_builds, natural_beauty_jade, thrift_flip_dani, glow_up_journey_mei, plus_size_glam_val
  - hybrid: glow_up_journey_mei, home_gym_builds, natural_beauty_jade, thrift_flip_dani, holistic_liv_grace

### beauty_25

- Brand: `brand_beauty_wellness`
- Query: "Clean sunscreen and SPF education"
- Purpose: SPF education and skincare crossover.
- Preferred industries: Beauty, Health
- Hybrid top 5: natural_beauty_jade, holistic_liv_grace, exotic_pets_world_cy, spf_every_day_quinn, glow_up_journey_mei
- Metrics: avg_final=0.5448, avg_query_intent=0.2, avg_anchor_intent=0, avg_brand_industry_fit=0.5, avg_preferred_industry_fit=0.5, zero_gmv_top5=0, off_brand_top5=0, off_preferred_top5=0, missing_anchor_top5=0
- Checks:
  - PASS Top 5 should avoid zero-GMV false positives (0 zero-GMV creators)
  - PASS Top 5 should mostly overlap brand industries (0 off-brand creators)
  - PASS Top 5 should match query-specific preferred industries (0 off-preferred creators)
  - FAIL Average query-intent should stay high (0.200)
  - FAIL Average anchor-intent should stay meaningful (0.000)
  - PASS Average preferred-industry fit should stay high (0.500)
- Ablation:
  - semantic_only: spf_every_day_quinn, natural_beauty_jade, skincare_first_anya, glow_up_journey_mei, holistic_liv_grace
  - business_only: natural_beauty_jade, exotic_pets_world_cy, holistic_liv_grace, toddler_activities_jen, run_daily_derek
  - hybrid: natural_beauty_jade, holistic_liv_grace, exotic_pets_world_cy, spf_every_day_quinn, glow_up_journey_mei

### beauty_26

- Brand: `brand_beauty_wellness`
- Query: "Fragrance and beauty creators with repeat purchase intent"
- Purpose: Beauty plus fragrance repeat-purchase behavior.
- Preferred industries: Beauty
- Hybrid top 5: natural_beauty_jade, fragrance_notes_leo, plus_size_glam_val, holistic_liv_grace, glow_up_journey_mei
- Metrics: avg_final=0.5843, avg_query_intent=0.3529, avg_anchor_intent=0, avg_brand_industry_fit=0.5, avg_preferred_industry_fit=0.8, zero_gmv_top5=0, off_brand_top5=0, off_preferred_top5=1, missing_anchor_top5=0
- Checks:
  - PASS Top 5 should avoid zero-GMV false positives (0 zero-GMV creators)
  - PASS Top 5 should mostly overlap brand industries (0 off-brand creators)
  - FAIL Top 5 should match query-specific preferred industries (1 off-preferred creators)
  - PASS Average query-intent should stay high (0.353)
  - FAIL Average anchor-intent should stay meaningful (0.000)
  - PASS Average preferred-industry fit should stay high (0.800)
- Ablation:
  - semantic_only: fragrance_notes_leo, candle_and_scent_ava, drugstore_beauty_hana, natural_beauty_jade, skincare_first_anya
  - business_only: natural_beauty_jade, plus_size_glam_val, holistic_liv_grace, run_daily_derek, glow_up_journey_mei
  - hybrid: natural_beauty_jade, fragrance_notes_leo, plus_size_glam_val, holistic_liv_grace, glow_up_journey_mei

### beauty_27

- Brand: `brand_beauty_wellness`
- Query: "Minimal skincare routines for busy women"
- Purpose: Lifestyle framing around beauty relevance.
- Preferred industries: Beauty, Health
- Hybrid top 5: natural_beauty_jade, glow_up_journey_mei, glam_by_destiny, spf_every_day_quinn, mens_grooming_kai
- Metrics: avg_final=0.5693, avg_query_intent=0.3381, avg_anchor_intent=1, avg_brand_industry_fit=0.6, avg_preferred_industry_fit=0.6, zero_gmv_top5=0, off_brand_top5=0, off_preferred_top5=0, missing_anchor_top5=0
- Checks:
  - PASS Top 5 should avoid zero-GMV false positives (0 zero-GMV creators)
  - PASS Top 5 should mostly overlap brand industries (0 off-brand creators)
  - PASS Top 5 should match query-specific preferred industries (0 off-preferred creators)
  - FAIL Average query-intent should stay high (0.338)
  - PASS Average anchor-intent should stay meaningful (1.000)
  - PASS Average preferred-industry fit should stay high (0.600)
- Ablation:
  - semantic_only: mens_grooming_kai, spf_every_day_quinn, skincare_first_anya, natural_beauty_jade, glow_up_journey_mei
  - business_only: natural_beauty_jade, glow_up_journey_mei, glam_by_destiny, home_gym_builds, spf_every_day_quinn
  - hybrid: natural_beauty_jade, glow_up_journey_mei, glam_by_destiny, spf_every_day_quinn, mens_grooming_kai

### beauty_28

- Brand: `brand_beauty_wellness`
- Query: "Skincare transformation creators with before-and-afters"
- Purpose: Transformation storytelling plus skincare relevance.
- Preferred industries: Beauty, Health
- Hybrid top 5: glow_up_journey_mei, natural_beauty_jade, glam_by_destiny, spf_every_day_quinn, mens_grooming_kai
- Metrics: avg_final=0.6015, avg_query_intent=0.433, avg_anchor_intent=1, avg_brand_industry_fit=0.6, avg_preferred_industry_fit=0.6, zero_gmv_top5=0, off_brand_top5=0, off_preferred_top5=0, missing_anchor_top5=0
- Checks:
  - PASS Top 5 should avoid zero-GMV false positives (0 zero-GMV creators)
  - PASS Top 5 should mostly overlap brand industries (0 off-brand creators)
  - PASS Top 5 should match query-specific preferred industries (0 off-preferred creators)
  - PASS Average query-intent should stay high (0.433)
  - PASS Average anchor-intent should stay meaningful (1.000)
  - PASS Average preferred-industry fit should stay high (0.600)
- Ablation:
  - semantic_only: glow_up_journey_mei, skincare_first_anya, natural_beauty_jade, spf_every_day_quinn, glam_by_destiny
  - business_only: natural_beauty_jade, glow_up_journey_mei, glam_by_destiny, spf_every_day_quinn, plus_size_glam_val
  - hybrid: glow_up_journey_mei, natural_beauty_jade, glam_by_destiny, spf_every_day_quinn, mens_grooming_kai

### beauty_29

- Brand: `brand_beauty_wellness`
- Query: "Clean beauty and sustainable skincare creators"
- Purpose: Sustainability-flavored beauty query.
- Preferred industries: Beauty, Health
- Hybrid top 5: natural_beauty_jade, glow_up_journey_mei, glam_by_destiny, holistic_liv_grace, spf_every_day_quinn
- Metrics: avg_final=0.6453, avg_query_intent=0.5773, avg_anchor_intent=0.8, avg_brand_industry_fit=0.6, avg_preferred_industry_fit=0.6, zero_gmv_top5=0, off_brand_top5=0, off_preferred_top5=0, missing_anchor_top5=1
- Checks:
  - PASS Top 5 should avoid zero-GMV false positives (0 zero-GMV creators)
  - PASS Top 5 should mostly overlap brand industries (0 off-brand creators)
  - PASS Top 5 should match query-specific preferred industries (0 off-preferred creators)
  - PASS Average query-intent should stay high (0.577)
  - PASS Average anchor-intent should stay meaningful (0.800)
  - PASS Average preferred-industry fit should stay high (0.600)
- Ablation:
  - semantic_only: natural_beauty_jade, holistic_liv_grace, skincare_first_anya, spf_every_day_quinn, glow_up_journey_mei
  - business_only: natural_beauty_jade, glow_up_journey_mei, glam_by_destiny, holistic_liv_grace, thrift_flip_dani
  - hybrid: natural_beauty_jade, glow_up_journey_mei, glam_by_destiny, holistic_liv_grace, spf_every_day_quinn

### beauty_30

- Brand: `brand_beauty_wellness`
- Query: "Mens grooming and skincare crossover creators"
- Purpose: Beauty query with grooming crossover still inside category.
- Preferred industries: Beauty
- Hybrid top 5: natural_beauty_jade, glow_up_journey_mei, glam_by_destiny, mens_grooming_kai, spf_every_day_quinn
- Metrics: avg_final=0.5643, avg_query_intent=0.3505, avg_anchor_intent=1, avg_brand_industry_fit=0.6, avg_preferred_industry_fit=1, zero_gmv_top5=0, off_brand_top5=0, off_preferred_top5=0, missing_anchor_top5=0
- Checks:
  - PASS Top 5 should avoid zero-GMV false positives (0 zero-GMV creators)
  - PASS Top 5 should mostly overlap brand industries (0 off-brand creators)
  - PASS Top 5 should match query-specific preferred industries (0 off-preferred creators)
  - PASS Average query-intent should stay high (0.351)
  - PASS Average anchor-intent should stay meaningful (1.000)
  - PASS Average preferred-industry fit should stay high (1.000)
- Ablation:
  - semantic_only: mens_grooming_kai, glow_up_journey_mei, skincare_first_anya, natural_beauty_jade, dog_grooming_den
  - business_only: natural_beauty_jade, glow_up_journey_mei, glam_by_destiny, spf_every_day_quinn, holistic_liv_grace
  - hybrid: natural_beauty_jade, glow_up_journey_mei, glam_by_destiny, mens_grooming_kai, spf_every_day_quinn

### beauty_31

- Brand: `brand_beauty_wellness`
- Query: "Beauty creators for budget-friendly product swaps"
- Purpose: Budget substitutions without losing beauty intent.
- Preferred industries: Beauty
- Hybrid top 5: glow_up_journey_mei, home_gym_builds, glam_by_destiny, natural_beauty_jade, thrift_flip_dani
- Metrics: avg_final=0.6124, avg_query_intent=0.3413, avg_anchor_intent=0, avg_brand_industry_fit=0.5, avg_preferred_industry_fit=0.6, zero_gmv_top5=0, off_brand_top5=1, off_preferred_top5=2, missing_anchor_top5=0
- Checks:
  - PASS Top 5 should avoid zero-GMV false positives (0 zero-GMV creators)
  - PASS Top 5 should mostly overlap brand industries (1 off-brand creators)
  - FAIL Top 5 should match query-specific preferred industries (2 off-preferred creators)
  - FAIL Average query-intent should stay high (0.341)
  - FAIL Average anchor-intent should stay meaningful (0.000)
  - PASS Average preferred-industry fit should stay high (0.600)
- Ablation:
  - semantic_only: drugstore_beauty_hana, glow_up_journey_mei, natural_beauty_jade, glam_by_destiny, ootd_with_amber
  - business_only: home_gym_builds, natural_beauty_jade, thrift_flip_dani, glow_up_journey_mei, glam_by_destiny
  - hybrid: glow_up_journey_mei, home_gym_builds, glam_by_destiny, natural_beauty_jade, thrift_flip_dani

### beauty_32

- Brand: `brand_beauty_wellness`
- Query: "Glow-up journey creators with strong commerce"
- Purpose: Transformation and product-led beauty query.
- Preferred industries: Beauty
- Hybrid top 5: natural_beauty_jade, holistic_liv_grace, plus_size_glam_val, glam_by_destiny, glow_up_journey_mei
- Metrics: avg_final=0.4668, avg_query_intent=0, avg_anchor_intent=0, avg_brand_industry_fit=0.6, avg_preferred_industry_fit=0.8, zero_gmv_top5=0, off_brand_top5=0, off_preferred_top5=1, missing_anchor_top5=0
- Checks:
  - PASS Top 5 should avoid zero-GMV false positives (0 zero-GMV creators)
  - PASS Top 5 should mostly overlap brand industries (0 off-brand creators)
  - PASS Top 5 should match query-specific preferred industries (1 off-preferred creators)
  - FAIL Average query-intent should stay high (0.000)
  - FAIL Average anchor-intent should stay meaningful (0.000)
  - PASS Average preferred-industry fit should stay high (0.800)
- Ablation:
  - semantic_only: skincare_first_anya, glam_by_destiny, glow_up_journey_mei, natural_beauty_jade, drugstore_beauty_hana
  - business_only: natural_beauty_jade, plus_size_glam_val, holistic_liv_grace, run_daily_derek, smoothie_bar_lin
  - hybrid: natural_beauty_jade, holistic_liv_grace, plus_size_glam_val, glam_by_destiny, glow_up_journey_mei

### beauty_33

- Brand: `brand_beauty_wellness`
- Query: "Affordable skincare creators for college-age women"
- Purpose: Beauty target-audience query that should stay price-aware.
- Preferred industries: Beauty, Health
- Hybrid top 5: natural_beauty_jade, glow_up_journey_mei, glam_by_destiny, spf_every_day_quinn, mens_grooming_kai
- Metrics: avg_final=0.5564, avg_query_intent=0.2891, avg_anchor_intent=1, avg_brand_industry_fit=0.6, avg_preferred_industry_fit=0.6, zero_gmv_top5=0, off_brand_top5=0, off_preferred_top5=0, missing_anchor_top5=0
- Checks:
  - PASS Top 5 should avoid zero-GMV false positives (0 zero-GMV creators)
  - PASS Top 5 should mostly overlap brand industries (0 off-brand creators)
  - PASS Top 5 should match query-specific preferred industries (0 off-preferred creators)
  - FAIL Average query-intent should stay high (0.289)
  - PASS Average anchor-intent should stay meaningful (1.000)
  - PASS Average preferred-industry fit should stay high (0.600)
- Ablation:
  - semantic_only: drugstore_beauty_hana, natural_beauty_jade, glow_up_journey_mei, skincare_first_anya, spf_every_day_quinn
  - business_only: natural_beauty_jade, glow_up_journey_mei, glam_by_destiny, spf_every_day_quinn, plus_size_glam_val
  - hybrid: natural_beauty_jade, glow_up_journey_mei, glam_by_destiny, spf_every_day_quinn, mens_grooming_kai

### outdoor_adventure_core

- Brand: `brand_outdoor_adventure`
- Query: "Adventure gear creators with real buying intent"
- Purpose: Core outdoor commerce query.
- Preferred industries: Sports & Outdoors
- Hybrid top 5: fishing_tales_bob, gaming_phones_rio, climbing_wall_finn, ski_season_vera, baby_gear_reviews_amy
- Metrics: avg_final=0.5069, avg_query_intent=0.47, avg_anchor_intent=0.7966, avg_brand_industry_fit=0.4, avg_preferred_industry_fit=0.6, zero_gmv_top5=0, off_brand_top5=1, off_preferred_top5=2, missing_anchor_top5=2
- Checks:
  - PASS Top 5 should avoid zero-GMV false positives (0 zero-GMV creators)
  - PASS Top 5 should mostly overlap brand industries (1 off-brand creators)
  - FAIL Top 5 should match query-specific preferred industries (2 off-preferred creators)
  - PASS Average query-intent should stay high (0.470)
  - PASS Average anchor-intent should stay meaningful (0.797)
  - PASS Average preferred-industry fit should stay high (0.600)
- Ablation:
  - semantic_only: gaming_phones_rio, hiker_adventures_zach, athletic_fit_cole, workwear_rugged_colt, outdoor_survival_rex
  - business_only: fishing_tales_bob, gaming_phones_rio, kids_toy_reviews, apple_insider_cy, baby_gear_reviews_amy
  - hybrid: fishing_tales_bob, gaming_phones_rio, climbing_wall_finn, ski_season_vera, baby_gear_reviews_amy

### outdoor_hiking_tech

- Brand: `brand_outdoor_adventure`
- Query: "Outdoor phone gear for hiking and trail content"
- Purpose: Outdoor and electronics crossover query.
- Preferred industries: Sports & Outdoors, Phones & Electronics
- Hybrid top 5: home_gym_builds, gaming_phones_rio, marathon_pac_kim, fishing_tales_bob, webcam_reviews_sky
- Metrics: avg_final=0.6542, avg_query_intent=0.6135, avg_anchor_intent=0.644, avg_brand_industry_fit=0.5, avg_preferred_industry_fit=0.5, zero_gmv_top5=0, off_brand_top5=0, off_preferred_top5=0, missing_anchor_top5=0
- Checks:
  - PASS Top 5 should avoid zero-GMV false positives (0 zero-GMV creators)
  - PASS Top 5 should mostly overlap brand industries (0 off-brand creators)
  - PASS Top 5 should match query-specific preferred industries (0 off-preferred creators)
  - PASS Average query-intent should stay high (0.614)
  - PASS Average anchor-intent should stay meaningful (0.644)
  - PASS Average preferred-industry fit should stay high (0.500)
- Ablation:
  - semantic_only: hiker_adventures_zach, outdoor_survival_rex, gaming_phones_rio, mountain_biker_ty, climbing_wall_finn
  - business_only: home_gym_builds, marathon_pac_kim, gaming_phones_rio, fishing_tales_bob, webcam_reviews_sky
  - hybrid: home_gym_builds, gaming_phones_rio, marathon_pac_kim, fishing_tales_bob, webcam_reviews_sky

### outdoor_03

- Brand: `brand_outdoor_adventure`
- Query: "Hiking gear creators for beginner backpackers"
- Purpose: Should favor hiking and outdoor gear creators.
- Preferred industries: Sports & Outdoors
- Hybrid top 5: home_gym_builds, marathon_pac_kim, fishing_tales_bob, climbing_wall_finn, ski_season_vera
- Metrics: avg_final=0.5971, avg_query_intent=0.5524, avg_anchor_intent=1, avg_brand_industry_fit=0.5, avg_preferred_industry_fit=1, zero_gmv_top5=0, off_brand_top5=0, off_preferred_top5=0, missing_anchor_top5=0
- Checks:
  - PASS Top 5 should avoid zero-GMV false positives (0 zero-GMV creators)
  - PASS Top 5 should mostly overlap brand industries (0 off-brand creators)
  - PASS Top 5 should match query-specific preferred industries (0 off-preferred creators)
  - PASS Average query-intent should stay high (0.552)
  - PASS Average anchor-intent should stay meaningful (1.000)
  - PASS Average preferred-industry fit should stay high (1.000)
- Ablation:
  - semantic_only: outdoor_survival_rex, hiker_adventures_zach, mountain_biker_ty, ski_season_vera, workwear_rugged_colt
  - business_only: home_gym_builds, marathon_pac_kim, fishing_tales_bob, gaming_phones_rio, apple_insider_cy
  - hybrid: home_gym_builds, marathon_pac_kim, fishing_tales_bob, climbing_wall_finn, ski_season_vera

### outdoor_04

- Brand: `brand_outdoor_adventure`
- Query: "Camping gear reviews with strong conversions"
- Purpose: Gear review query with explicit commerce intent.
- Preferred industries: Sports & Outdoors
- Hybrid top 5: home_gym_builds, gaming_phones_rio, webcam_reviews_sky, marathon_pac_kim, baby_gear_reviews_amy
- Metrics: avg_final=0.6279, avg_query_intent=0.4495, avg_anchor_intent=1, avg_brand_industry_fit=0.4, avg_preferred_industry_fit=0.4, zero_gmv_top5=0, off_brand_top5=1, off_preferred_top5=3, missing_anchor_top5=0
- Checks:
  - PASS Top 5 should avoid zero-GMV false positives (0 zero-GMV creators)
  - PASS Top 5 should mostly overlap brand industries (1 off-brand creators)
  - FAIL Top 5 should match query-specific preferred industries (3 off-preferred creators)
  - PASS Average query-intent should stay high (0.450)
  - PASS Average anchor-intent should stay meaningful (1.000)
  - PASS Average preferred-industry fit should stay high (0.400)
- Ablation:
  - semantic_only: gaming_phones_rio, hiker_adventures_zach, wearable_tech_zoe, phone_reviewer_kai, baby_gear_reviews_amy
  - business_only: home_gym_builds, gaming_phones_rio, kids_toy_reviews, marathon_pac_kim, baby_gear_reviews_amy
  - hybrid: home_gym_builds, gaming_phones_rio, webcam_reviews_sky, marathon_pac_kim, baby_gear_reviews_amy

### outdoor_05

- Brand: `brand_outdoor_adventure`
- Query: "Trail running creators who sell gear"
- Purpose: Should balance performance creators and true outdoor gear fit.
- Preferred industries: Sports & Outdoors, Health
- Hybrid top 5: home_gym_builds, marathon_pac_kim, gaming_phones_rio, fishing_tales_bob, streaming_setup_ada
- Metrics: avg_final=0.6412, avg_query_intent=0.4788, avg_anchor_intent=0.8035, avg_brand_industry_fit=0.5, avg_preferred_industry_fit=0.5, zero_gmv_top5=0, off_brand_top5=0, off_preferred_top5=2, missing_anchor_top5=0
- Checks:
  - PASS Top 5 should avoid zero-GMV false positives (0 zero-GMV creators)
  - PASS Top 5 should mostly overlap brand industries (0 off-brand creators)
  - FAIL Top 5 should match query-specific preferred industries (2 off-preferred creators)
  - PASS Average query-intent should stay high (0.479)
  - PASS Average anchor-intent should stay meaningful (0.804)
  - PASS Average preferred-industry fit should stay high (0.500)
- Ablation:
  - semantic_only: mountain_biker_ty, marathon_pac_kim, hiker_adventures_zach, run_daily_derek, gaming_phones_rio
  - business_only: home_gym_builds, marathon_pac_kim, gaming_phones_rio, baby_gear_reviews_amy, fishing_tales_bob
  - hybrid: home_gym_builds, marathon_pac_kim, gaming_phones_rio, fishing_tales_bob, streaming_setup_ada

### outdoor_06

- Brand: `brand_outdoor_adventure`
- Query: "Fishing creators with strong buying intent"
- Purpose: Direct outdoor commerce query likely to align with fishing creators.
- Preferred industries: Sports & Outdoors, Health
- Hybrid top 5: fishing_tales_bob, home_gym_builds, apple_insider_cy, gaming_phones_rio, laptop_reviews_amy
- Metrics: avg_final=0.5013, avg_query_intent=0.1081, avg_anchor_intent=0, avg_brand_industry_fit=0.5, avg_preferred_industry_fit=0.4, zero_gmv_top5=0, off_brand_top5=0, off_preferred_top5=3, missing_anchor_top5=0
- Checks:
  - PASS Top 5 should avoid zero-GMV false positives (0 zero-GMV creators)
  - PASS Top 5 should mostly overlap brand industries (0 off-brand creators)
  - FAIL Top 5 should match query-specific preferred industries (3 off-preferred creators)
  - FAIL Average query-intent should stay high (0.108)
  - FAIL Average anchor-intent should stay meaningful (0.000)
  - PASS Average preferred-industry fit should stay high (0.400)
- Ablation:
  - semantic_only: fishing_tales_bob, kayak_adventures_lu, gaming_phones_rio, outdoor_survival_rex, kite_flyer_grace
  - business_only: home_gym_builds, apple_insider_cy, fishing_tales_bob, gaming_phones_rio, webcam_reviews_sky
  - hybrid: fishing_tales_bob, home_gym_builds, apple_insider_cy, gaming_phones_rio, laptop_reviews_amy

### outdoor_07

- Brand: `brand_outdoor_adventure`
- Query: "Climbing gear reviews and technique creators"
- Purpose: Climbing-specific outdoor case.
- Preferred industries: Sports & Outdoors
- Hybrid top 5: home_gym_builds, gaming_phones_rio, marathon_pac_kim, climbing_wall_finn, streaming_setup_ada
- Metrics: avg_final=0.6906, avg_query_intent=0.5938, avg_anchor_intent=1, avg_brand_industry_fit=0.5, avg_preferred_industry_fit=0.6, zero_gmv_top5=0, off_brand_top5=0, off_preferred_top5=2, missing_anchor_top5=0
- Checks:
  - PASS Top 5 should avoid zero-GMV false positives (0 zero-GMV creators)
  - PASS Top 5 should mostly overlap brand industries (0 off-brand creators)
  - FAIL Top 5 should match query-specific preferred industries (2 off-preferred creators)
  - PASS Average query-intent should stay high (0.594)
  - PASS Average anchor-intent should stay meaningful (1.000)
  - PASS Average preferred-industry fit should stay high (0.600)
- Ablation:
  - semantic_only: climbing_wall_finn, mountain_biker_ty, hiker_adventures_zach, ski_season_vera, gaming_phones_rio
  - business_only: home_gym_builds, gaming_phones_rio, kids_toy_reviews, marathon_pac_kim, baby_gear_reviews_amy
  - hybrid: home_gym_builds, gaming_phones_rio, marathon_pac_kim, climbing_wall_finn, streaming_setup_ada

### outdoor_08

- Brand: `brand_outdoor_adventure`
- Query: "Mountain biking gear creators"
- Purpose: Should surface outdoor gear creators, not generic tech.
- Preferred industries: Sports & Outdoors
- Hybrid top 5: home_gym_builds, gaming_phones_rio, marathon_pac_kim, streaming_setup_ada, webcam_reviews_sky
- Metrics: avg_final=0.617, avg_query_intent=0.3816, avg_anchor_intent=1, avg_brand_industry_fit=0.5, avg_preferred_industry_fit=0.4, zero_gmv_top5=0, off_brand_top5=0, off_preferred_top5=3, missing_anchor_top5=0
- Checks:
  - PASS Top 5 should avoid zero-GMV false positives (0 zero-GMV creators)
  - PASS Top 5 should mostly overlap brand industries (0 off-brand creators)
  - FAIL Top 5 should match query-specific preferred industries (3 off-preferred creators)
  - PASS Average query-intent should stay high (0.382)
  - PASS Average anchor-intent should stay meaningful (1.000)
  - PASS Average preferred-industry fit should stay high (0.400)
- Ablation:
  - semantic_only: mountain_biker_ty, gaming_phones_rio, cycling_commute_jed, ski_season_vera, hiker_adventures_zach
  - business_only: home_gym_builds, gaming_phones_rio, marathon_pac_kim, baby_gear_reviews_amy, fishing_tales_bob
  - hybrid: home_gym_builds, gaming_phones_rio, marathon_pac_kim, streaming_setup_ada, webcam_reviews_sky

### outdoor_09

- Brand: `brand_outdoor_adventure`
- Query: "Ski and winter adventure gear creators"
- Purpose: Winter sports and adventure content query.
- Preferred industries: Sports & Outdoors
- Hybrid top 5: marathon_pac_kim, ski_season_vera, fishing_tales_bob, gaming_phones_rio, climbing_wall_finn
- Metrics: avg_final=0.5558, avg_query_intent=0.5377, avg_anchor_intent=0.8983, avg_brand_industry_fit=0.5, avg_preferred_industry_fit=0.8, zero_gmv_top5=0, off_brand_top5=0, off_preferred_top5=1, missing_anchor_top5=1
- Checks:
  - PASS Top 5 should avoid zero-GMV false positives (0 zero-GMV creators)
  - PASS Top 5 should mostly overlap brand industries (0 off-brand creators)
  - PASS Top 5 should match query-specific preferred industries (1 off-preferred creators)
  - PASS Average query-intent should stay high (0.538)
  - PASS Average anchor-intent should stay meaningful (0.898)
  - PASS Average preferred-industry fit should stay high (0.800)
- Ablation:
  - semantic_only: ski_season_vera, hiker_adventures_zach, kayak_adventures_lu, outdoor_survival_rex, mountain_biker_ty
  - business_only: marathon_pac_kim, fishing_tales_bob, gaming_phones_rio, apple_insider_cy, baby_gear_reviews_amy
  - hybrid: marathon_pac_kim, ski_season_vera, fishing_tales_bob, gaming_phones_rio, climbing_wall_finn

### outdoor_10

- Brand: `brand_outdoor_adventure`
- Query: "Wilderness survival gear creators"
- Purpose: Preparedness and survival outdoor query.
- Preferred industries: Sports & Outdoors, Health
- Hybrid top 5: home_gym_builds, gaming_phones_rio, marathon_pac_kim, webcam_reviews_sky, streaming_setup_ada
- Metrics: avg_final=0.6012, avg_query_intent=0.3816, avg_anchor_intent=1, avg_brand_industry_fit=0.5, avg_preferred_industry_fit=0.3, zero_gmv_top5=0, off_brand_top5=0, off_preferred_top5=3, missing_anchor_top5=0
- Checks:
  - PASS Top 5 should avoid zero-GMV false positives (0 zero-GMV creators)
  - PASS Top 5 should mostly overlap brand industries (0 off-brand creators)
  - FAIL Top 5 should match query-specific preferred industries (3 off-preferred creators)
  - PASS Average query-intent should stay high (0.382)
  - PASS Average anchor-intent should stay meaningful (1.000)
  - FAIL Average preferred-industry fit should stay high (0.300)
- Ablation:
  - semantic_only: outdoor_survival_rex, hiker_adventures_zach, workwear_rugged_colt, kayak_adventures_lu, mountain_biker_ty
  - business_only: home_gym_builds, gaming_phones_rio, marathon_pac_kim, baby_gear_reviews_amy, fishing_tales_bob
  - hybrid: home_gym_builds, gaming_phones_rio, marathon_pac_kim, webcam_reviews_sky, streaming_setup_ada

### outdoor_11

- Brand: `brand_outdoor_adventure`
- Query: "Paddleboarding and water adventure creators"
- Purpose: Water-sport outdoor query.
- Preferred industries: Sports & Outdoors
- Hybrid top 5: fishing_tales_bob, paddleboard_pro_dee, yoga_outdoors_ann, dog_adventures_rex, ski_season_vera
- Metrics: avg_final=0.4958, avg_query_intent=0.4416, avg_anchor_intent=1, avg_brand_industry_fit=0.4, avg_preferred_industry_fit=0.8, zero_gmv_top5=0, off_brand_top5=1, off_preferred_top5=1, missing_anchor_top5=0
- Checks:
  - PASS Top 5 should avoid zero-GMV false positives (0 zero-GMV creators)
  - PASS Top 5 should mostly overlap brand industries (1 off-brand creators)
  - PASS Top 5 should match query-specific preferred industries (1 off-preferred creators)
  - PASS Average query-intent should stay high (0.442)
  - PASS Average anchor-intent should stay meaningful (1.000)
  - PASS Average preferred-industry fit should stay high (0.800)
- Ablation:
  - semantic_only: kayak_adventures_lu, paddleboard_pro_dee, surf_life_carla, hiker_adventures_zach, gaming_phones_rio
  - business_only: fishing_tales_bob, apple_insider_cy, dog_adventures_rex, biohack_labs_rex, paddleboard_pro_dee
  - hybrid: fishing_tales_bob, paddleboard_pro_dee, yoga_outdoors_ann, dog_adventures_rex, ski_season_vera

### outdoor_12

- Brand: `brand_outdoor_adventure`
- Query: "Durable phone gear for outdoor travel"
- Purpose: Outdoor phone accessories and durability query.
- Preferred industries: Sports & Outdoors, Phones & Electronics
- Hybrid top 5: home_gym_builds, gaming_phones_rio, marathon_pac_kim, webcam_reviews_sky, streaming_setup_ada
- Metrics: avg_final=0.6406, avg_query_intent=0.4548, avg_anchor_intent=0.6714, avg_brand_industry_fit=0.5, avg_preferred_industry_fit=0.5, zero_gmv_top5=0, off_brand_top5=0, off_preferred_top5=0, missing_anchor_top5=0
- Checks:
  - PASS Top 5 should avoid zero-GMV false positives (0 zero-GMV creators)
  - PASS Top 5 should mostly overlap brand industries (0 off-brand creators)
  - PASS Top 5 should match query-specific preferred industries (0 off-preferred creators)
  - PASS Average query-intent should stay high (0.455)
  - PASS Average anchor-intent should stay meaningful (0.671)
  - PASS Average preferred-industry fit should stay high (0.500)
- Ablation:
  - semantic_only: gaming_phones_rio, wearable_tech_zoe, charging_tech_oscar, hiker_adventures_zach, earbuds_lab_dev
  - business_only: home_gym_builds, gaming_phones_rio, marathon_pac_kim, apple_insider_cy, baby_gear_reviews_amy
  - hybrid: home_gym_builds, gaming_phones_rio, marathon_pac_kim, webcam_reviews_sky, streaming_setup_ada

### outdoor_13

- Brand: `brand_outdoor_adventure`
- Query: "Budget hiking gear for first-time adventurers"
- Purpose: Budget hiking gear precision case.
- Preferred industries: Sports & Outdoors
- Hybrid top 5: home_gym_builds, marathon_pac_kim, fishing_tales_bob, climbing_wall_finn, ski_season_vera
- Metrics: avg_final=0.5843, avg_query_intent=0.4913, avg_anchor_intent=1, avg_brand_industry_fit=0.5, avg_preferred_industry_fit=1, zero_gmv_top5=0, off_brand_top5=0, off_preferred_top5=0, missing_anchor_top5=0
- Checks:
  - PASS Top 5 should avoid zero-GMV false positives (0 zero-GMV creators)
  - PASS Top 5 should mostly overlap brand industries (0 off-brand creators)
  - PASS Top 5 should match query-specific preferred industries (0 off-preferred creators)
  - PASS Average query-intent should stay high (0.491)
  - PASS Average anchor-intent should stay meaningful (1.000)
  - PASS Average preferred-industry fit should stay high (1.000)
- Ablation:
  - semantic_only: hiker_adventures_zach, outdoor_survival_rex, climbing_wall_finn, budget_phones_sal, budget_pc_builds_max
  - business_only: home_gym_builds, marathon_pac_kim, fishing_tales_bob, gaming_phones_rio, apple_insider_cy
  - hybrid: home_gym_builds, marathon_pac_kim, fishing_tales_bob, climbing_wall_finn, ski_season_vera

### outdoor_14

- Brand: `brand_outdoor_adventure`
- Query: "Outdoor creators with gear review content"
- Purpose: General gear-review outdoor query.
- Preferred industries: Sports & Outdoors
- Hybrid top 5: home_gym_builds, gaming_phones_rio, marathon_pac_kim, streaming_setup_ada, webcam_reviews_sky
- Metrics: avg_final=0.7189, avg_query_intent=0.6769, avg_anchor_intent=0.7053, avg_brand_industry_fit=0.5, avg_preferred_industry_fit=0.4, zero_gmv_top5=0, off_brand_top5=0, off_preferred_top5=3, missing_anchor_top5=0
- Checks:
  - PASS Top 5 should avoid zero-GMV false positives (0 zero-GMV creators)
  - PASS Top 5 should mostly overlap brand industries (0 off-brand creators)
  - FAIL Top 5 should match query-specific preferred industries (3 off-preferred creators)
  - PASS Average query-intent should stay high (0.677)
  - PASS Average anchor-intent should stay meaningful (0.705)
  - PASS Average preferred-industry fit should stay high (0.400)
- Ablation:
  - semantic_only: gaming_phones_rio, hiker_adventures_zach, outdoor_survival_rex, climbing_wall_finn, streaming_setup_ada
  - business_only: home_gym_builds, gaming_phones_rio, kids_toy_reviews, marathon_pac_kim, baby_gear_reviews_amy
  - hybrid: home_gym_builds, gaming_phones_rio, marathon_pac_kim, streaming_setup_ada, webcam_reviews_sky

### outdoor_15

- Brand: `brand_outdoor_adventure`
- Query: "Backcountry adventure and safety gear creators"
- Purpose: Safety and backcountry gear case.
- Preferred industries: Sports & Outdoors, Health
- Hybrid top 5: marathon_pac_kim, fishing_tales_bob, ski_season_vera, climbing_wall_finn, gaming_phones_rio
- Metrics: avg_final=0.5619, avg_query_intent=0.5377, avg_anchor_intent=0.8983, avg_brand_industry_fit=0.5, avg_preferred_industry_fit=0.6, zero_gmv_top5=0, off_brand_top5=0, off_preferred_top5=1, missing_anchor_top5=1
- Checks:
  - PASS Top 5 should avoid zero-GMV false positives (0 zero-GMV creators)
  - PASS Top 5 should mostly overlap brand industries (0 off-brand creators)
  - PASS Top 5 should match query-specific preferred industries (1 off-preferred creators)
  - PASS Average query-intent should stay high (0.538)
  - PASS Average anchor-intent should stay meaningful (0.898)
  - PASS Average preferred-industry fit should stay high (0.600)
- Ablation:
  - semantic_only: outdoor_survival_rex, hiker_adventures_zach, mountain_biker_ty, ski_season_vera, kayak_adventures_lu
  - business_only: marathon_pac_kim, fishing_tales_bob, gaming_phones_rio, apple_insider_cy, baby_gear_reviews_amy
  - hybrid: marathon_pac_kim, fishing_tales_bob, ski_season_vera, climbing_wall_finn, gaming_phones_rio

### outdoor_16

- Brand: `brand_outdoor_adventure`
- Query: "Trail camera and phone accessory creators"
- Purpose: Outdoor gear with electronics crossover.
- Preferred industries: Sports & Outdoors, Phones & Electronics
- Hybrid top 5: marathon_pac_kim, apple_insider_cy, fishing_tales_bob, gaming_phones_rio, webcam_reviews_sky
- Metrics: avg_final=0.536, avg_query_intent=0.3078, avg_anchor_intent=0.4982, avg_brand_industry_fit=0.5, avg_preferred_industry_fit=0.5, zero_gmv_top5=0, off_brand_top5=0, off_preferred_top5=0, missing_anchor_top5=3
- Checks:
  - PASS Top 5 should avoid zero-GMV false positives (0 zero-GMV creators)
  - PASS Top 5 should mostly overlap brand industries (0 off-brand creators)
  - PASS Top 5 should match query-specific preferred industries (0 off-preferred creators)
  - FAIL Average query-intent should stay high (0.308)
  - PASS Average anchor-intent should stay meaningful (0.498)
  - PASS Average preferred-industry fit should stay high (0.500)
- Ablation:
  - semantic_only: gaming_phones_rio, camera_tech_leo, webcam_reviews_sky, mountain_biker_ty, phone_reviewer_kai
  - business_only: marathon_pac_kim, apple_insider_cy, fishing_tales_bob, gaming_phones_rio, dog_adventures_rex
  - hybrid: marathon_pac_kim, apple_insider_cy, fishing_tales_bob, gaming_phones_rio, webcam_reviews_sky

### outdoor_17

- Brand: `brand_outdoor_adventure`
- Query: "Camping checklist and equipment creators"
- Purpose: Checklist-style equipment query.
- Preferred industries: Sports & Outdoors
- Hybrid top 5: home_gym_builds, streaming_setup_ada, webcam_reviews_sky, apple_insider_cy, gaming_phones_rio
- Metrics: avg_final=0.5634, avg_query_intent=0.1791, avg_anchor_intent=0, avg_brand_industry_fit=0.5, avg_preferred_industry_fit=0.2, zero_gmv_top5=0, off_brand_top5=0, off_preferred_top5=4, missing_anchor_top5=0
- Checks:
  - PASS Top 5 should avoid zero-GMV false positives (0 zero-GMV creators)
  - PASS Top 5 should mostly overlap brand industries (0 off-brand creators)
  - FAIL Top 5 should match query-specific preferred industries (4 off-preferred creators)
  - FAIL Average query-intent should stay high (0.179)
  - FAIL Average anchor-intent should stay meaningful (0.000)
  - FAIL Average preferred-industry fit should stay high (0.200)
- Ablation:
  - semantic_only: outdoor_survival_rex, hiker_adventures_zach, gaming_phones_rio, kayak_adventures_lu, climbing_wall_finn
  - business_only: home_gym_builds, apple_insider_cy, webcam_reviews_sky, streaming_setup_ada, gaming_phones_rio
  - hybrid: home_gym_builds, streaming_setup_ada, webcam_reviews_sky, apple_insider_cy, gaming_phones_rio

### outdoor_18

- Brand: `brand_outdoor_adventure`
- Query: "Adventure travel gear creators"
- Purpose: Broader travel and gear query that should stay outdoors-first.
- Preferred industries: Sports & Outdoors
- Hybrid top 5: marathon_pac_kim, fishing_tales_bob, ski_season_vera, climbing_wall_finn, gaming_phones_rio
- Metrics: avg_final=0.5601, avg_query_intent=0.6163, avg_anchor_intent=0.8983, avg_brand_industry_fit=0.5, avg_preferred_industry_fit=0.8, zero_gmv_top5=0, off_brand_top5=0, off_preferred_top5=1, missing_anchor_top5=1
- Checks:
  - PASS Top 5 should avoid zero-GMV false positives (0 zero-GMV creators)
  - PASS Top 5 should mostly overlap brand industries (0 off-brand creators)
  - PASS Top 5 should match query-specific preferred industries (1 off-preferred creators)
  - PASS Average query-intent should stay high (0.616)
  - PASS Average anchor-intent should stay meaningful (0.898)
  - PASS Average preferred-industry fit should stay high (0.800)
- Ablation:
  - semantic_only: hiker_adventures_zach, outdoor_survival_rex, kayak_adventures_lu, mountain_biker_ty, gaming_phones_rio
  - business_only: marathon_pac_kim, fishing_tales_bob, gaming_phones_rio, kids_toy_reviews, apple_insider_cy
  - hybrid: marathon_pac_kim, fishing_tales_bob, ski_season_vera, climbing_wall_finn, gaming_phones_rio

### outdoor_19

- Brand: `brand_outdoor_adventure`
- Query: "Trail running shoe review creators"
- Purpose: Footwear and performance review query.
- Preferred industries: Sports & Outdoors, Health
- Hybrid top 5: marathon_pac_kim, home_gym_builds, fishing_tales_bob, gaming_phones_rio, ski_season_vera
- Metrics: avg_final=0.6106, avg_query_intent=0.5305, avg_anchor_intent=0.8, avg_brand_industry_fit=0.5, avg_preferred_industry_fit=0.7, zero_gmv_top5=0, off_brand_top5=0, off_preferred_top5=1, missing_anchor_top5=1
- Checks:
  - PASS Top 5 should avoid zero-GMV false positives (0 zero-GMV creators)
  - PASS Top 5 should mostly overlap brand industries (0 off-brand creators)
  - PASS Top 5 should match query-specific preferred industries (1 off-preferred creators)
  - PASS Average query-intent should stay high (0.531)
  - PASS Average anchor-intent should stay meaningful (0.800)
  - PASS Average preferred-industry fit should stay high (0.700)
- Ablation:
  - semantic_only: marathon_pac_kim, mountain_biker_ty, wearable_tech_zoe, gaming_phones_rio, hiker_adventures_zach
  - business_only: home_gym_builds, marathon_pac_kim, fishing_tales_bob, gaming_phones_rio, kids_toy_reviews
  - hybrid: marathon_pac_kim, home_gym_builds, fishing_tales_bob, gaming_phones_rio, ski_season_vera

### outdoor_20

- Brand: `brand_outdoor_adventure`
- Query: "Climbing and bouldering gear educators"
- Purpose: Education-heavy climbing query.
- Preferred industries: Sports & Outdoors
- Hybrid top 5: home_gym_builds, gaming_phones_rio, climbing_wall_finn, marathon_pac_kim, streaming_setup_ada
- Metrics: avg_final=0.6158, avg_query_intent=0.3708, avg_anchor_intent=1, avg_brand_industry_fit=0.5, avg_preferred_industry_fit=0.6, zero_gmv_top5=0, off_brand_top5=0, off_preferred_top5=2, missing_anchor_top5=0
- Checks:
  - PASS Top 5 should avoid zero-GMV false positives (0 zero-GMV creators)
  - PASS Top 5 should mostly overlap brand industries (0 off-brand creators)
  - FAIL Top 5 should match query-specific preferred industries (2 off-preferred creators)
  - PASS Average query-intent should stay high (0.371)
  - PASS Average anchor-intent should stay meaningful (1.000)
  - PASS Average preferred-industry fit should stay high (0.600)
- Ablation:
  - semantic_only: climbing_wall_finn, hiker_adventures_zach, mountain_biker_ty, gaming_phones_rio, outdoor_survival_rex
  - business_only: home_gym_builds, gaming_phones_rio, marathon_pac_kim, baby_gear_reviews_amy, fishing_tales_bob
  - hybrid: home_gym_builds, gaming_phones_rio, climbing_wall_finn, marathon_pac_kim, streaming_setup_ada

### outdoor_21

- Brand: `brand_outdoor_adventure`
- Query: "Fishing tackle and outdoor gear creators"
- Purpose: Tackle and fishing commerce query.
- Preferred industries: Sports & Outdoors, Health
- Hybrid top 5: fishing_tales_bob, gaming_phones_rio, streaming_setup_ada, webcam_reviews_sky, baby_gear_reviews_amy
- Metrics: avg_final=0.6019, avg_query_intent=0.4096, avg_anchor_intent=0.607, avg_brand_industry_fit=0.4, avg_preferred_industry_fit=0.2, zero_gmv_top5=0, off_brand_top5=1, off_preferred_top5=4, missing_anchor_top5=0
- Checks:
  - PASS Top 5 should avoid zero-GMV false positives (0 zero-GMV creators)
  - PASS Top 5 should mostly overlap brand industries (1 off-brand creators)
  - FAIL Top 5 should match query-specific preferred industries (4 off-preferred creators)
  - PASS Average query-intent should stay high (0.410)
  - PASS Average anchor-intent should stay meaningful (0.607)
  - FAIL Average preferred-industry fit should stay high (0.200)
- Ablation:
  - semantic_only: fishing_tales_bob, gaming_phones_rio, kayak_adventures_lu, outdoor_kitchen_rex, outdoor_survival_rex
  - business_only: gaming_phones_rio, baby_gear_reviews_amy, fishing_tales_bob, webcam_reviews_sky, streaming_setup_ada
  - hybrid: fishing_tales_bob, gaming_phones_rio, streaming_setup_ada, webcam_reviews_sky, baby_gear_reviews_amy

### outdoor_22

- Brand: `brand_outdoor_adventure`
- Query: "Winter sports gear reviews"
- Purpose: Review-heavy winter outdoor query.
- Preferred industries: Sports & Outdoors
- Hybrid top 5: home_gym_builds, gaming_phones_rio, marathon_pac_kim, webcam_reviews_sky, baby_gear_reviews_amy
- Metrics: avg_final=0.6923, avg_query_intent=0.6404, avg_anchor_intent=1, avg_brand_industry_fit=0.4, avg_preferred_industry_fit=0.4, zero_gmv_top5=0, off_brand_top5=1, off_preferred_top5=3, missing_anchor_top5=0
- Checks:
  - PASS Top 5 should avoid zero-GMV false positives (0 zero-GMV creators)
  - PASS Top 5 should mostly overlap brand industries (1 off-brand creators)
  - FAIL Top 5 should match query-specific preferred industries (3 off-preferred creators)
  - PASS Average query-intent should stay high (0.640)
  - PASS Average anchor-intent should stay meaningful (1.000)
  - PASS Average preferred-industry fit should stay high (0.400)
- Ablation:
  - semantic_only: ski_season_vera, gaming_phones_rio, wearable_tech_zoe, mountain_biker_ty, earbuds_lab_dev
  - business_only: home_gym_builds, gaming_phones_rio, kids_toy_reviews, marathon_pac_kim, baby_gear_reviews_amy
  - hybrid: home_gym_builds, gaming_phones_rio, marathon_pac_kim, webcam_reviews_sky, baby_gear_reviews_amy

### outdoor_23

- Brand: `brand_outdoor_adventure`
- Query: "Outdoor smartwatch and phone accessory creators"
- Purpose: Outdoor-electronics accessory crossover query.
- Preferred industries: Sports & Outdoors, Phones & Electronics
- Hybrid top 5: home_gym_builds, marathon_pac_kim, apple_insider_cy, gaming_phones_rio, webcam_reviews_sky
- Metrics: avg_final=0.5572, avg_query_intent=0.2686, avg_anchor_intent=0.4982, avg_brand_industry_fit=0.5, avg_preferred_industry_fit=0.5, zero_gmv_top5=0, off_brand_top5=0, off_preferred_top5=0, missing_anchor_top5=3
- Checks:
  - PASS Top 5 should avoid zero-GMV false positives (0 zero-GMV creators)
  - PASS Top 5 should mostly overlap brand industries (0 off-brand creators)
  - PASS Top 5 should match query-specific preferred industries (0 off-preferred creators)
  - FAIL Average query-intent should stay high (0.269)
  - PASS Average anchor-intent should stay meaningful (0.498)
  - PASS Average preferred-industry fit should stay high (0.500)
- Ablation:
  - semantic_only: wearable_tech_zoe, gaming_phones_rio, phone_reviewer_kai, charging_tech_oscar, earbuds_lab_dev
  - business_only: home_gym_builds, marathon_pac_kim, apple_insider_cy, gaming_phones_rio, dog_adventures_rex
  - hybrid: home_gym_builds, marathon_pac_kim, apple_insider_cy, gaming_phones_rio, webcam_reviews_sky

### outdoor_24

- Brand: `brand_outdoor_adventure`
- Query: "Survival and emergency preparedness gear creators"
- Purpose: Preparedness-specific outdoor commerce query.
- Preferred industries: Sports & Outdoors, Health
- Hybrid top 5: home_gym_builds, gaming_phones_rio, marathon_pac_kim, webcam_reviews_sky, baby_gear_reviews_amy
- Metrics: avg_final=0.5946, avg_query_intent=0.3021, avg_anchor_intent=1, avg_brand_industry_fit=0.4, avg_preferred_industry_fit=0.3, zero_gmv_top5=0, off_brand_top5=1, off_preferred_top5=3, missing_anchor_top5=0
- Checks:
  - PASS Top 5 should avoid zero-GMV false positives (0 zero-GMV creators)
  - PASS Top 5 should mostly overlap brand industries (1 off-brand creators)
  - FAIL Top 5 should match query-specific preferred industries (3 off-preferred creators)
  - FAIL Average query-intent should stay high (0.302)
  - PASS Average anchor-intent should stay meaningful (1.000)
  - FAIL Average preferred-industry fit should stay high (0.300)
- Ablation:
  - semantic_only: outdoor_survival_rex, hiker_adventures_zach, kayak_adventures_lu, workwear_rugged_colt, gaming_phones_rio
  - business_only: home_gym_builds, gaming_phones_rio, marathon_pac_kim, baby_gear_reviews_amy, fishing_tales_bob
  - hybrid: home_gym_builds, gaming_phones_rio, marathon_pac_kim, webcam_reviews_sky, baby_gear_reviews_amy

### outdoor_25

- Brand: `brand_outdoor_adventure`
- Query: "Outdoor phone charging and power bank creators"
- Purpose: Phone charging gear with outdoor usage context.
- Preferred industries: Phones & Electronics, Sports & Outdoors
- Hybrid top 5: home_gym_builds, marathon_pac_kim, apple_insider_cy, gaming_phones_rio, fishing_tales_bob
- Metrics: avg_final=0.5478, avg_query_intent=0.2262, avg_anchor_intent=0.5018, avg_brand_industry_fit=0.5, avg_preferred_industry_fit=0.5, zero_gmv_top5=0, off_brand_top5=0, off_preferred_top5=0, missing_anchor_top5=2
- Checks:
  - PASS Top 5 should avoid zero-GMV false positives (0 zero-GMV creators)
  - PASS Top 5 should mostly overlap brand industries (0 off-brand creators)
  - PASS Top 5 should match query-specific preferred industries (0 off-preferred creators)
  - FAIL Average query-intent should stay high (0.226)
  - PASS Average anchor-intent should stay meaningful (0.502)
  - PASS Average preferred-industry fit should stay high (0.500)
- Ablation:
  - semantic_only: charging_tech_oscar, gaming_phones_rio, earbuds_lab_dev, repair_tech_tommy, laptop_reviews_amy
  - business_only: home_gym_builds, marathon_pac_kim, apple_insider_cy, fishing_tales_bob, gaming_phones_rio
  - hybrid: home_gym_builds, marathon_pac_kim, apple_insider_cy, gaming_phones_rio, fishing_tales_bob

### outdoor_26

- Brand: `brand_outdoor_adventure`
- Query: "Rugged outdoor gear creators with repeat purchase intent"
- Purpose: Commerce-heavy rugged gear query.
- Preferred industries: Sports & Outdoors
- Hybrid top 5: gaming_phones_rio, marathon_pac_kim, baby_gear_reviews_amy, webcam_reviews_sky, kids_toy_reviews
- Metrics: avg_final=0.5747, avg_query_intent=0.3295, avg_anchor_intent=0.607, avg_brand_industry_fit=0.3, avg_preferred_industry_fit=0.2, zero_gmv_top5=0, off_brand_top5=2, off_preferred_top5=4, missing_anchor_top5=0
- Checks:
  - PASS Top 5 should avoid zero-GMV false positives (0 zero-GMV creators)
  - FAIL Top 5 should mostly overlap brand industries (2 off-brand creators)
  - FAIL Top 5 should match query-specific preferred industries (4 off-preferred creators)
  - FAIL Average query-intent should stay high (0.330)
  - PASS Average anchor-intent should stay meaningful (0.607)
  - FAIL Average preferred-industry fit should stay high (0.200)
- Ablation:
  - semantic_only: workwear_rugged_colt, athletic_fit_cole, outdoor_survival_rex, luxury_menswear_kaz, hiker_adventures_zach
  - business_only: marathon_pac_kim, gaming_phones_rio, kids_toy_reviews, baby_gear_reviews_amy, webcam_reviews_sky
  - hybrid: gaming_phones_rio, marathon_pac_kim, baby_gear_reviews_amy, webcam_reviews_sky, kids_toy_reviews

### outdoor_27

- Brand: `brand_outdoor_adventure`
- Query: "Outdoor creators for men 18-34 with strong GMV"
- Purpose: Audience-specific outdoor commerce query.
- Preferred industries: Sports & Outdoors
- Hybrid top 5: home_gym_builds, workwear_rugged_colt, yoga_outdoors_ann, climbing_wall_finn, dog_adventures_rex
- Metrics: avg_final=0.4885, avg_query_intent=0.3368, avg_anchor_intent=1, avg_brand_industry_fit=0.3, avg_preferred_industry_fit=0.6, zero_gmv_top5=0, off_brand_top5=2, off_preferred_top5=2, missing_anchor_top5=0
- Checks:
  - PASS Top 5 should avoid zero-GMV false positives (0 zero-GMV creators)
  - FAIL Top 5 should mostly overlap brand industries (2 off-brand creators)
  - FAIL Top 5 should match query-specific preferred industries (2 off-preferred creators)
  - FAIL Average query-intent should stay high (0.337)
  - PASS Average anchor-intent should stay meaningful (1.000)
  - PASS Average preferred-industry fit should stay high (0.600)
- Ablation:
  - semantic_only: athletic_fit_cole, workwear_rugged_colt, business_casual_nate, luxury_menswear_kaz, outdoor_kitchen_rex
  - business_only: home_gym_builds, dog_adventures_rex, climbing_wall_finn, workwear_rugged_colt, gaming_phones_rio
  - hybrid: home_gym_builds, workwear_rugged_colt, yoga_outdoors_ann, climbing_wall_finn, dog_adventures_rex

### outdoor_28

- Brand: `brand_outdoor_adventure`
- Query: "Mountain trail content with strong conversion"
- Purpose: Trail content plus commerce requirement.
- Preferred industries: Sports & Outdoors
- Hybrid top 5: home_gym_builds, marathon_pac_kim, fishing_tales_bob, mountain_biker_ty, ski_season_vera
- Metrics: avg_final=0.562, avg_query_intent=0.3663, avg_anchor_intent=1, avg_brand_industry_fit=0.5, avg_preferred_industry_fit=1, zero_gmv_top5=0, off_brand_top5=0, off_preferred_top5=0, missing_anchor_top5=0
- Checks:
  - PASS Top 5 should avoid zero-GMV false positives (0 zero-GMV creators)
  - PASS Top 5 should mostly overlap brand industries (0 off-brand creators)
  - PASS Top 5 should match query-specific preferred industries (0 off-preferred creators)
  - PASS Average query-intent should stay high (0.366)
  - PASS Average anchor-intent should stay meaningful (1.000)
  - PASS Average preferred-industry fit should stay high (1.000)
- Ablation:
  - semantic_only: mountain_biker_ty, hiker_adventures_zach, ski_season_vera, outdoor_survival_rex, wearable_tech_zoe
  - business_only: home_gym_builds, marathon_pac_kim, fishing_tales_bob, apple_insider_cy, dog_adventures_rex
  - hybrid: home_gym_builds, marathon_pac_kim, fishing_tales_bob, mountain_biker_ty, ski_season_vera

### outdoor_29

- Brand: `brand_outdoor_adventure`
- Query: "Endurance training creators with outdoor buying intent"
- Purpose: Performance and outdoors crossover query.
- Preferred industries: Sports & Outdoors, Health
- Hybrid top 5: home_gym_builds, marathon_pac_kim, climbing_wall_finn, yoga_outdoors_ann, biohack_labs_rex
- Metrics: avg_final=0.5516, avg_query_intent=0.3529, avg_anchor_intent=1, avg_brand_industry_fit=0.5, avg_preferred_industry_fit=0.7, zero_gmv_top5=0, off_brand_top5=0, off_preferred_top5=0, missing_anchor_top5=0
- Checks:
  - PASS Top 5 should avoid zero-GMV false positives (0 zero-GMV creators)
  - PASS Top 5 should mostly overlap brand industries (0 off-brand creators)
  - PASS Top 5 should match query-specific preferred industries (0 off-preferred creators)
  - PASS Average query-intent should stay high (0.353)
  - PASS Average anchor-intent should stay meaningful (1.000)
  - PASS Average preferred-industry fit should stay high (0.700)
- Ablation:
  - semantic_only: outdoor_survival_rex, wearable_tech_zoe, hiker_adventures_zach, yoga_outdoors_ann, climbing_wall_finn
  - business_only: home_gym_builds, marathon_pac_kim, apple_insider_cy, dog_adventures_rex, biohack_labs_rex
  - hybrid: home_gym_builds, marathon_pac_kim, climbing_wall_finn, yoga_outdoors_ann, biohack_labs_rex

### outdoor_30

- Brand: `brand_outdoor_adventure`
- Query: "Outdoor recovery and wellness for athletes"
- Purpose: Wellness-heavy outdoor query that should still stay in-category.
- Preferred industries: Sports & Outdoors, Health
- Hybrid top 5: home_gym_builds, marathon_pac_kim, fishing_tales_bob, yoga_outdoors_ann, ski_season_vera
- Metrics: avg_final=0.5604, avg_query_intent=0.3636, avg_anchor_intent=1, avg_brand_industry_fit=0.5, avg_preferred_industry_fit=0.8, zero_gmv_top5=0, off_brand_top5=0, off_preferred_top5=0, missing_anchor_top5=0
- Checks:
  - PASS Top 5 should avoid zero-GMV false positives (0 zero-GMV creators)
  - PASS Top 5 should mostly overlap brand industries (0 off-brand creators)
  - PASS Top 5 should match query-specific preferred industries (0 off-preferred creators)
  - PASS Average query-intent should stay high (0.364)
  - PASS Average anchor-intent should stay meaningful (1.000)
  - PASS Average preferred-industry fit should stay high (0.800)
- Ablation:
  - semantic_only: yoga_outdoors_ann, outdoor_survival_rex, wearable_tech_zoe, hiker_adventures_zach, kayak_adventures_lu
  - business_only: home_gym_builds, marathon_pac_kim, fishing_tales_bob, dog_adventures_rex, biohack_labs_rex
  - hybrid: home_gym_builds, marathon_pac_kim, fishing_tales_bob, yoga_outdoors_ann, ski_season_vera

### outdoor_31

- Brand: `brand_outdoor_adventure`
- Query: "Kayaking and paddle gear creators"
- Purpose: Paddle-sport gear query.
- Preferred industries: Sports & Outdoors
- Hybrid top 5: gaming_phones_rio, webcam_reviews_sky, marathon_pac_kim, streaming_setup_ada, fishing_tales_bob
- Metrics: avg_final=0.5821, avg_query_intent=0.3816, avg_anchor_intent=1, avg_brand_industry_fit=0.5, avg_preferred_industry_fit=0.4, zero_gmv_top5=0, off_brand_top5=0, off_preferred_top5=3, missing_anchor_top5=0
- Checks:
  - PASS Top 5 should avoid zero-GMV false positives (0 zero-GMV creators)
  - PASS Top 5 should mostly overlap brand industries (0 off-brand creators)
  - FAIL Top 5 should match query-specific preferred industries (3 off-preferred creators)
  - PASS Average query-intent should stay high (0.382)
  - PASS Average anchor-intent should stay meaningful (1.000)
  - PASS Average preferred-industry fit should stay high (0.400)
- Ablation:
  - semantic_only: kayak_adventures_lu, gaming_phones_rio, paddleboard_pro_dee, kite_flyer_grace, mountain_biker_ty
  - business_only: gaming_phones_rio, marathon_pac_kim, baby_gear_reviews_amy, fishing_tales_bob, webcam_reviews_sky
  - hybrid: gaming_phones_rio, webcam_reviews_sky, marathon_pac_kim, streaming_setup_ada, fishing_tales_bob

### outdoor_32

- Brand: `brand_outdoor_adventure`
- Query: "Content creators for scenic hiking trips and product sales"
- Purpose: Scenic outdoor storytelling with commerce requirement.
- Preferred industries: Sports & Outdoors
- Hybrid top 5: fishing_tales_bob, marathon_pac_kim, ski_season_vera, mountain_biker_ty, yoga_outdoors_ann
- Metrics: avg_final=0.5252, avg_query_intent=0.3561, avg_anchor_intent=1, avg_brand_industry_fit=0.5, avg_preferred_industry_fit=1, zero_gmv_top5=0, off_brand_top5=0, off_preferred_top5=0, missing_anchor_top5=0
- Checks:
  - PASS Top 5 should avoid zero-GMV false positives (0 zero-GMV creators)
  - PASS Top 5 should mostly overlap brand industries (0 off-brand creators)
  - PASS Top 5 should match query-specific preferred industries (0 off-preferred creators)
  - PASS Average query-intent should stay high (0.356)
  - PASS Average anchor-intent should stay meaningful (1.000)
  - PASS Average preferred-industry fit should stay high (1.000)
- Ablation:
  - semantic_only: hiker_adventures_zach, mountain_biker_ty, kayak_adventures_lu, ski_season_vera, outdoor_survival_rex
  - business_only: marathon_pac_kim, fishing_tales_bob, apple_insider_cy, dog_adventures_rex, paddleboard_pro_dee
  - hybrid: fishing_tales_bob, marathon_pac_kim, ski_season_vera, mountain_biker_ty, yoga_outdoors_ann

### outdoor_33

- Brand: `brand_outdoor_adventure`
- Query: "Gear-heavy adventure creators that still fit the brand"
- Purpose: High-level outdoor fit check for hidden tests.
- Preferred industries: Sports & Outdoors
- Hybrid top 5: home_gym_builds, marathon_pac_kim, fishing_tales_bob, climbing_wall_finn, ski_season_vera
- Metrics: avg_final=0.5479, avg_query_intent=0.3554, avg_anchor_intent=1, avg_brand_industry_fit=0.5, avg_preferred_industry_fit=1, zero_gmv_top5=0, off_brand_top5=0, off_preferred_top5=0, missing_anchor_top5=0
- Checks:
  - PASS Top 5 should avoid zero-GMV false positives (0 zero-GMV creators)
  - PASS Top 5 should mostly overlap brand industries (0 off-brand creators)
  - PASS Top 5 should match query-specific preferred industries (0 off-preferred creators)
  - PASS Average query-intent should stay high (0.355)
  - PASS Average anchor-intent should stay meaningful (1.000)
  - PASS Average preferred-industry fit should stay high (1.000)
- Ablation:
  - semantic_only: gaming_phones_rio, hiker_adventures_zach, workwear_rugged_colt, athletic_fit_cole, kayak_adventures_lu
  - business_only: home_gym_builds, marathon_pac_kim, fishing_tales_bob, apple_insider_cy, climbing_wall_finn
  - hybrid: home_gym_builds, marathon_pac_kim, fishing_tales_bob, climbing_wall_finn, ski_season_vera

