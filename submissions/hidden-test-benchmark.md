# Hidden Test Benchmark

Generated: 2026-03-22T21:18:53.467Z

## Summary

- Cases: 100
- Passing cases: 94
- Failing cases: 6
- Case pass rate: 0.94
- Total checks: 600
- Passed checks: 592
- Failed checks: 8
- Check pass rate: 0.9867

## Brand Breakdown

- brand_smart_home: 29/34 cases passing, 197/204 checks passing
- brand_beauty_wellness: 32/33 cases passing, 197/198 checks passing
- brand_outdoor_adventure: 33/33 cases passing, 198/198 checks passing

## Failure Hotspots

- Average query-intent should stay high: 5
- Average preferred-industry fit should stay high: 2
- Average anchor-intent should stay meaningful: 1

## Weakest Cases

- smart_home_27 (brand_smart_home): 2 failed checks
- smart_home_devices (brand_smart_home): 2 failed checks
- beauty_13 (brand_beauty_wellness): 1 failed checks
- smart_home_20 (brand_smart_home): 1 failed checks
- smart_home_26 (brand_smart_home): 1 failed checks
- smart_home_34 (brand_smart_home): 1 failed checks
- beauty_03 (brand_beauty_wellness): 0 failed checks
- beauty_04 (brand_beauty_wellness): 0 failed checks
- beauty_05 (brand_beauty_wellness): 0 failed checks
- beauty_06 (brand_beauty_wellness): 0 failed checks

## Case Results

### smart_home_core

- Brand: `brand_smart_home`
- Query: "Affordable home decor for small apartments"
- Purpose: Primary submission-style decor query for small spaces.
- Preferred industries: Home, Tools & Hardware
- Hybrid top 5: small_space_living_lee, mid_century_milo, paint_pro_tips_mick, home_office_setup_pam, garage_org_hal
- Metrics: avg_final=0.6804, avg_query_intent=0.5301, avg_anchor_intent=1, avg_brand_industry_fit=0.5333, avg_preferred_industry_fit=0.8, zero_gmv_top5=0, off_brand_top5=0, off_preferred_top5=0, missing_anchor_top5=0
- Checks:
  - PASS Top 5 should avoid zero-GMV false positives (0 zero-GMV creators)
  - PASS Top 5 should mostly overlap brand industries (0 off-brand creators)
  - PASS Top 5 should match query-specific preferred industries (0 off-preferred creators)
  - PASS Average query-intent should stay high (0.530)
  - PASS Average anchor-intent should stay meaningful (1.000)
  - PASS Average preferred-industry fit should stay high (0.800)
- Ablation:
  - semantic_only: small_space_living_lee, renter_decor_tips_kay, diy_furniture_flip_jo, home_gym_builds, garage_org_hal
  - business_only: small_space_living_lee, paint_pro_tips_mick, mid_century_milo, home_office_setup_pam, garage_org_hal
  - hybrid: small_space_living_lee, mid_century_milo, paint_pro_tips_mick, home_office_setup_pam, garage_org_hal

### smart_home_renters

- Brand: `brand_smart_home`
- Query: "Budget apartment decor for renters"
- Purpose: Likely hidden renter decor precision query.
- Preferred industries: Home, Tools & Hardware
- Hybrid top 5: small_space_living_lee, paint_pro_tips_mick, mid_century_milo, home_office_setup_pam, renter_decor_tips_kay
- Metrics: avg_final=0.6517, avg_query_intent=0.4939, avg_anchor_intent=1, avg_brand_industry_fit=0.4667, avg_preferred_industry_fit=0.7, zero_gmv_top5=0, off_brand_top5=0, off_preferred_top5=0, missing_anchor_top5=0
- Checks:
  - PASS Top 5 should avoid zero-GMV false positives (0 zero-GMV creators)
  - PASS Top 5 should mostly overlap brand industries (0 off-brand creators)
  - PASS Top 5 should match query-specific preferred industries (0 off-preferred creators)
  - PASS Average query-intent should stay high (0.494)
  - PASS Average anchor-intent should stay meaningful (1.000)
  - PASS Average preferred-industry fit should stay high (0.700)
- Ablation:
  - semantic_only: renter_decor_tips_kay, home_gym_builds, small_space_living_lee, budget_pc_builds_max, bathroom_reno_tips_sue
  - business_only: small_space_living_lee, paint_pro_tips_mick, mid_century_milo, home_office_setup_pam, garage_org_hal
  - hybrid: small_space_living_lee, paint_pro_tips_mick, mid_century_milo, home_office_setup_pam, renter_decor_tips_kay

### smart_home_03

- Brand: `brand_smart_home`
- Query: "Cozy living room decor on a budget"
- Purpose: Tests whether cozy decor creators beat generic home creators.
- Preferred industries: Home, Tools & Hardware
- Hybrid top 5: small_space_living_lee, paint_pro_tips_mick, mid_century_milo, home_office_setup_pam, garage_org_hal
- Metrics: avg_final=0.7185, avg_query_intent=0.8268, avg_anchor_intent=1, avg_brand_industry_fit=0.5333, avg_preferred_industry_fit=0.8, zero_gmv_top5=0, off_brand_top5=0, off_preferred_top5=0, missing_anchor_top5=0
- Checks:
  - PASS Top 5 should avoid zero-GMV false positives (0 zero-GMV creators)
  - PASS Top 5 should mostly overlap brand industries (0 off-brand creators)
  - PASS Top 5 should match query-specific preferred industries (0 off-preferred creators)
  - PASS Average query-intent should stay high (0.827)
  - PASS Average anchor-intent should stay meaningful (1.000)
  - PASS Average preferred-industry fit should stay high (0.800)
- Ablation:
  - semantic_only: cozy_home_eleanor, diy_furniture_flip_jo, small_space_living_lee, renter_decor_tips_kay, budget_pc_builds_max
  - business_only: small_space_living_lee, paint_pro_tips_mick, mid_century_milo, home_office_setup_pam, plumbing_diy_skip
  - hybrid: small_space_living_lee, paint_pro_tips_mick, mid_century_milo, home_office_setup_pam, garage_org_hal

### smart_home_04

- Brand: `brand_smart_home`
- Query: "Studio apartment storage and furniture ideas"
- Purpose: Focuses on furniture and layout creators for small homes.
- Preferred industries: Home, Tools & Hardware
- Hybrid top 5: small_space_living_lee, mid_century_milo, garage_org_hal, color_palette_home_cc, home_office_setup_pam
- Metrics: avg_final=0.6446, avg_query_intent=0.5817, avg_anchor_intent=0.7375, avg_brand_industry_fit=0.4667, avg_preferred_industry_fit=0.7, zero_gmv_top5=0, off_brand_top5=0, off_preferred_top5=0, missing_anchor_top5=1
- Checks:
  - PASS Top 5 should avoid zero-GMV false positives (0 zero-GMV creators)
  - PASS Top 5 should mostly overlap brand industries (0 off-brand creators)
  - PASS Top 5 should match query-specific preferred industries (0 off-preferred creators)
  - PASS Average query-intent should stay high (0.582)
  - PASS Average anchor-intent should stay meaningful (0.737)
  - PASS Average preferred-industry fit should stay high (0.700)
- Ablation:
  - semantic_only: small_space_living_lee, renter_decor_tips_kay, garage_org_hal, home_gym_builds, nas_builds_otto
  - business_only: small_space_living_lee, mid_century_milo, garage_org_hal, color_palette_home_cc, home_office_setup_pam
  - hybrid: small_space_living_lee, mid_century_milo, garage_org_hal, color_palette_home_cc, home_office_setup_pam

### smart_home_05

- Brand: `brand_smart_home`
- Query: "Multifunctional furniture for tiny apartments"
- Purpose: Pushes apartment and furniture intent together.
- Preferred industries: Home, Tools & Hardware
- Hybrid top 5: small_space_living_lee, mid_century_milo, diy_furniture_flip_jo, plumbing_diy_skip, home_office_setup_pam
- Metrics: avg_final=0.5687, avg_query_intent=0.4232, avg_anchor_intent=0.6, avg_brand_industry_fit=0.5333, avg_preferred_industry_fit=0.8, zero_gmv_top5=0, off_brand_top5=0, off_preferred_top5=0, missing_anchor_top5=2
- Checks:
  - PASS Top 5 should avoid zero-GMV false positives (0 zero-GMV creators)
  - PASS Top 5 should mostly overlap brand industries (0 off-brand creators)
  - PASS Top 5 should match query-specific preferred industries (0 off-preferred creators)
  - PASS Average query-intent should stay high (0.423)
  - PASS Average anchor-intent should stay meaningful (0.600)
  - PASS Average preferred-industry fit should stay high (0.800)
- Ablation:
  - semantic_only: small_space_living_lee, garage_org_hal, renter_decor_tips_kay, home_office_setup_pam, mid_century_milo
  - business_only: small_space_living_lee, mid_century_milo, plumbing_diy_skip, home_office_setup_pam, ladder_safety_tom
  - hybrid: small_space_living_lee, mid_century_milo, diy_furniture_flip_jo, plumbing_diy_skip, home_office_setup_pam

### smart_home_06

- Brand: `brand_smart_home`
- Query: "Small bedroom makeover ideas on a budget"
- Purpose: Tests decor precision on another room-level query.
- Preferred industries: Home, Tools & Hardware
- Hybrid top 5: mid_century_milo, paint_pro_tips_mick, small_space_living_lee, color_palette_home_cc, diy_furniture_flip_jo
- Metrics: avg_final=0.5921, avg_query_intent=0.4, avg_anchor_intent=0.8, avg_brand_industry_fit=0.5333, avg_preferred_industry_fit=0.8, zero_gmv_top5=0, off_brand_top5=0, off_preferred_top5=0, missing_anchor_top5=1
- Checks:
  - PASS Top 5 should avoid zero-GMV false positives (0 zero-GMV creators)
  - PASS Top 5 should mostly overlap brand industries (0 off-brand creators)
  - PASS Top 5 should match query-specific preferred industries (0 off-preferred creators)
  - PASS Average query-intent should stay high (0.400)
  - PASS Average anchor-intent should stay meaningful (0.800)
  - PASS Average preferred-industry fit should stay high (0.800)
- Ablation:
  - semantic_only: bathroom_reno_tips_sue, diy_furniture_flip_jo, small_space_living_lee, home_gym_builds, plumbing_diy_skip
  - business_only: paint_pro_tips_mick, mid_century_milo, small_space_living_lee, color_palette_home_cc, plumbing_diy_skip
  - hybrid: mid_century_milo, paint_pro_tips_mick, small_space_living_lee, color_palette_home_cc, diy_furniture_flip_jo

### smart_home_07

- Brand: `brand_smart_home`
- Query: "Minimal apartment decor creators with strong conversions"
- Purpose: Checks minimalist interior relevance plus commerce.
- Preferred industries: Home, Tools & Hardware
- Hybrid top 5: small_space_living_lee, mid_century_milo, paint_pro_tips_mick, home_office_setup_pam, garage_org_hal
- Metrics: avg_final=0.6645, avg_query_intent=0.351, avg_anchor_intent=0.5455, avg_brand_industry_fit=0.5333, avg_preferred_industry_fit=0.8, zero_gmv_top5=0, off_brand_top5=0, off_preferred_top5=0, missing_anchor_top5=0
- Checks:
  - PASS Top 5 should avoid zero-GMV false positives (0 zero-GMV creators)
  - PASS Top 5 should mostly overlap brand industries (0 off-brand creators)
  - PASS Top 5 should match query-specific preferred industries (0 off-preferred creators)
  - PASS Average query-intent should stay high (0.351)
  - PASS Average anchor-intent should stay meaningful (0.545)
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
- Hybrid top 5: small_space_living_lee, paint_pro_tips_mick, mid_century_milo, home_office_setup_pam, garage_org_hal
- Metrics: avg_final=0.6403, avg_query_intent=0.398, avg_anchor_intent=0.6364, avg_brand_industry_fit=0.5333, avg_preferred_industry_fit=1, zero_gmv_top5=0, off_brand_top5=0, off_preferred_top5=0, missing_anchor_top5=0
- Checks:
  - PASS Top 5 should avoid zero-GMV false positives (0 zero-GMV creators)
  - PASS Top 5 should mostly overlap brand industries (0 off-brand creators)
  - PASS Top 5 should match query-specific preferred industries (0 off-preferred creators)
  - PASS Average query-intent should stay high (0.398)
  - PASS Average anchor-intent should stay meaningful (0.636)
  - PASS Average preferred-industry fit should stay high (1.000)
- Ablation:
  - semantic_only: renter_decor_tips_kay, home_gym_builds, diy_furniture_flip_jo, small_space_living_lee, plumbing_diy_skip
  - business_only: small_space_living_lee, paint_pro_tips_mick, mid_century_milo, home_office_setup_pam, garage_org_hal
  - hybrid: small_space_living_lee, paint_pro_tips_mick, mid_century_milo, home_office_setup_pam, garage_org_hal

### smart_home_09

- Brand: `brand_smart_home`
- Query: "Color palette ideas for cozy apartments"
- Purpose: Looks for interior color and decor creators.
- Preferred industries: Home, Tools & Hardware
- Hybrid top 5: paint_pro_tips_mick, mid_century_milo, color_palette_home_cc, small_space_living_lee, cozy_home_eleanor
- Metrics: avg_final=0.6446, avg_query_intent=0.6698, avg_anchor_intent=0.8649, avg_brand_industry_fit=0.4667, avg_preferred_industry_fit=0.7, zero_gmv_top5=0, off_brand_top5=0, off_preferred_top5=0, missing_anchor_top5=1
- Checks:
  - PASS Top 5 should avoid zero-GMV false positives (0 zero-GMV creators)
  - PASS Top 5 should mostly overlap brand industries (0 off-brand creators)
  - PASS Top 5 should match query-specific preferred industries (0 off-preferred creators)
  - PASS Average query-intent should stay high (0.670)
  - PASS Average anchor-intent should stay meaningful (0.865)
  - PASS Average preferred-industry fit should stay high (0.700)
- Ablation:
  - semantic_only: color_palette_home_cc, cozy_home_eleanor, paint_pro_tips_mick, small_space_living_lee, renter_decor_tips_kay
  - business_only: paint_pro_tips_mick, mid_century_milo, small_space_living_lee, color_palette_home_cc, home_office_setup_pam
  - hybrid: paint_pro_tips_mick, mid_century_milo, color_palette_home_cc, small_space_living_lee, cozy_home_eleanor

### smart_home_10

- Brand: `brand_smart_home`
- Query: "Lighting and lamp ideas for small living rooms"
- Purpose: Should surface lighting-aware home creators, not electronics-first creators.
- Preferred industries: Home, Tools & Hardware
- Hybrid top 5: small_space_living_lee, mid_century_milo, plumbing_diy_skip, paint_pro_tips_mick, home_office_setup_pam
- Metrics: avg_final=0.5289, avg_query_intent=0.4489, avg_anchor_intent=0.4902, avg_brand_industry_fit=0.5333, avg_preferred_industry_fit=0.8, zero_gmv_top5=0, off_brand_top5=0, off_preferred_top5=0, missing_anchor_top5=5
- Checks:
  - PASS Top 5 should avoid zero-GMV false positives (0 zero-GMV creators)
  - PASS Top 5 should mostly overlap brand industries (0 off-brand creators)
  - PASS Top 5 should match query-specific preferred industries (0 off-preferred creators)
  - PASS Average query-intent should stay high (0.449)
  - PASS Average anchor-intent should stay meaningful (0.490)
  - PASS Average preferred-industry fit should stay high (0.800)
- Ablation:
  - semantic_only: lighting_design_tess, small_space_living_lee, electrical_safe_pat, garage_org_hal, kitchen_organizer_jo
  - business_only: small_space_living_lee, plumbing_diy_skip, paint_pro_tips_mick, mid_century_milo, home_office_setup_pam
  - hybrid: small_space_living_lee, mid_century_milo, plumbing_diy_skip, paint_pro_tips_mick, home_office_setup_pam

### smart_home_11

- Brand: `brand_smart_home`
- Query: "Interior design creators for first apartments"
- Purpose: Tests broad interior relevance with beginner apartment intent.
- Preferred industries: Home, Tools & Hardware
- Hybrid top 5: mid_century_milo, paint_pro_tips_mick, small_space_living_lee, color_palette_home_cc, renter_decor_tips_kay
- Metrics: avg_final=0.596, avg_query_intent=0.4609, avg_anchor_intent=0.6, avg_brand_industry_fit=0.4667, avg_preferred_industry_fit=0.7, zero_gmv_top5=0, off_brand_top5=0, off_preferred_top5=0, missing_anchor_top5=1
- Checks:
  - PASS Top 5 should avoid zero-GMV false positives (0 zero-GMV creators)
  - PASS Top 5 should mostly overlap brand industries (0 off-brand creators)
  - PASS Top 5 should match query-specific preferred industries (0 off-preferred creators)
  - PASS Average query-intent should stay high (0.461)
  - PASS Average anchor-intent should stay meaningful (0.600)
  - PASS Average preferred-industry fit should stay high (0.700)
- Ablation:
  - semantic_only: renter_decor_tips_kay, small_space_living_lee, mid_century_milo, coding_setup_cait, lighting_design_tess
  - business_only: paint_pro_tips_mick, mid_century_milo, small_space_living_lee, home_office_setup_pam, color_palette_home_cc
  - hybrid: mid_century_milo, paint_pro_tips_mick, small_space_living_lee, color_palette_home_cc, renter_decor_tips_kay

### smart_home_12

- Brand: `brand_smart_home`
- Query: "Small apartment makeover creators with strong conversions"
- Purpose: High-commerce apartment decor case.
- Preferred industries: Home, Tools & Hardware
- Hybrid top 5: mid_century_milo, small_space_living_lee, paint_pro_tips_mick, cozy_home_eleanor, renter_decor_tips_kay
- Metrics: avg_final=0.6015, avg_query_intent=0.4739, avg_anchor_intent=0.8, avg_brand_industry_fit=0.4667, avg_preferred_industry_fit=0.7, zero_gmv_top5=0, off_brand_top5=0, off_preferred_top5=0, missing_anchor_top5=1
- Checks:
  - PASS Top 5 should avoid zero-GMV false positives (0 zero-GMV creators)
  - PASS Top 5 should mostly overlap brand industries (0 off-brand creators)
  - PASS Top 5 should match query-specific preferred industries (0 off-preferred creators)
  - PASS Average query-intent should stay high (0.474)
  - PASS Average anchor-intent should stay meaningful (0.800)
  - PASS Average preferred-industry fit should stay high (0.700)
- Ablation:
  - semantic_only: small_space_living_lee, renter_decor_tips_kay, diy_furniture_flip_jo, bathroom_reno_tips_sue, kitchen_organizer_jo
  - business_only: paint_pro_tips_mick, mid_century_milo, small_space_living_lee, plumbing_diy_skip, cozy_home_eleanor
  - hybrid: mid_century_milo, small_space_living_lee, paint_pro_tips_mick, cozy_home_eleanor, renter_decor_tips_kay

### smart_home_organization

- Brand: `brand_smart_home`
- Query: "Small space organization ideas for apartments"
- Purpose: Organization-heavy small home query.
- Preferred industries: Home, Tools & Hardware
- Hybrid top 5: small_space_living_lee, garage_org_hal, home_office_setup_pam, mid_century_milo, plumbing_diy_skip
- Metrics: avg_final=0.6006, avg_query_intent=0.466, avg_anchor_intent=0.6, avg_brand_industry_fit=0.5333, avg_preferred_industry_fit=0.8, zero_gmv_top5=0, off_brand_top5=0, off_preferred_top5=0, missing_anchor_top5=2
- Checks:
  - PASS Top 5 should avoid zero-GMV false positives (0 zero-GMV creators)
  - PASS Top 5 should mostly overlap brand industries (0 off-brand creators)
  - PASS Top 5 should match query-specific preferred industries (0 off-preferred creators)
  - PASS Average query-intent should stay high (0.466)
  - PASS Average anchor-intent should stay meaningful (0.600)
  - PASS Average preferred-industry fit should stay high (0.800)
- Ablation:
  - semantic_only: small_space_living_lee, garage_org_hal, renter_decor_tips_kay, home_gym_builds, kitchen_organizer_jo
  - business_only: small_space_living_lee, home_office_setup_pam, mid_century_milo, garage_org_hal, plumbing_diy_skip
  - hybrid: small_space_living_lee, garage_org_hal, home_office_setup_pam, mid_century_milo, plumbing_diy_skip

### smart_home_14

- Brand: `brand_smart_home`
- Query: "Kitchen organization ideas for small apartments"
- Purpose: Should favor storage and organization creators over broad decor.
- Preferred industries: Home, Tools & Hardware
- Hybrid top 5: small_space_living_lee, home_office_setup_pam, mid_century_milo, plumbing_diy_skip, paint_pro_tips_mick
- Metrics: avg_final=0.7026, avg_query_intent=0.4865, avg_anchor_intent=0.7057, avg_brand_industry_fit=0.5333, avg_preferred_industry_fit=0.8, zero_gmv_top5=0, off_brand_top5=0, off_preferred_top5=0, missing_anchor_top5=0
- Checks:
  - PASS Top 5 should avoid zero-GMV false positives (0 zero-GMV creators)
  - PASS Top 5 should mostly overlap brand industries (0 off-brand creators)
  - PASS Top 5 should match query-specific preferred industries (0 off-preferred creators)
  - PASS Average query-intent should stay high (0.487)
  - PASS Average anchor-intent should stay meaningful (0.706)
  - PASS Average preferred-industry fit should stay high (0.800)
- Ablation:
  - semantic_only: kitchen_organizer_jo, small_space_living_lee, garage_org_hal, renter_decor_tips_kay, home_office_setup_pam
  - business_only: small_space_living_lee, plumbing_diy_skip, paint_pro_tips_mick, mid_century_milo, home_office_setup_pam
  - hybrid: small_space_living_lee, home_office_setup_pam, mid_century_milo, plumbing_diy_skip, paint_pro_tips_mick

### smart_home_15

- Brand: `brand_smart_home`
- Query: "Pantry and kitchen storage for renters"
- Purpose: Tests renter-friendly organization intent.
- Preferred industries: Home, Tools & Hardware
- Hybrid top 5: small_space_living_lee, home_office_setup_pam, garage_org_hal, mid_century_milo, plumbing_diy_skip
- Metrics: avg_final=0.6398, avg_query_intent=0.6629, avg_anchor_intent=0.8, avg_brand_industry_fit=0.5333, avg_preferred_industry_fit=0.8, zero_gmv_top5=0, off_brand_top5=0, off_preferred_top5=0, missing_anchor_top5=2
- Checks:
  - PASS Top 5 should avoid zero-GMV false positives (0 zero-GMV creators)
  - PASS Top 5 should mostly overlap brand industries (0 off-brand creators)
  - PASS Top 5 should match query-specific preferred industries (0 off-preferred creators)
  - PASS Average query-intent should stay high (0.663)
  - PASS Average anchor-intent should stay meaningful (0.800)
  - PASS Average preferred-industry fit should stay high (0.800)
- Ablation:
  - semantic_only: kitchen_organizer_jo, small_space_living_lee, renter_decor_tips_kay, garage_org_hal, nas_builds_otto
  - business_only: small_space_living_lee, home_office_setup_pam, plumbing_diy_skip, paint_pro_tips_mick, mid_century_milo
  - hybrid: small_space_living_lee, home_office_setup_pam, garage_org_hal, mid_century_milo, plumbing_diy_skip

### smart_home_16

- Brand: `brand_smart_home`
- Query: "Closet organization ideas for small bedrooms"
- Purpose: Smaller-space organization query with strong anchor terms.
- Preferred industries: Home, Tools & Hardware
- Hybrid top 5: small_space_living_lee, home_office_setup_pam, garage_org_hal, mid_century_milo, plumbing_diy_skip
- Metrics: avg_final=0.5987, avg_query_intent=0.4412, avg_anchor_intent=0.6, avg_brand_industry_fit=0.5333, avg_preferred_industry_fit=0.8, zero_gmv_top5=0, off_brand_top5=0, off_preferred_top5=0, missing_anchor_top5=2
- Checks:
  - PASS Top 5 should avoid zero-GMV false positives (0 zero-GMV creators)
  - PASS Top 5 should mostly overlap brand industries (0 off-brand creators)
  - PASS Top 5 should match query-specific preferred industries (0 off-preferred creators)
  - PASS Average query-intent should stay high (0.441)
  - PASS Average anchor-intent should stay meaningful (0.600)
  - PASS Average preferred-industry fit should stay high (0.800)
- Ablation:
  - semantic_only: garage_org_hal, small_space_living_lee, kitchen_organizer_jo, cable_management_al, bookshelf_tours_gem
  - business_only: small_space_living_lee, home_office_setup_pam, mid_century_milo, garage_org_hal, plumbing_diy_skip
  - hybrid: small_space_living_lee, home_office_setup_pam, garage_org_hal, mid_century_milo, plumbing_diy_skip

### smart_home_17

- Brand: `brand_smart_home`
- Query: "Entryway storage for small homes"
- Purpose: Tests storage creators in a compact home setting.
- Preferred industries: Home, Tools & Hardware
- Hybrid top 5: small_space_living_lee, mid_century_milo, home_office_setup_pam, garage_org_hal, color_palette_home_cc
- Metrics: avg_final=0.6897, avg_query_intent=0.8195, avg_anchor_intent=0.8038, avg_brand_industry_fit=0.4667, avg_preferred_industry_fit=0.7, zero_gmv_top5=0, off_brand_top5=0, off_preferred_top5=0, missing_anchor_top5=0
- Checks:
  - PASS Top 5 should avoid zero-GMV false positives (0 zero-GMV creators)
  - PASS Top 5 should mostly overlap brand industries (0 off-brand creators)
  - PASS Top 5 should match query-specific preferred industries (0 off-preferred creators)
  - PASS Average query-intent should stay high (0.820)
  - PASS Average anchor-intent should stay meaningful (0.804)
  - PASS Average preferred-industry fit should stay high (0.700)
- Ablation:
  - semantic_only: small_space_living_lee, garage_org_hal, kitchen_organizer_jo, nas_builds_otto, diy_furniture_flip_jo
  - business_only: small_space_living_lee, mid_century_milo, home_office_setup_pam, garage_org_hal, color_palette_home_cc
  - hybrid: small_space_living_lee, mid_century_milo, home_office_setup_pam, garage_org_hal, color_palette_home_cc

### smart_home_18

- Brand: `brand_smart_home`
- Query: "Home office setup for small spaces"
- Purpose: Should reward office layout creators with home relevance.
- Preferred industries: Home, Computer & Office Equipment
- Hybrid top 5: home_office_setup_pam, small_space_living_lee, streaming_setup_ada, webcam_reviews_sky, mid_century_milo
- Metrics: avg_final=0.5927, avg_query_intent=0.4708, avg_anchor_intent=0.6, avg_brand_industry_fit=0.4, avg_preferred_industry_fit=0.5, zero_gmv_top5=0, off_brand_top5=0, off_preferred_top5=0, missing_anchor_top5=2
- Checks:
  - PASS Top 5 should avoid zero-GMV false positives (0 zero-GMV creators)
  - PASS Top 5 should mostly overlap brand industries (0 off-brand creators)
  - PASS Top 5 should match query-specific preferred industries (0 off-preferred creators)
  - PASS Average query-intent should stay high (0.471)
  - PASS Average anchor-intent should stay meaningful (0.600)
  - PASS Average preferred-industry fit should stay high (0.500)
- Ablation:
  - semantic_only: home_office_setup_pam, desk_setup_reviews_jo, coding_setup_cait, cable_management_al, garage_org_hal
  - business_only: small_space_living_lee, home_office_setup_pam, streaming_setup_ada, webcam_reviews_sky, mid_century_milo
  - hybrid: home_office_setup_pam, small_space_living_lee, streaming_setup_ada, webcam_reviews_sky, mid_century_milo

### smart_home_19

- Brand: `brand_smart_home`
- Query: "Home office desk organization for remote workers"
- Purpose: Checks office productivity and organization crossover.
- Preferred industries: Home, Computer & Office Equipment
- Hybrid top 5: home_office_setup_pam, webcam_reviews_sky, streaming_setup_ada, small_space_living_lee, desk_setup_reviews_jo
- Metrics: avg_final=0.6048, avg_query_intent=0.6331, avg_anchor_intent=0.67, avg_brand_industry_fit=0.3333, avg_preferred_industry_fit=0.5, zero_gmv_top5=0, off_brand_top5=0, off_preferred_top5=0, missing_anchor_top5=1
- Checks:
  - PASS Top 5 should avoid zero-GMV false positives (0 zero-GMV creators)
  - PASS Top 5 should mostly overlap brand industries (0 off-brand creators)
  - PASS Top 5 should match query-specific preferred industries (0 off-preferred creators)
  - PASS Average query-intent should stay high (0.633)
  - PASS Average anchor-intent should stay meaningful (0.670)
  - PASS Average preferred-industry fit should stay high (0.500)
- Ablation:
  - semantic_only: home_office_setup_pam, desk_setup_reviews_jo, cable_management_al, coding_setup_cait, garage_org_hal
  - business_only: home_office_setup_pam, small_space_living_lee, webcam_reviews_sky, streaming_setup_ada, mechanical_keys_jax
  - hybrid: home_office_setup_pam, webcam_reviews_sky, streaming_setup_ada, small_space_living_lee, desk_setup_reviews_jo

### smart_home_20

- Brand: `brand_smart_home`
- Query: "Bathroom upgrades that feel expensive on a budget"
- Purpose: Targets renovation and home improvement creators.
- Preferred industries: Home, Tools & Hardware
- Hybrid top 5: plumbing_diy_skip, bathroom_reno_tips_sue, small_space_living_lee, paint_pro_tips_mick, mid_century_milo
- Metrics: avg_final=0.4716, avg_query_intent=0.2111, avg_anchor_intent=0.2, avg_brand_industry_fit=0.5333, avg_preferred_industry_fit=0.8, zero_gmv_top5=0, off_brand_top5=0, off_preferred_top5=0, missing_anchor_top5=4
- Checks:
  - PASS Top 5 should avoid zero-GMV false positives (0 zero-GMV creators)
  - PASS Top 5 should mostly overlap brand industries (0 off-brand creators)
  - PASS Top 5 should match query-specific preferred industries (0 off-preferred creators)
  - FAIL Average query-intent should stay high (0.211)
  - PASS Average anchor-intent should stay meaningful (0.200)
  - PASS Average preferred-industry fit should stay high (0.800)
- Ablation:
  - semantic_only: bathroom_reno_tips_sue, plumbing_diy_skip, tile_work_pro_sal, budget_pc_builds_max, diy_furniture_flip_jo
  - business_only: plumbing_diy_skip, small_space_living_lee, bathroom_reno_tips_sue, paint_pro_tips_mick, mid_century_milo
  - hybrid: plumbing_diy_skip, bathroom_reno_tips_sue, small_space_living_lee, paint_pro_tips_mick, mid_century_milo

### smart_home_21

- Brand: `brand_smart_home`
- Query: "Budget paint ideas for refreshing a rental"
- Purpose: Should surface paint and color creators instead of generic decor.
- Preferred industries: Home, Tools & Hardware
- Hybrid top 5: paint_pro_tips_mick, mid_century_milo, small_space_living_lee, color_palette_home_cc, diy_furniture_flip_jo
- Metrics: avg_final=0.6017, avg_query_intent=0.4897, avg_anchor_intent=0.8, avg_brand_industry_fit=0.5333, avg_preferred_industry_fit=0.8, zero_gmv_top5=0, off_brand_top5=0, off_preferred_top5=0, missing_anchor_top5=1
- Checks:
  - PASS Top 5 should avoid zero-GMV false positives (0 zero-GMV creators)
  - PASS Top 5 should mostly overlap brand industries (0 off-brand creators)
  - PASS Top 5 should match query-specific preferred industries (0 off-preferred creators)
  - PASS Average query-intent should stay high (0.490)
  - PASS Average anchor-intent should stay meaningful (0.800)
  - PASS Average preferred-industry fit should stay high (0.800)
- Ablation:
  - semantic_only: diy_furniture_flip_jo, paint_pro_tips_mick, bathroom_reno_tips_sue, renter_decor_tips_kay, color_palette_home_cc
  - business_only: paint_pro_tips_mick, mid_century_milo, small_space_living_lee, color_palette_home_cc, plumbing_diy_skip
  - hybrid: paint_pro_tips_mick, mid_century_milo, small_space_living_lee, color_palette_home_cc, diy_furniture_flip_jo

### smart_home_22

- Brand: `brand_smart_home`
- Query: "Paint and color creators for interior refreshes"
- Purpose: Tests paint-specific creators with home overlap.
- Preferred industries: Home, Tools & Hardware
- Hybrid top 5: paint_pro_tips_mick, mid_century_milo, color_palette_home_cc, diy_furniture_flip_jo, renter_decor_tips_kay
- Metrics: avg_final=0.6032, avg_query_intent=0.7036, avg_anchor_intent=0.9325, avg_brand_industry_fit=0.5333, avg_preferred_industry_fit=0.8, zero_gmv_top5=0, off_brand_top5=0, off_preferred_top5=0, missing_anchor_top5=0
- Checks:
  - PASS Top 5 should avoid zero-GMV false positives (0 zero-GMV creators)
  - PASS Top 5 should mostly overlap brand industries (0 off-brand creators)
  - PASS Top 5 should match query-specific preferred industries (0 off-preferred creators)
  - PASS Average query-intent should stay high (0.704)
  - PASS Average anchor-intent should stay meaningful (0.933)
  - PASS Average preferred-industry fit should stay high (0.800)
- Ablation:
  - semantic_only: paint_pro_tips_mick, color_palette_home_cc, diy_furniture_flip_jo, bathroom_reno_tips_sue, art_supplies_luna
  - business_only: paint_pro_tips_mick, mid_century_milo, small_space_living_lee, color_palette_home_cc, plumbing_diy_skip
  - hybrid: paint_pro_tips_mick, mid_century_milo, color_palette_home_cc, diy_furniture_flip_jo, renter_decor_tips_kay

### smart_home_23

- Brand: `brand_smart_home`
- Query: "Garage organization systems for homeowners"
- Purpose: Utility-heavy home query with workshop flavor.
- Preferred industries: Home, Tools & Hardware
- Hybrid top 5: small_space_living_lee, garage_org_hal, home_office_setup_pam, plumbing_diy_skip, paint_pro_tips_mick
- Metrics: avg_final=0.5991, avg_query_intent=0.428, avg_anchor_intent=0.6, avg_brand_industry_fit=0.5333, avg_preferred_industry_fit=0.8, zero_gmv_top5=0, off_brand_top5=0, off_preferred_top5=0, missing_anchor_top5=2
- Checks:
  - PASS Top 5 should avoid zero-GMV false positives (0 zero-GMV creators)
  - PASS Top 5 should mostly overlap brand industries (0 off-brand creators)
  - PASS Top 5 should match query-specific preferred industries (0 off-preferred creators)
  - PASS Average query-intent should stay high (0.428)
  - PASS Average anchor-intent should stay meaningful (0.600)
  - PASS Average preferred-industry fit should stay high (0.800)
- Ablation:
  - semantic_only: garage_org_hal, nas_builds_otto, kitchen_organizer_jo, cable_management_al, power_tools_sam
  - business_only: small_space_living_lee, home_office_setup_pam, plumbing_diy_skip, garage_org_hal, paint_pro_tips_mick
  - hybrid: small_space_living_lee, garage_org_hal, home_office_setup_pam, plumbing_diy_skip, paint_pro_tips_mick

### smart_home_24

- Brand: `brand_smart_home`
- Query: "Workshop and garage storage content that sells"
- Purpose: Commerce-heavy garage organization case.
- Preferred industries: Home, Tools & Hardware
- Hybrid top 5: garage_org_hal, small_space_living_lee, home_office_setup_pam, mid_century_milo, plumbing_diy_skip
- Metrics: avg_final=0.5349, avg_query_intent=0.4104, avg_anchor_intent=0.5333, avg_brand_industry_fit=0.5333, avg_preferred_industry_fit=0.8, zero_gmv_top5=0, off_brand_top5=0, off_preferred_top5=0, missing_anchor_top5=4
- Checks:
  - PASS Top 5 should avoid zero-GMV false positives (0 zero-GMV creators)
  - PASS Top 5 should mostly overlap brand industries (0 off-brand creators)
  - PASS Top 5 should match query-specific preferred industries (0 off-preferred creators)
  - PASS Average query-intent should stay high (0.410)
  - PASS Average anchor-intent should stay meaningful (0.533)
  - PASS Average preferred-industry fit should stay high (0.800)
- Ablation:
  - semantic_only: garage_org_hal, workshop_builds_ed, nas_builds_otto, cable_management_al, power_tools_sam
  - business_only: small_space_living_lee, mid_century_milo, garage_org_hal, home_office_setup_pam, plumbing_diy_skip
  - hybrid: garage_org_hal, small_space_living_lee, home_office_setup_pam, mid_century_milo, plumbing_diy_skip

### smart_home_devices

- Brand: `brand_smart_home`
- Query: "Affordable smart home devices for first apartments"
- Purpose: Allows electronics crossover while keeping home-device relevance.
- Preferred industries: Home, Tools & Hardware, Phones & Electronics
- Hybrid top 5: small_space_living_lee, apple_insider_cy, gaming_phones_rio, webcam_reviews_sky, streaming_setup_ada
- Metrics: avg_final=0.6371, avg_query_intent=0.3717, avg_anchor_intent=1, avg_brand_industry_fit=0.3333, avg_preferred_industry_fit=0.3333, zero_gmv_top5=0, off_brand_top5=0, off_preferred_top5=0, missing_anchor_top5=0
- Checks:
  - PASS Top 5 should avoid zero-GMV false positives (0 zero-GMV creators)
  - PASS Top 5 should mostly overlap brand industries (0 off-brand creators)
  - PASS Top 5 should match query-specific preferred industries (0 off-preferred creators)
  - FAIL Average query-intent should stay high (0.372)
  - PASS Average anchor-intent should stay meaningful (1.000)
  - FAIL Average preferred-industry fit should stay high (0.333)
- Ablation:
  - semantic_only: smart_home_build_eli, budget_phones_sal, home_gym_builds, renter_decor_tips_kay, electrical_safe_pat
  - business_only: apple_insider_cy, small_space_living_lee, gaming_phones_rio, webcam_reviews_sky, streaming_setup_ada
  - hybrid: small_space_living_lee, apple_insider_cy, gaming_phones_rio, webcam_reviews_sky, streaming_setup_ada

### smart_home_26

- Brand: `brand_smart_home`
- Query: "Budget-friendly smart plugs and home automation"
- Purpose: Tests automation creators with real device intent.
- Preferred industries: Phones & Electronics, Home, Tools & Hardware
- Hybrid top 5: small_space_living_lee, electrical_safe_pat, phone_reviewer_kai, repair_tech_tommy, apple_insider_cy
- Metrics: avg_final=0.5354, avg_query_intent=0.4632, avg_anchor_intent=0.6, avg_brand_industry_fit=0.3333, avg_preferred_industry_fit=0.3333, zero_gmv_top5=0, off_brand_top5=0, off_preferred_top5=0, missing_anchor_top5=1
- Checks:
  - PASS Top 5 should avoid zero-GMV false positives (0 zero-GMV creators)
  - PASS Top 5 should mostly overlap brand industries (0 off-brand creators)
  - PASS Top 5 should match query-specific preferred industries (0 off-preferred creators)
  - PASS Average query-intent should stay high (0.463)
  - PASS Average anchor-intent should stay meaningful (0.600)
  - FAIL Average preferred-industry fit should stay high (0.333)
- Ablation:
  - semantic_only: smart_home_build_eli, electrical_safe_pat, budget_phones_sal, budget_pc_builds_max, plumbing_diy_skip
  - business_only: small_space_living_lee, electrical_safe_pat, apple_insider_cy, phone_reviewer_kai, repair_tech_tommy
  - hybrid: small_space_living_lee, electrical_safe_pat, phone_reviewer_kai, repair_tech_tommy, apple_insider_cy

### smart_home_27

- Brand: `brand_smart_home`
- Query: "Smart lighting upgrades for apartments"
- Purpose: Should reward lighting and home automation creators.
- Preferred industries: Home, Tools & Hardware, Phones & Electronics
- Hybrid top 5: plumbing_diy_skip, small_space_living_lee, apple_insider_cy, paint_pro_tips_mick, gaming_phones_rio
- Metrics: avg_final=0.4419, avg_query_intent=0.135, avg_anchor_intent=0.098, avg_brand_industry_fit=0.4667, avg_preferred_industry_fit=0.4667, zero_gmv_top5=0, off_brand_top5=0, off_preferred_top5=0, missing_anchor_top5=5
- Checks:
  - PASS Top 5 should avoid zero-GMV false positives (0 zero-GMV creators)
  - PASS Top 5 should mostly overlap brand industries (0 off-brand creators)
  - PASS Top 5 should match query-specific preferred industries (0 off-preferred creators)
  - FAIL Average query-intent should stay high (0.135)
  - FAIL Average anchor-intent should stay meaningful (0.098)
  - PASS Average preferred-industry fit should stay high (0.467)
- Ablation:
  - semantic_only: lighting_design_tess, smart_home_build_eli, electrical_safe_pat, plumbing_diy_skip, small_space_living_lee
  - business_only: small_space_living_lee, plumbing_diy_skip, apple_insider_cy, paint_pro_tips_mick, gaming_phones_rio
  - hybrid: plumbing_diy_skip, small_space_living_lee, apple_insider_cy, paint_pro_tips_mick, gaming_phones_rio

### smart_home_28

- Brand: `brand_smart_home`
- Query: "Smart security devices for apartment dwellers"
- Purpose: Home security device case for renters and apartments.
- Preferred industries: Phones & Electronics, Home
- Hybrid top 5: small_space_living_lee, electrical_safe_pat, webcam_reviews_sky, apple_insider_cy, phone_reviewer_kai
- Metrics: avg_final=0.5816, avg_query_intent=0.5553, avg_anchor_intent=0.9, avg_brand_industry_fit=0.3333, avg_preferred_industry_fit=0.4, zero_gmv_top5=0, off_brand_top5=0, off_preferred_top5=1, missing_anchor_top5=1
- Checks:
  - PASS Top 5 should avoid zero-GMV false positives (0 zero-GMV creators)
  - PASS Top 5 should mostly overlap brand industries (0 off-brand creators)
  - PASS Top 5 should match query-specific preferred industries (1 off-preferred creators)
  - PASS Average query-intent should stay high (0.555)
  - PASS Average anchor-intent should stay meaningful (0.900)
  - PASS Average preferred-industry fit should stay high (0.400)
- Ablation:
  - semantic_only: smart_home_build_eli, electrical_safe_pat, renter_decor_tips_kay, nas_builds_otto, home_gym_builds
  - business_only: small_space_living_lee, apple_insider_cy, webcam_reviews_sky, electrical_safe_pat, gaming_phones_rio
  - hybrid: small_space_living_lee, electrical_safe_pat, webcam_reviews_sky, apple_insider_cy, phone_reviewer_kai

### smart_home_29

- Brand: `brand_smart_home`
- Query: "Safe home wiring and smart device setup"
- Purpose: Should reward electrical and safe setup creators.
- Preferred industries: Tools & Hardware, Phones & Electronics, Home
- Hybrid top 5: electrical_safe_pat, apple_insider_cy, small_space_living_lee, gaming_phones_rio, ladder_safety_tom
- Metrics: avg_final=0.5212, avg_query_intent=0.3889, avg_anchor_intent=0.5, avg_brand_industry_fit=0.4, avg_preferred_industry_fit=0.4, zero_gmv_top5=0, off_brand_top5=0, off_preferred_top5=0, missing_anchor_top5=4
- Checks:
  - PASS Top 5 should avoid zero-GMV false positives (0 zero-GMV creators)
  - PASS Top 5 should mostly overlap brand industries (0 off-brand creators)
  - PASS Top 5 should match query-specific preferred industries (0 off-preferred creators)
  - PASS Average query-intent should stay high (0.389)
  - PASS Average anchor-intent should stay meaningful (0.500)
  - PASS Average preferred-industry fit should stay high (0.400)
- Ablation:
  - semantic_only: electrical_safe_pat, smart_home_build_eli, network_nerd_evan, ladder_safety_tom, cable_management_al
  - business_only: apple_insider_cy, small_space_living_lee, electrical_safe_pat, gaming_phones_rio, webcam_reviews_sky
  - hybrid: electrical_safe_pat, apple_insider_cy, small_space_living_lee, gaming_phones_rio, ladder_safety_tom

### smart_home_30

- Brand: `brand_smart_home`
- Query: "Affordable video doorbell and apartment security setup"
- Purpose: Specific apartment security and electronics crossover query.
- Preferred industries: Phones & Electronics, Home
- Hybrid top 5: small_space_living_lee, webcam_reviews_sky, electrical_safe_pat, phone_reviewer_kai, apple_insider_cy
- Metrics: avg_final=0.5277, avg_query_intent=0.4058, avg_anchor_intent=0.8, avg_brand_industry_fit=0.3333, avg_preferred_industry_fit=0.4, zero_gmv_top5=0, off_brand_top5=0, off_preferred_top5=1, missing_anchor_top5=1
- Checks:
  - PASS Top 5 should avoid zero-GMV false positives (0 zero-GMV creators)
  - PASS Top 5 should mostly overlap brand industries (0 off-brand creators)
  - PASS Top 5 should match query-specific preferred industries (1 off-preferred creators)
  - PASS Average query-intent should stay high (0.406)
  - PASS Average anchor-intent should stay meaningful (0.800)
  - PASS Average preferred-industry fit should stay high (0.400)
- Ablation:
  - semantic_only: webcam_reviews_sky, budget_phones_sal, home_gym_builds, desk_setup_reviews_jo, smart_home_build_eli
  - business_only: small_space_living_lee, webcam_reviews_sky, electrical_safe_pat, apple_insider_cy, phone_reviewer_kai
  - hybrid: small_space_living_lee, webcam_reviews_sky, electrical_safe_pat, phone_reviewer_kai, apple_insider_cy

### smart_home_31

- Brand: `brand_smart_home`
- Query: "Home automation creators for beginners"
- Purpose: Tests automation vocabulary without apartment modifiers.
- Preferred industries: Phones & Electronics, Home
- Hybrid top 5: small_space_living_lee, electrical_safe_pat, welding_basics_hugo, apple_insider_cy, plumbing_diy_skip
- Metrics: avg_final=0.5249, avg_query_intent=0.3702, avg_anchor_intent=0.4, avg_brand_industry_fit=0.4667, avg_preferred_industry_fit=0.4, zero_gmv_top5=0, off_brand_top5=0, off_preferred_top5=1, missing_anchor_top5=3
- Checks:
  - PASS Top 5 should avoid zero-GMV false positives (0 zero-GMV creators)
  - PASS Top 5 should mostly overlap brand industries (0 off-brand creators)
  - PASS Top 5 should match query-specific preferred industries (1 off-preferred creators)
  - PASS Average query-intent should stay high (0.370)
  - PASS Average anchor-intent should stay meaningful (0.400)
  - PASS Average preferred-industry fit should stay high (0.400)
- Ablation:
  - semantic_only: smart_home_build_eli, electrical_safe_pat, coding_setup_cait, plumbing_diy_skip, network_nerd_evan
  - business_only: small_space_living_lee, electrical_safe_pat, apple_insider_cy, welding_basics_hugo, plumbing_diy_skip
  - hybrid: small_space_living_lee, electrical_safe_pat, welding_basics_hugo, apple_insider_cy, plumbing_diy_skip

### smart_home_32

- Brand: `brand_smart_home`
- Query: "Device setup creators for home offices"
- Purpose: Checks home office device setup without losing home fit.
- Preferred industries: Phones & Electronics, Computer & Office Equipment, Home
- Hybrid top 5: apple_insider_cy, webcam_reviews_sky, streaming_setup_ada, small_space_living_lee, gaming_phones_rio
- Metrics: avg_final=0.6476, avg_query_intent=0.4909, avg_anchor_intent=0.7, avg_brand_industry_fit=0.3333, avg_preferred_industry_fit=0.4667, zero_gmv_top5=0, off_brand_top5=0, off_preferred_top5=0, missing_anchor_top5=0
- Checks:
  - PASS Top 5 should avoid zero-GMV false positives (0 zero-GMV creators)
  - PASS Top 5 should mostly overlap brand industries (0 off-brand creators)
  - PASS Top 5 should match query-specific preferred industries (0 off-preferred creators)
  - PASS Average query-intent should stay high (0.491)
  - PASS Average anchor-intent should stay meaningful (0.700)
  - PASS Average preferred-industry fit should stay high (0.467)
- Ablation:
  - semantic_only: coding_setup_cait, desk_setup_reviews_jo, home_office_setup_pam, cable_management_al, network_nerd_evan
  - business_only: apple_insider_cy, small_space_living_lee, gaming_phones_rio, webcam_reviews_sky, streaming_setup_ada
  - hybrid: apple_insider_cy, webcam_reviews_sky, streaming_setup_ada, small_space_living_lee, gaming_phones_rio

### smart_home_33

- Brand: `brand_smart_home`
- Query: "Apartment gadget creators with strong conversions"
- Purpose: Commerce-heavy apartment electronics case.
- Preferred industries: Phones & Electronics, Home
- Hybrid top 5: small_space_living_lee, apple_insider_cy, gaming_phones_rio, webcam_reviews_sky, streaming_setup_ada
- Metrics: avg_final=0.6513, avg_query_intent=0.4406, avg_anchor_intent=1, avg_brand_industry_fit=0.3333, avg_preferred_industry_fit=0.5, zero_gmv_top5=0, off_brand_top5=0, off_preferred_top5=0, missing_anchor_top5=0
- Checks:
  - PASS Top 5 should avoid zero-GMV false positives (0 zero-GMV creators)
  - PASS Top 5 should mostly overlap brand industries (0 off-brand creators)
  - PASS Top 5 should match query-specific preferred industries (0 off-preferred creators)
  - PASS Average query-intent should stay high (0.441)
  - PASS Average anchor-intent should stay meaningful (1.000)
  - PASS Average preferred-industry fit should stay high (0.500)
- Ablation:
  - semantic_only: smart_home_build_eli, power_tools_sam, small_space_living_lee, renter_decor_tips_kay, gaming_phones_rio
  - business_only: apple_insider_cy, small_space_living_lee, gaming_phones_rio, webcam_reviews_sky, streaming_setup_ada
  - hybrid: small_space_living_lee, apple_insider_cy, gaming_phones_rio, webcam_reviews_sky, streaming_setup_ada

### smart_home_34

- Brand: `brand_smart_home`
- Query: "Connected lighting and smart switch creators"
- Purpose: Looks for wiring, lighting, and automation relevance.
- Preferred industries: Phones & Electronics, Tools & Hardware, Home
- Hybrid top 5: small_space_living_lee, electrical_safe_pat, apple_insider_cy, charging_tech_oscar, plumbing_diy_skip
- Metrics: avg_final=0.4791, avg_query_intent=0.2596, avg_anchor_intent=0.27, avg_brand_industry_fit=0.4, avg_preferred_industry_fit=0.4, zero_gmv_top5=0, off_brand_top5=0, off_preferred_top5=0, missing_anchor_top5=2
- Checks:
  - PASS Top 5 should avoid zero-GMV false positives (0 zero-GMV creators)
  - PASS Top 5 should mostly overlap brand industries (0 off-brand creators)
  - PASS Top 5 should match query-specific preferred industries (0 off-preferred creators)
  - FAIL Average query-intent should stay high (0.260)
  - PASS Average anchor-intent should stay meaningful (0.270)
  - PASS Average preferred-industry fit should stay high (0.400)
- Ablation:
  - semantic_only: smart_home_build_eli, lighting_design_tess, electrical_safe_pat, power_tools_sam, network_nerd_evan
  - business_only: small_space_living_lee, electrical_safe_pat, apple_insider_cy, plumbing_diy_skip, gaming_phones_rio
  - hybrid: small_space_living_lee, electrical_safe_pat, apple_insider_cy, charging_tech_oscar, plumbing_diy_skip

### beauty_repeat_purchase

- Brand: `brand_beauty_wellness`
- Query: "Skincare creators who drive repeat purchases"
- Purpose: Core commerce-heavy skincare query.
- Preferred industries: Beauty, Health
- Hybrid top 5: natural_beauty_jade, glow_up_journey_mei, glam_by_destiny, spf_every_day_quinn, mens_grooming_kai
- Metrics: avg_final=0.6514, avg_query_intent=0.5172, avg_anchor_intent=1, avg_brand_industry_fit=0.6, avg_preferred_industry_fit=0.6, zero_gmv_top5=0, off_brand_top5=0, off_preferred_top5=0, missing_anchor_top5=0
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
- Metrics: avg_final=0.6353, avg_query_intent=0.4756, avg_anchor_intent=0.6628, avg_brand_industry_fit=0.6, avg_preferred_industry_fit=0.6, zero_gmv_top5=0, off_brand_top5=0, off_preferred_top5=0, missing_anchor_top5=0
- Checks:
  - PASS Top 5 should avoid zero-GMV false positives (0 zero-GMV creators)
  - PASS Top 5 should mostly overlap brand industries (0 off-brand creators)
  - PASS Top 5 should match query-specific preferred industries (0 off-preferred creators)
  - PASS Average query-intent should stay high (0.476)
  - PASS Average anchor-intent should stay meaningful (0.663)
  - PASS Average preferred-industry fit should stay high (0.600)
- Ablation:
  - semantic_only: skincare_first_anya, glow_up_journey_mei, mens_grooming_kai, drugstore_beauty_hana, natural_beauty_jade
  - business_only: natural_beauty_jade, glow_up_journey_mei, glam_by_destiny, spf_every_day_quinn, mens_grooming_kai
  - hybrid: natural_beauty_jade, glow_up_journey_mei, glam_by_destiny, spf_every_day_quinn, mens_grooming_kai

### beauty_03

- Brand: `brand_beauty_wellness`
- Query: "SPF-first skincare for everyday routines"
- Purpose: Should surface SPF and daily routine creators.
- Preferred industries: Beauty, Health
- Hybrid top 5: natural_beauty_jade, glow_up_journey_mei, glam_by_destiny, spf_every_day_quinn, mens_grooming_kai
- Metrics: avg_final=0.6864, avg_query_intent=0.6763, avg_anchor_intent=0.9017, avg_brand_industry_fit=0.6, avg_preferred_industry_fit=0.6, zero_gmv_top5=0, off_brand_top5=0, off_preferred_top5=0, missing_anchor_top5=0
- Checks:
  - PASS Top 5 should avoid zero-GMV false positives (0 zero-GMV creators)
  - PASS Top 5 should mostly overlap brand industries (0 off-brand creators)
  - PASS Top 5 should match query-specific preferred industries (0 off-preferred creators)
  - PASS Average query-intent should stay high (0.676)
  - PASS Average anchor-intent should stay meaningful (0.902)
  - PASS Average preferred-industry fit should stay high (0.600)
- Ablation:
  - semantic_only: spf_every_day_quinn, skincare_first_anya, glow_up_journey_mei, natural_beauty_jade, mens_grooming_kai
  - business_only: natural_beauty_jade, glow_up_journey_mei, glam_by_destiny, spf_every_day_quinn, run_daily_derek
  - hybrid: natural_beauty_jade, glow_up_journey_mei, glam_by_destiny, spf_every_day_quinn, mens_grooming_kai

### beauty_04

- Brand: `brand_beauty_wellness`
- Query: "Dermatologist-backed skincare routines"
- Purpose: Tests ingredient and derm-style skincare education.
- Preferred industries: Beauty, Health
- Hybrid top 5: natural_beauty_jade, glow_up_journey_mei, glam_by_destiny, spf_every_day_quinn, mens_grooming_kai
- Metrics: avg_final=0.6, avg_query_intent=0.426, avg_anchor_intent=1, avg_brand_industry_fit=0.6, avg_preferred_industry_fit=0.6, zero_gmv_top5=0, off_brand_top5=0, off_preferred_top5=0, missing_anchor_top5=0
- Checks:
  - PASS Top 5 should avoid zero-GMV false positives (0 zero-GMV creators)
  - PASS Top 5 should mostly overlap brand industries (0 off-brand creators)
  - PASS Top 5 should match query-specific preferred industries (0 off-preferred creators)
  - PASS Average query-intent should stay high (0.426)
  - PASS Average anchor-intent should stay meaningful (1.000)
  - PASS Average preferred-industry fit should stay high (0.600)
- Ablation:
  - semantic_only: skincare_first_anya, glow_up_journey_mei, mens_grooming_kai, spf_every_day_quinn, natural_beauty_jade
  - business_only: natural_beauty_jade, glam_by_destiny, glow_up_journey_mei, spf_every_day_quinn, gut_health_guru_sam
  - hybrid: natural_beauty_jade, glow_up_journey_mei, glam_by_destiny, spf_every_day_quinn, mens_grooming_kai

### beauty_05

- Brand: `brand_beauty_wellness`
- Query: "Clean beauty creators with strong commerce"
- Purpose: Commerce-heavy clean beauty case.
- Preferred industries: Beauty, Health
- Hybrid top 5: natural_beauty_jade, plus_size_glam_val, glam_by_destiny, glow_up_journey_mei, run_daily_derek
- Metrics: avg_final=0.689, avg_query_intent=0.4351, avg_anchor_intent=0.6075, avg_brand_industry_fit=0.7, avg_preferred_industry_fit=0.7, zero_gmv_top5=0, off_brand_top5=0, off_preferred_top5=0, missing_anchor_top5=0
- Checks:
  - PASS Top 5 should avoid zero-GMV false positives (0 zero-GMV creators)
  - PASS Top 5 should mostly overlap brand industries (0 off-brand creators)
  - PASS Top 5 should match query-specific preferred industries (0 off-preferred creators)
  - PASS Average query-intent should stay high (0.435)
  - PASS Average anchor-intent should stay meaningful (0.608)
  - PASS Average preferred-industry fit should stay high (0.700)
- Ablation:
  - semantic_only: natural_beauty_jade, drugstore_beauty_hana, holistic_liv_grace, skincare_first_anya, glam_by_destiny
  - business_only: natural_beauty_jade, plus_size_glam_val, run_daily_derek, glow_up_journey_mei, glam_by_destiny
  - hybrid: natural_beauty_jade, plus_size_glam_val, glam_by_destiny, glow_up_journey_mei, run_daily_derek

### beauty_06

- Brand: `brand_beauty_wellness`
- Query: "Sensitive skin skincare recommendations"
- Purpose: Should stay inside beauty and skincare relevance.
- Preferred industries: Beauty, Health
- Hybrid top 5: natural_beauty_jade, glow_up_journey_mei, glam_by_destiny, spf_every_day_quinn, mens_grooming_kai
- Metrics: avg_final=0.6316, avg_query_intent=0.7558, avg_anchor_intent=0.9357, avg_brand_industry_fit=0.6, avg_preferred_industry_fit=0.6, zero_gmv_top5=0, off_brand_top5=0, off_preferred_top5=0, missing_anchor_top5=0
- Checks:
  - PASS Top 5 should avoid zero-GMV false positives (0 zero-GMV creators)
  - PASS Top 5 should mostly overlap brand industries (0 off-brand creators)
  - PASS Top 5 should match query-specific preferred industries (0 off-preferred creators)
  - PASS Average query-intent should stay high (0.756)
  - PASS Average anchor-intent should stay meaningful (0.936)
  - PASS Average preferred-industry fit should stay high (0.600)
- Ablation:
  - semantic_only: skincare_first_anya, glow_up_journey_mei, natural_beauty_jade, spf_every_day_quinn, mens_grooming_kai
  - business_only: natural_beauty_jade, glam_by_destiny, glow_up_journey_mei, spf_every_day_quinn, holistic_liv_grace
  - hybrid: natural_beauty_jade, glow_up_journey_mei, glam_by_destiny, spf_every_day_quinn, mens_grooming_kai

### beauty_07

- Brand: `brand_beauty_wellness`
- Query: "Morning skincare routines for glowing skin"
- Purpose: Daily routine skincare precision query.
- Preferred industries: Beauty, Health
- Hybrid top 5: natural_beauty_jade, glow_up_journey_mei, glam_by_destiny, spf_every_day_quinn, mens_grooming_kai
- Metrics: avg_final=0.676, avg_query_intent=0.6135, avg_anchor_intent=1, avg_brand_industry_fit=0.6, avg_preferred_industry_fit=0.6, zero_gmv_top5=0, off_brand_top5=0, off_preferred_top5=0, missing_anchor_top5=0
- Checks:
  - PASS Top 5 should avoid zero-GMV false positives (0 zero-GMV creators)
  - PASS Top 5 should mostly overlap brand industries (0 off-brand creators)
  - PASS Top 5 should match query-specific preferred industries (0 off-preferred creators)
  - PASS Average query-intent should stay high (0.613)
  - PASS Average anchor-intent should stay meaningful (1.000)
  - PASS Average preferred-industry fit should stay high (0.600)
- Ablation:
  - semantic_only: skincare_first_anya, spf_every_day_quinn, mens_grooming_kai, glam_by_destiny, glow_up_journey_mei
  - business_only: natural_beauty_jade, glow_up_journey_mei, glam_by_destiny, spf_every_day_quinn, run_daily_derek
  - hybrid: natural_beauty_jade, glow_up_journey_mei, glam_by_destiny, spf_every_day_quinn, mens_grooming_kai

### beauty_08

- Brand: `brand_beauty_wellness`
- Query: "Anti-aging skincare for women in their 30s"
- Purpose: Target audience plus anti-aging skincare intent.
- Preferred industries: Beauty, Health
- Hybrid top 5: natural_beauty_jade, glow_up_journey_mei, glam_by_destiny, spf_every_day_quinn, mens_grooming_kai
- Metrics: avg_final=0.6132, avg_query_intent=0.4403, avg_anchor_intent=0.6729, avg_brand_industry_fit=0.6, avg_preferred_industry_fit=0.6, zero_gmv_top5=0, off_brand_top5=0, off_preferred_top5=0, missing_anchor_top5=0
- Checks:
  - PASS Top 5 should avoid zero-GMV false positives (0 zero-GMV creators)
  - PASS Top 5 should mostly overlap brand industries (0 off-brand creators)
  - PASS Top 5 should match query-specific preferred industries (0 off-preferred creators)
  - PASS Average query-intent should stay high (0.440)
  - PASS Average anchor-intent should stay meaningful (0.673)
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
- Hybrid top 5: natural_beauty_jade, glam_by_destiny, glow_up_journey_mei, spf_every_day_quinn, mens_grooming_kai
- Metrics: avg_final=0.606, avg_query_intent=0.5089, avg_anchor_intent=0.6706, avg_brand_industry_fit=0.6, avg_preferred_industry_fit=0.6, zero_gmv_top5=0, off_brand_top5=0, off_preferred_top5=0, missing_anchor_top5=0
- Checks:
  - PASS Top 5 should avoid zero-GMV false positives (0 zero-GMV creators)
  - PASS Top 5 should mostly overlap brand industries (0 off-brand creators)
  - PASS Top 5 should match query-specific preferred industries (0 off-preferred creators)
  - PASS Average query-intent should stay high (0.509)
  - PASS Average anchor-intent should stay meaningful (0.671)
  - PASS Average preferred-industry fit should stay high (0.600)
- Ablation:
  - semantic_only: skincare_first_anya, natural_beauty_jade, spf_every_day_quinn, holistic_liv_grace, glow_up_journey_mei
  - business_only: natural_beauty_jade, glam_by_destiny, glow_up_journey_mei, spf_every_day_quinn, run_daily_derek
  - hybrid: natural_beauty_jade, glam_by_destiny, glow_up_journey_mei, spf_every_day_quinn, mens_grooming_kai

### beauty_10

- Brand: `brand_beauty_wellness`
- Query: "Retinol and anti-aging education that sells"
- Purpose: Education-heavy skincare plus commerce intent.
- Preferred industries: Beauty, Health
- Hybrid top 5: natural_beauty_jade, glow_up_journey_mei, spf_every_day_quinn, mens_grooming_kai, run_daily_derek
- Metrics: avg_final=0.5659, avg_query_intent=0.3942, avg_anchor_intent=0.6, avg_brand_industry_fit=0.6, avg_preferred_industry_fit=0.6, zero_gmv_top5=0, off_brand_top5=0, off_preferred_top5=0, missing_anchor_top5=1
- Checks:
  - PASS Top 5 should avoid zero-GMV false positives (0 zero-GMV creators)
  - PASS Top 5 should mostly overlap brand industries (0 off-brand creators)
  - PASS Top 5 should match query-specific preferred industries (0 off-preferred creators)
  - PASS Average query-intent should stay high (0.394)
  - PASS Average anchor-intent should stay meaningful (0.600)
  - PASS Average preferred-industry fit should stay high (0.600)
- Ablation:
  - semantic_only: spf_every_day_quinn, glow_up_journey_mei, natural_beauty_jade, skincare_first_anya, vintage_glam_rita
  - business_only: natural_beauty_jade, glow_up_journey_mei, spf_every_day_quinn, run_daily_derek, glam_by_destiny
  - hybrid: natural_beauty_jade, glow_up_journey_mei, spf_every_day_quinn, mens_grooming_kai, run_daily_derek

### beauty_11

- Brand: `brand_beauty_wellness`
- Query: "Hyperpigmentation and dark spot skincare creators"
- Purpose: Specific skin concern query.
- Preferred industries: Beauty, Health
- Hybrid top 5: natural_beauty_jade, glow_up_journey_mei, glam_by_destiny, spf_every_day_quinn, mens_grooming_kai
- Metrics: avg_final=0.644, avg_query_intent=0.5607, avg_anchor_intent=1, avg_brand_industry_fit=0.6, avg_preferred_industry_fit=0.6, zero_gmv_top5=0, off_brand_top5=0, off_preferred_top5=0, missing_anchor_top5=0
- Checks:
  - PASS Top 5 should avoid zero-GMV false positives (0 zero-GMV creators)
  - PASS Top 5 should mostly overlap brand industries (0 off-brand creators)
  - PASS Top 5 should match query-specific preferred industries (0 off-preferred creators)
  - PASS Average query-intent should stay high (0.561)
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
- Hybrid top 5: natural_beauty_jade, glam_by_destiny, glow_up_journey_mei, spf_every_day_quinn, mens_grooming_kai
- Metrics: avg_final=0.6324, avg_query_intent=0.7081, avg_anchor_intent=0.9357, avg_brand_industry_fit=0.6, avg_preferred_industry_fit=0.6, zero_gmv_top5=0, off_brand_top5=0, off_preferred_top5=0, missing_anchor_top5=0
- Checks:
  - PASS Top 5 should avoid zero-GMV false positives (0 zero-GMV creators)
  - PASS Top 5 should mostly overlap brand industries (0 off-brand creators)
  - PASS Top 5 should match query-specific preferred industries (0 off-preferred creators)
  - PASS Average query-intent should stay high (0.708)
  - PASS Average anchor-intent should stay meaningful (0.936)
  - PASS Average preferred-industry fit should stay high (0.600)
- Ablation:
  - semantic_only: skincare_first_anya, natural_beauty_jade, glow_up_journey_mei, spf_every_day_quinn, mens_grooming_kai
  - business_only: natural_beauty_jade, glam_by_destiny, glow_up_journey_mei, spf_every_day_quinn, run_daily_derek
  - hybrid: natural_beauty_jade, glam_by_destiny, glow_up_journey_mei, spf_every_day_quinn, mens_grooming_kai

### beauty_13

- Brand: `brand_beauty_wellness`
- Query: "Acne recovery and blemish-safe skincare content"
- Purpose: Specific acne aftercare query.
- Preferred industries: Beauty, Health
- Hybrid top 5: natural_beauty_jade, glam_by_destiny, glow_up_journey_mei, spf_every_day_quinn, mens_grooming_kai
- Metrics: avg_final=0.5771, avg_query_intent=0.2381, avg_anchor_intent=0.5085, avg_brand_industry_fit=0.6, avg_preferred_industry_fit=0.6, zero_gmv_top5=0, off_brand_top5=0, off_preferred_top5=0, missing_anchor_top5=0
- Checks:
  - PASS Top 5 should avoid zero-GMV false positives (0 zero-GMV creators)
  - PASS Top 5 should mostly overlap brand industries (0 off-brand creators)
  - PASS Top 5 should match query-specific preferred industries (0 off-preferred creators)
  - FAIL Average query-intent should stay high (0.238)
  - PASS Average anchor-intent should stay meaningful (0.508)
  - PASS Average preferred-industry fit should stay high (0.600)
- Ablation:
  - semantic_only: skincare_first_anya, natural_beauty_jade, glow_up_journey_mei, holistic_liv_grace, mens_grooming_kai
  - business_only: natural_beauty_jade, glam_by_destiny, glow_up_journey_mei, spf_every_day_quinn, run_daily_derek
  - hybrid: natural_beauty_jade, glam_by_destiny, glow_up_journey_mei, spf_every_day_quinn, mens_grooming_kai

### beauty_14

- Brand: `brand_beauty_wellness`
- Query: "Simple starter skincare routines"
- Purpose: Beginner-friendly skincare query.
- Preferred industries: Beauty, Health
- Hybrid top 5: natural_beauty_jade, glow_up_journey_mei, glam_by_destiny, mens_grooming_kai, spf_every_day_quinn
- Metrics: avg_final=0.6451, avg_query_intent=0.4779, avg_anchor_intent=1, avg_brand_industry_fit=0.6, avg_preferred_industry_fit=0.6, zero_gmv_top5=0, off_brand_top5=0, off_preferred_top5=0, missing_anchor_top5=0
- Checks:
  - PASS Top 5 should avoid zero-GMV false positives (0 zero-GMV creators)
  - PASS Top 5 should mostly overlap brand industries (0 off-brand creators)
  - PASS Top 5 should match query-specific preferred industries (0 off-preferred creators)
  - PASS Average query-intent should stay high (0.478)
  - PASS Average anchor-intent should stay meaningful (1.000)
  - PASS Average preferred-industry fit should stay high (0.600)
- Ablation:
  - semantic_only: mens_grooming_kai, skincare_first_anya, spf_every_day_quinn, glow_up_journey_mei, natural_beauty_jade
  - business_only: natural_beauty_jade, glow_up_journey_mei, glam_by_destiny, spf_every_day_quinn, run_daily_derek
  - hybrid: natural_beauty_jade, glow_up_journey_mei, glam_by_destiny, mens_grooming_kai, spf_every_day_quinn

### beauty_15

- Brand: `brand_beauty_wellness`
- Query: "Product review creators for skincare launches"
- Purpose: Launch-style brand query looking for review-driven conversion.
- Preferred industries: Beauty, Health
- Hybrid top 5: natural_beauty_jade, glam_by_destiny, glow_up_journey_mei, spf_every_day_quinn, mens_grooming_kai
- Metrics: avg_final=0.6331, avg_query_intent=0.433, avg_anchor_intent=1, avg_brand_industry_fit=0.6, avg_preferred_industry_fit=0.6, zero_gmv_top5=0, off_brand_top5=0, off_preferred_top5=0, missing_anchor_top5=0
- Checks:
  - PASS Top 5 should avoid zero-GMV false positives (0 zero-GMV creators)
  - PASS Top 5 should mostly overlap brand industries (0 off-brand creators)
  - PASS Top 5 should match query-specific preferred industries (0 off-preferred creators)
  - PASS Average query-intent should stay high (0.433)
  - PASS Average anchor-intent should stay meaningful (1.000)
  - PASS Average preferred-industry fit should stay high (0.600)
- Ablation:
  - semantic_only: skincare_first_anya, glam_by_destiny, natural_beauty_jade, glow_up_journey_mei, spf_every_day_quinn
  - business_only: natural_beauty_jade, glow_up_journey_mei, glam_by_destiny, spf_every_day_quinn, lash_lab_serena
  - hybrid: natural_beauty_jade, glam_by_destiny, glow_up_journey_mei, spf_every_day_quinn, mens_grooming_kai

### beauty_16

- Brand: `brand_beauty_wellness`
- Query: "Budget beauty finds with strong buying intent"
- Purpose: General beauty commerce query.
- Preferred industries: Beauty
- Hybrid top 5: natural_beauty_jade, glow_up_journey_mei, plus_size_glam_val, glam_by_destiny, vintage_glam_rita
- Metrics: avg_final=0.6593, avg_query_intent=0.3933, avg_anchor_intent=1, avg_brand_industry_fit=0.6, avg_preferred_industry_fit=1, zero_gmv_top5=0, off_brand_top5=0, off_preferred_top5=0, missing_anchor_top5=0
- Checks:
  - PASS Top 5 should avoid zero-GMV false positives (0 zero-GMV creators)
  - PASS Top 5 should mostly overlap brand industries (0 off-brand creators)
  - PASS Top 5 should match query-specific preferred industries (0 off-preferred creators)
  - PASS Average query-intent should stay high (0.393)
  - PASS Average anchor-intent should stay meaningful (1.000)
  - PASS Average preferred-industry fit should stay high (1.000)
- Ablation:
  - semantic_only: drugstore_beauty_hana, ootd_with_amber, glow_up_journey_mei, natural_beauty_jade, glam_by_destiny
  - business_only: natural_beauty_jade, plus_size_glam_val, glow_up_journey_mei, glam_by_destiny, vintage_glam_rita
  - hybrid: natural_beauty_jade, glow_up_journey_mei, plus_size_glam_val, glam_by_destiny, vintage_glam_rita

### beauty_17

- Brand: `brand_beauty_wellness`
- Query: "Drugstore skincare that actually converts"
- Purpose: Drugstore skincare and commerce balance.
- Preferred industries: Beauty, Health
- Hybrid top 5: natural_beauty_jade, glow_up_journey_mei, glam_by_destiny, spf_every_day_quinn, mens_grooming_kai
- Metrics: avg_final=0.6549, avg_query_intent=0.5524, avg_anchor_intent=1, avg_brand_industry_fit=0.6, avg_preferred_industry_fit=0.6, zero_gmv_top5=0, off_brand_top5=0, off_preferred_top5=0, missing_anchor_top5=0
- Checks:
  - PASS Top 5 should avoid zero-GMV false positives (0 zero-GMV creators)
  - PASS Top 5 should mostly overlap brand industries (0 off-brand creators)
  - PASS Top 5 should match query-specific preferred industries (0 off-preferred creators)
  - PASS Average query-intent should stay high (0.552)
  - PASS Average anchor-intent should stay meaningful (1.000)
  - PASS Average preferred-industry fit should stay high (0.600)
- Ablation:
  - semantic_only: glow_up_journey_mei, drugstore_beauty_hana, skincare_first_anya, natural_beauty_jade, spf_every_day_quinn
  - business_only: natural_beauty_jade, glow_up_journey_mei, glam_by_destiny, plus_size_glam_val, spf_every_day_quinn
  - hybrid: natural_beauty_jade, glow_up_journey_mei, glam_by_destiny, spf_every_day_quinn, mens_grooming_kai

### beauty_18

- Brand: `brand_beauty_wellness`
- Query: "Everyday makeup creators with strong conversion"
- Purpose: Makeup relevance with commerce focus.
- Preferred industries: Beauty
- Hybrid top 5: natural_beauty_jade, glam_by_destiny, glow_up_journey_mei, plus_size_glam_val, run_daily_derek
- Metrics: avg_final=0.6916, avg_query_intent=0.4568, avg_anchor_intent=1, avg_brand_industry_fit=0.7, avg_preferred_industry_fit=1, zero_gmv_top5=0, off_brand_top5=0, off_preferred_top5=0, missing_anchor_top5=0
- Checks:
  - PASS Top 5 should avoid zero-GMV false positives (0 zero-GMV creators)
  - PASS Top 5 should mostly overlap brand industries (0 off-brand creators)
  - PASS Top 5 should match query-specific preferred industries (0 off-preferred creators)
  - PASS Average query-intent should stay high (0.457)
  - PASS Average anchor-intent should stay meaningful (1.000)
  - PASS Average preferred-industry fit should stay high (1.000)
- Ablation:
  - semantic_only: drugstore_beauty_hana, glam_by_destiny, natural_beauty_jade, contour_queen_paris, glow_up_journey_mei
  - business_only: natural_beauty_jade, plus_size_glam_val, run_daily_derek, glam_by_destiny, glow_up_journey_mei
  - hybrid: natural_beauty_jade, glam_by_destiny, glow_up_journey_mei, plus_size_glam_val, run_daily_derek

### beauty_19

- Brand: `brand_beauty_wellness`
- Query: "Beauty creators for natural everyday looks"
- Purpose: Should favor makeup and beauty-first creators.
- Preferred industries: Beauty
- Hybrid top 5: natural_beauty_jade, glam_by_destiny, plus_size_glam_val, glow_up_journey_mei, run_daily_derek
- Metrics: avg_final=0.7131, avg_query_intent=0.4376, avg_anchor_intent=1, avg_brand_industry_fit=0.7, avg_preferred_industry_fit=1, zero_gmv_top5=0, off_brand_top5=0, off_preferred_top5=0, missing_anchor_top5=0
- Checks:
  - PASS Top 5 should avoid zero-GMV false positives (0 zero-GMV creators)
  - PASS Top 5 should mostly overlap brand industries (0 off-brand creators)
  - PASS Top 5 should match query-specific preferred industries (0 off-preferred creators)
  - PASS Average query-intent should stay high (0.438)
  - PASS Average anchor-intent should stay meaningful (1.000)
  - PASS Average preferred-industry fit should stay high (1.000)
- Ablation:
  - semantic_only: glam_by_destiny, drugstore_beauty_hana, natural_beauty_jade, contour_queen_paris, vintage_glam_rita
  - business_only: natural_beauty_jade, plus_size_glam_val, run_daily_derek, glam_by_destiny, glow_up_journey_mei
  - hybrid: natural_beauty_jade, glam_by_destiny, plus_size_glam_val, glow_up_journey_mei, run_daily_derek

### beauty_20

- Brand: `brand_beauty_wellness`
- Query: "Beauty creators focused on ingredients education"
- Purpose: Tests ingredient-aware beauty education without losing category fit.
- Preferred industries: Beauty, Health
- Hybrid top 5: natural_beauty_jade, glam_by_destiny, holistic_liv_grace, run_daily_derek, glow_up_journey_mei
- Metrics: avg_final=0.7301, avg_query_intent=0.72, avg_anchor_intent=1, avg_brand_industry_fit=0.7, avg_preferred_industry_fit=0.7, zero_gmv_top5=0, off_brand_top5=0, off_preferred_top5=0, missing_anchor_top5=0
- Checks:
  - PASS Top 5 should avoid zero-GMV false positives (0 zero-GMV creators)
  - PASS Top 5 should mostly overlap brand industries (0 off-brand creators)
  - PASS Top 5 should match query-specific preferred industries (0 off-preferred creators)
  - PASS Average query-intent should stay high (0.720)
  - PASS Average anchor-intent should stay meaningful (1.000)
  - PASS Average preferred-industry fit should stay high (0.700)
- Ablation:
  - semantic_only: natural_beauty_jade, skincare_first_anya, spf_every_day_quinn, contour_queen_paris, glam_by_destiny
  - business_only: natural_beauty_jade, run_daily_derek, holistic_liv_grace, glam_by_destiny, glow_up_journey_mei
  - hybrid: natural_beauty_jade, glam_by_destiny, holistic_liv_grace, run_daily_derek, glow_up_journey_mei

### beauty_21

- Brand: `brand_beauty_wellness`
- Query: "Non-toxic skincare and beauty routines"
- Purpose: Clean, non-toxic beauty and skincare case.
- Preferred industries: Beauty, Health
- Hybrid top 5: natural_beauty_jade, glow_up_journey_mei, glam_by_destiny, spf_every_day_quinn, mens_grooming_kai
- Metrics: avg_final=0.6825, avg_query_intent=0.6519, avg_anchor_intent=1, avg_brand_industry_fit=0.6, avg_preferred_industry_fit=0.6, zero_gmv_top5=0, off_brand_top5=0, off_preferred_top5=0, missing_anchor_top5=0
- Checks:
  - PASS Top 5 should avoid zero-GMV false positives (0 zero-GMV creators)
  - PASS Top 5 should mostly overlap brand industries (0 off-brand creators)
  - PASS Top 5 should match query-specific preferred industries (0 off-preferred creators)
  - PASS Average query-intent should stay high (0.652)
  - PASS Average anchor-intent should stay meaningful (1.000)
  - PASS Average preferred-industry fit should stay high (0.600)
- Ablation:
  - semantic_only: natural_beauty_jade, skincare_first_anya, holistic_liv_grace, spf_every_day_quinn, glow_up_journey_mei
  - business_only: natural_beauty_jade, glow_up_journey_mei, glam_by_destiny, run_daily_derek, spf_every_day_quinn
  - hybrid: natural_beauty_jade, glow_up_journey_mei, glam_by_destiny, spf_every_day_quinn, mens_grooming_kai

### beauty_22

- Brand: `brand_beauty_wellness`
- Query: "Wellness and beauty routines for self-care"
- Purpose: Allows some health crossover but should remain beauty-led.
- Preferred industries: Beauty, Health
- Hybrid top 5: natural_beauty_jade, holistic_liv_grace, run_daily_derek, glam_by_destiny, glow_up_journey_mei
- Metrics: avg_final=0.6735, avg_query_intent=0.4533, avg_anchor_intent=1, avg_brand_industry_fit=0.7, avg_preferred_industry_fit=0.7, zero_gmv_top5=0, off_brand_top5=0, off_preferred_top5=0, missing_anchor_top5=0
- Checks:
  - PASS Top 5 should avoid zero-GMV false positives (0 zero-GMV creators)
  - PASS Top 5 should mostly overlap brand industries (0 off-brand creators)
  - PASS Top 5 should match query-specific preferred industries (0 off-preferred creators)
  - PASS Average query-intent should stay high (0.453)
  - PASS Average anchor-intent should stay meaningful (1.000)
  - PASS Average preferred-industry fit should stay high (0.700)
- Ablation:
  - semantic_only: holistic_liv_grace, skincare_first_anya, natural_beauty_jade, mens_grooming_kai, glow_up_journey_mei
  - business_only: natural_beauty_jade, holistic_liv_grace, run_daily_derek, glam_by_destiny, glow_up_journey_mei
  - hybrid: natural_beauty_jade, holistic_liv_grace, run_daily_derek, glam_by_destiny, glow_up_journey_mei

### beauty_23

- Brand: `brand_beauty_wellness`
- Query: "Beauty creators with strong engagement and commerce"
- Purpose: High-level beauty commerce query likely to appear in judging.
- Preferred industries: Beauty
- Hybrid top 5: natural_beauty_jade, plus_size_glam_val, glam_by_destiny, glow_up_journey_mei, run_daily_derek
- Metrics: avg_final=0.6731, avg_query_intent=0.3971, avg_anchor_intent=1, avg_brand_industry_fit=0.7, avg_preferred_industry_fit=1, zero_gmv_top5=0, off_brand_top5=0, off_preferred_top5=0, missing_anchor_top5=0
- Checks:
  - PASS Top 5 should avoid zero-GMV false positives (0 zero-GMV creators)
  - PASS Top 5 should mostly overlap brand industries (0 off-brand creators)
  - PASS Top 5 should match query-specific preferred industries (0 off-preferred creators)
  - PASS Average query-intent should stay high (0.397)
  - PASS Average anchor-intent should stay meaningful (1.000)
  - PASS Average preferred-industry fit should stay high (1.000)
- Ablation:
  - semantic_only: natural_beauty_jade, glam_by_destiny, drugstore_beauty_hana, contour_queen_paris, skincare_first_anya
  - business_only: natural_beauty_jade, plus_size_glam_val, run_daily_derek, glow_up_journey_mei, glam_by_destiny
  - hybrid: natural_beauty_jade, plus_size_glam_val, glam_by_destiny, glow_up_journey_mei, run_daily_derek

### beauty_24

- Brand: `brand_beauty_wellness`
- Query: "Drugstore dupes and affordable beauty finds"
- Purpose: Tests budget beauty and dupes vocabulary.
- Preferred industries: Beauty
- Hybrid top 5: natural_beauty_jade, glow_up_journey_mei, glam_by_destiny, plus_size_glam_val, vintage_glam_rita
- Metrics: avg_final=0.7169, avg_query_intent=0.729, avg_anchor_intent=1, avg_brand_industry_fit=0.6, avg_preferred_industry_fit=1, zero_gmv_top5=0, off_brand_top5=0, off_preferred_top5=0, missing_anchor_top5=0
- Checks:
  - PASS Top 5 should avoid zero-GMV false positives (0 zero-GMV creators)
  - PASS Top 5 should mostly overlap brand industries (0 off-brand creators)
  - PASS Top 5 should match query-specific preferred industries (0 off-preferred creators)
  - PASS Average query-intent should stay high (0.729)
  - PASS Average anchor-intent should stay meaningful (1.000)
  - PASS Average preferred-industry fit should stay high (1.000)
- Ablation:
  - semantic_only: drugstore_beauty_hana, glow_up_journey_mei, glam_by_destiny, natural_beauty_jade, skincare_first_anya
  - business_only: natural_beauty_jade, plus_size_glam_val, glow_up_journey_mei, glam_by_destiny, home_gym_builds
  - hybrid: natural_beauty_jade, glow_up_journey_mei, glam_by_destiny, plus_size_glam_val, vintage_glam_rita

### beauty_25

- Brand: `brand_beauty_wellness`
- Query: "Clean sunscreen and SPF education"
- Purpose: SPF education and skincare crossover.
- Preferred industries: Beauty, Health
- Hybrid top 5: natural_beauty_jade, glow_up_journey_mei, spf_every_day_quinn, mens_grooming_kai, run_daily_derek
- Metrics: avg_final=0.6011, avg_query_intent=0.567, avg_anchor_intent=0.6143, avg_brand_industry_fit=0.6, avg_preferred_industry_fit=0.6, zero_gmv_top5=0, off_brand_top5=0, off_preferred_top5=0, missing_anchor_top5=1
- Checks:
  - PASS Top 5 should avoid zero-GMV false positives (0 zero-GMV creators)
  - PASS Top 5 should mostly overlap brand industries (0 off-brand creators)
  - PASS Top 5 should match query-specific preferred industries (0 off-preferred creators)
  - PASS Average query-intent should stay high (0.567)
  - PASS Average anchor-intent should stay meaningful (0.614)
  - PASS Average preferred-industry fit should stay high (0.600)
- Ablation:
  - semantic_only: spf_every_day_quinn, natural_beauty_jade, skincare_first_anya, glow_up_journey_mei, holistic_liv_grace
  - business_only: natural_beauty_jade, glow_up_journey_mei, spf_every_day_quinn, run_daily_derek, mens_grooming_kai
  - hybrid: natural_beauty_jade, glow_up_journey_mei, spf_every_day_quinn, mens_grooming_kai, run_daily_derek

### beauty_26

- Brand: `brand_beauty_wellness`
- Query: "Fragrance and beauty creators with repeat purchase intent"
- Purpose: Beauty plus fragrance repeat-purchase behavior.
- Preferred industries: Beauty
- Hybrid top 5: natural_beauty_jade, plus_size_glam_val, glow_up_journey_mei, glam_by_destiny, run_daily_derek
- Metrics: avg_final=0.6968, avg_query_intent=0.6585, avg_anchor_intent=1, avg_brand_industry_fit=0.7, avg_preferred_industry_fit=1, zero_gmv_top5=0, off_brand_top5=0, off_preferred_top5=0, missing_anchor_top5=0
- Checks:
  - PASS Top 5 should avoid zero-GMV false positives (0 zero-GMV creators)
  - PASS Top 5 should mostly overlap brand industries (0 off-brand creators)
  - PASS Top 5 should match query-specific preferred industries (0 off-preferred creators)
  - PASS Average query-intent should stay high (0.659)
  - PASS Average anchor-intent should stay meaningful (1.000)
  - PASS Average preferred-industry fit should stay high (1.000)
- Ablation:
  - semantic_only: fragrance_notes_leo, candle_and_scent_ava, drugstore_beauty_hana, natural_beauty_jade, skincare_first_anya
  - business_only: natural_beauty_jade, plus_size_glam_val, run_daily_derek, glow_up_journey_mei, glam_by_destiny
  - hybrid: natural_beauty_jade, plus_size_glam_val, glow_up_journey_mei, glam_by_destiny, run_daily_derek

### beauty_27

- Brand: `brand_beauty_wellness`
- Query: "Minimal skincare routines for busy women"
- Purpose: Lifestyle framing around beauty relevance.
- Preferred industries: Beauty, Health
- Hybrid top 5: natural_beauty_jade, glow_up_journey_mei, glam_by_destiny, spf_every_day_quinn, mens_grooming_kai
- Metrics: avg_final=0.6596, avg_query_intent=0.5371, avg_anchor_intent=0.8182, avg_brand_industry_fit=0.6, avg_preferred_industry_fit=0.6, zero_gmv_top5=0, off_brand_top5=0, off_preferred_top5=0, missing_anchor_top5=0
- Checks:
  - PASS Top 5 should avoid zero-GMV false positives (0 zero-GMV creators)
  - PASS Top 5 should mostly overlap brand industries (0 off-brand creators)
  - PASS Top 5 should match query-specific preferred industries (0 off-preferred creators)
  - PASS Average query-intent should stay high (0.537)
  - PASS Average anchor-intent should stay meaningful (0.818)
  - PASS Average preferred-industry fit should stay high (0.600)
- Ablation:
  - semantic_only: mens_grooming_kai, spf_every_day_quinn, skincare_first_anya, natural_beauty_jade, glow_up_journey_mei
  - business_only: natural_beauty_jade, glow_up_journey_mei, glam_by_destiny, spf_every_day_quinn, run_daily_derek
  - hybrid: natural_beauty_jade, glow_up_journey_mei, glam_by_destiny, spf_every_day_quinn, mens_grooming_kai

### beauty_28

- Brand: `brand_beauty_wellness`
- Query: "Skincare transformation creators with before-and-afters"
- Purpose: Transformation storytelling plus skincare relevance.
- Preferred industries: Beauty, Health
- Hybrid top 5: glow_up_journey_mei, natural_beauty_jade, glam_by_destiny, spf_every_day_quinn, mens_grooming_kai
- Metrics: avg_final=0.6548, avg_query_intent=0.433, avg_anchor_intent=1, avg_brand_industry_fit=0.6, avg_preferred_industry_fit=0.6, zero_gmv_top5=0, off_brand_top5=0, off_preferred_top5=0, missing_anchor_top5=0
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
- Hybrid top 5: natural_beauty_jade, glow_up_journey_mei, glam_by_destiny, spf_every_day_quinn, mens_grooming_kai
- Metrics: avg_final=0.6865, avg_query_intent=0.6018, avg_anchor_intent=0.7494, avg_brand_industry_fit=0.6, avg_preferred_industry_fit=0.6, zero_gmv_top5=0, off_brand_top5=0, off_preferred_top5=0, missing_anchor_top5=0
- Checks:
  - PASS Top 5 should avoid zero-GMV false positives (0 zero-GMV creators)
  - PASS Top 5 should mostly overlap brand industries (0 off-brand creators)
  - PASS Top 5 should match query-specific preferred industries (0 off-preferred creators)
  - PASS Average query-intent should stay high (0.602)
  - PASS Average anchor-intent should stay meaningful (0.749)
  - PASS Average preferred-industry fit should stay high (0.600)
- Ablation:
  - semantic_only: natural_beauty_jade, holistic_liv_grace, skincare_first_anya, spf_every_day_quinn, glow_up_journey_mei
  - business_only: natural_beauty_jade, glow_up_journey_mei, glam_by_destiny, run_daily_derek, spf_every_day_quinn
  - hybrid: natural_beauty_jade, glow_up_journey_mei, glam_by_destiny, spf_every_day_quinn, mens_grooming_kai

### beauty_30

- Brand: `brand_beauty_wellness`
- Query: "Mens grooming and skincare crossover creators"
- Purpose: Beauty query with grooming crossover still inside category.
- Preferred industries: Beauty
- Hybrid top 5: natural_beauty_jade, glow_up_journey_mei, glam_by_destiny, mens_grooming_kai, spf_every_day_quinn
- Metrics: avg_final=0.6238, avg_query_intent=0.3918, avg_anchor_intent=1, avg_brand_industry_fit=0.6, avg_preferred_industry_fit=1, zero_gmv_top5=0, off_brand_top5=0, off_preferred_top5=0, missing_anchor_top5=0
- Checks:
  - PASS Top 5 should avoid zero-GMV false positives (0 zero-GMV creators)
  - PASS Top 5 should mostly overlap brand industries (0 off-brand creators)
  - PASS Top 5 should match query-specific preferred industries (0 off-preferred creators)
  - PASS Average query-intent should stay high (0.392)
  - PASS Average anchor-intent should stay meaningful (1.000)
  - PASS Average preferred-industry fit should stay high (1.000)
- Ablation:
  - semantic_only: mens_grooming_kai, glow_up_journey_mei, skincare_first_anya, natural_beauty_jade, dog_grooming_den
  - business_only: natural_beauty_jade, glow_up_journey_mei, glam_by_destiny, spf_every_day_quinn, run_daily_derek
  - hybrid: natural_beauty_jade, glow_up_journey_mei, glam_by_destiny, mens_grooming_kai, spf_every_day_quinn

### beauty_31

- Brand: `brand_beauty_wellness`
- Query: "Beauty creators for budget-friendly product swaps"
- Purpose: Budget substitutions without losing beauty intent.
- Preferred industries: Beauty
- Hybrid top 5: natural_beauty_jade, glow_up_journey_mei, glam_by_destiny, vintage_glam_rita, lash_lab_serena
- Metrics: avg_final=0.6685, avg_query_intent=0.3961, avg_anchor_intent=1, avg_brand_industry_fit=0.7, avg_preferred_industry_fit=1, zero_gmv_top5=0, off_brand_top5=0, off_preferred_top5=0, missing_anchor_top5=0
- Checks:
  - PASS Top 5 should avoid zero-GMV false positives (0 zero-GMV creators)
  - PASS Top 5 should mostly overlap brand industries (0 off-brand creators)
  - PASS Top 5 should match query-specific preferred industries (0 off-preferred creators)
  - PASS Average query-intent should stay high (0.396)
  - PASS Average anchor-intent should stay meaningful (1.000)
  - PASS Average preferred-industry fit should stay high (1.000)
- Ablation:
  - semantic_only: drugstore_beauty_hana, glow_up_journey_mei, natural_beauty_jade, glam_by_destiny, ootd_with_amber
  - business_only: natural_beauty_jade, glow_up_journey_mei, glam_by_destiny, vintage_glam_rita, lash_lab_serena
  - hybrid: natural_beauty_jade, glow_up_journey_mei, glam_by_destiny, vintage_glam_rita, lash_lab_serena

### beauty_32

- Brand: `brand_beauty_wellness`
- Query: "Glow-up journey creators with strong commerce"
- Purpose: Transformation and product-led beauty query.
- Preferred industries: Beauty
- Hybrid top 5: natural_beauty_jade, glow_up_journey_mei, run_daily_derek, spf_every_day_quinn, mens_grooming_kai
- Metrics: avg_final=0.6095, avg_query_intent=0.3837, avg_anchor_intent=1, avg_brand_industry_fit=0.6, avg_preferred_industry_fit=1, zero_gmv_top5=0, off_brand_top5=0, off_preferred_top5=0, missing_anchor_top5=0
- Checks:
  - PASS Top 5 should avoid zero-GMV false positives (0 zero-GMV creators)
  - PASS Top 5 should mostly overlap brand industries (0 off-brand creators)
  - PASS Top 5 should match query-specific preferred industries (0 off-preferred creators)
  - PASS Average query-intent should stay high (0.384)
  - PASS Average anchor-intent should stay meaningful (1.000)
  - PASS Average preferred-industry fit should stay high (1.000)
- Ablation:
  - semantic_only: skincare_first_anya, glam_by_destiny, glow_up_journey_mei, natural_beauty_jade, drugstore_beauty_hana
  - business_only: natural_beauty_jade, run_daily_derek, glow_up_journey_mei, spf_every_day_quinn, plus_size_glam_val
  - hybrid: natural_beauty_jade, glow_up_journey_mei, run_daily_derek, spf_every_day_quinn, mens_grooming_kai

### beauty_33

- Brand: `brand_beauty_wellness`
- Query: "Affordable skincare creators for college-age women"
- Purpose: Beauty target-audience query that should stay price-aware.
- Preferred industries: Beauty, Health
- Hybrid top 5: natural_beauty_jade, glow_up_journey_mei, glam_by_destiny, spf_every_day_quinn, mens_grooming_kai
- Metrics: avg_final=0.6311, avg_query_intent=0.43, avg_anchor_intent=1, avg_brand_industry_fit=0.6, avg_preferred_industry_fit=0.6, zero_gmv_top5=0, off_brand_top5=0, off_preferred_top5=0, missing_anchor_top5=0
- Checks:
  - PASS Top 5 should avoid zero-GMV false positives (0 zero-GMV creators)
  - PASS Top 5 should mostly overlap brand industries (0 off-brand creators)
  - PASS Top 5 should match query-specific preferred industries (0 off-preferred creators)
  - PASS Average query-intent should stay high (0.430)
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
- Hybrid top 5: fishing_tales_bob, climbing_wall_finn, ski_season_vera, mountain_biker_ty, yoga_outdoors_ann
- Metrics: avg_final=0.5557, avg_query_intent=0.6115, avg_anchor_intent=0.9017, avg_brand_industry_fit=0.5, avg_preferred_industry_fit=1, zero_gmv_top5=0, off_brand_top5=0, off_preferred_top5=0, missing_anchor_top5=0
- Checks:
  - PASS Top 5 should avoid zero-GMV false positives (0 zero-GMV creators)
  - PASS Top 5 should mostly overlap brand industries (0 off-brand creators)
  - PASS Top 5 should match query-specific preferred industries (0 off-preferred creators)
  - PASS Average query-intent should stay high (0.611)
  - PASS Average anchor-intent should stay meaningful (0.902)
  - PASS Average preferred-industry fit should stay high (1.000)
- Ablation:
  - semantic_only: gaming_phones_rio, hiker_adventures_zach, athletic_fit_cole, workwear_rugged_colt, outdoor_survival_rex
  - business_only: fishing_tales_bob, climbing_wall_finn, ski_season_vera, yoga_outdoors_ann, mountain_biker_ty
  - hybrid: fishing_tales_bob, climbing_wall_finn, ski_season_vera, mountain_biker_ty, yoga_outdoors_ann

### outdoor_hiking_tech

- Brand: `brand_outdoor_adventure`
- Query: "Outdoor phone gear for hiking and trail content"
- Purpose: Outdoor and electronics crossover query.
- Preferred industries: Sports & Outdoors, Phones & Electronics
- Hybrid top 5: home_gym_builds, gaming_phones_rio, marathon_pac_kim, fishing_tales_bob, webcam_reviews_sky
- Metrics: avg_final=0.6699, avg_query_intent=0.6135, avg_anchor_intent=0.644, avg_brand_industry_fit=0.5, avg_preferred_industry_fit=0.5, zero_gmv_top5=0, off_brand_top5=0, off_preferred_top5=0, missing_anchor_top5=0
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
- Metrics: avg_final=0.6632, avg_query_intent=0.6304, avg_anchor_intent=1, avg_brand_industry_fit=0.5, avg_preferred_industry_fit=1, zero_gmv_top5=0, off_brand_top5=0, off_preferred_top5=0, missing_anchor_top5=0
- Checks:
  - PASS Top 5 should avoid zero-GMV false positives (0 zero-GMV creators)
  - PASS Top 5 should mostly overlap brand industries (0 off-brand creators)
  - PASS Top 5 should match query-specific preferred industries (0 off-preferred creators)
  - PASS Average query-intent should stay high (0.630)
  - PASS Average anchor-intent should stay meaningful (1.000)
  - PASS Average preferred-industry fit should stay high (1.000)
- Ablation:
  - semantic_only: outdoor_survival_rex, hiker_adventures_zach, mountain_biker_ty, ski_season_vera, workwear_rugged_colt
  - business_only: home_gym_builds, marathon_pac_kim, fishing_tales_bob, climbing_wall_finn, ski_season_vera
  - hybrid: home_gym_builds, marathon_pac_kim, fishing_tales_bob, climbing_wall_finn, ski_season_vera

### outdoor_04

- Brand: `brand_outdoor_adventure`
- Query: "Camping gear reviews with strong conversions"
- Purpose: Gear review query with explicit commerce intent.
- Preferred industries: Sports & Outdoors
- Hybrid top 5: home_gym_builds, marathon_pac_kim, fishing_tales_bob, climbing_wall_finn, ski_season_vera
- Metrics: avg_final=0.6792, avg_query_intent=0.8478, avg_anchor_intent=1, avg_brand_industry_fit=0.5, avg_preferred_industry_fit=1, zero_gmv_top5=0, off_brand_top5=0, off_preferred_top5=0, missing_anchor_top5=0
- Checks:
  - PASS Top 5 should avoid zero-GMV false positives (0 zero-GMV creators)
  - PASS Top 5 should mostly overlap brand industries (0 off-brand creators)
  - PASS Top 5 should match query-specific preferred industries (0 off-preferred creators)
  - PASS Average query-intent should stay high (0.848)
  - PASS Average anchor-intent should stay meaningful (1.000)
  - PASS Average preferred-industry fit should stay high (1.000)
- Ablation:
  - semantic_only: gaming_phones_rio, hiker_adventures_zach, wearable_tech_zoe, phone_reviewer_kai, baby_gear_reviews_amy
  - business_only: home_gym_builds, marathon_pac_kim, fishing_tales_bob, climbing_wall_finn, biohack_labs_rex
  - hybrid: home_gym_builds, marathon_pac_kim, fishing_tales_bob, climbing_wall_finn, ski_season_vera

### outdoor_05

- Brand: `brand_outdoor_adventure`
- Query: "Trail running creators who sell gear"
- Purpose: Should balance performance creators and true outdoor gear fit.
- Preferred industries: Sports & Outdoors, Health
- Hybrid top 5: home_gym_builds, marathon_pac_kim, fishing_tales_bob, climbing_wall_finn, ski_season_vera
- Metrics: avg_final=0.6704, avg_query_intent=0.6703, avg_anchor_intent=1, avg_brand_industry_fit=0.5, avg_preferred_industry_fit=0.8, zero_gmv_top5=0, off_brand_top5=0, off_preferred_top5=0, missing_anchor_top5=0
- Checks:
  - PASS Top 5 should avoid zero-GMV false positives (0 zero-GMV creators)
  - PASS Top 5 should mostly overlap brand industries (0 off-brand creators)
  - PASS Top 5 should match query-specific preferred industries (0 off-preferred creators)
  - PASS Average query-intent should stay high (0.670)
  - PASS Average anchor-intent should stay meaningful (1.000)
  - PASS Average preferred-industry fit should stay high (0.800)
- Ablation:
  - semantic_only: mountain_biker_ty, marathon_pac_kim, hiker_adventures_zach, run_daily_derek, gaming_phones_rio
  - business_only: home_gym_builds, marathon_pac_kim, fishing_tales_bob, climbing_wall_finn, ski_season_vera
  - hybrid: home_gym_builds, marathon_pac_kim, fishing_tales_bob, climbing_wall_finn, ski_season_vera

### outdoor_06

- Brand: `brand_outdoor_adventure`
- Query: "Fishing creators with strong buying intent"
- Purpose: Direct outdoor commerce query likely to align with fishing creators.
- Preferred industries: Sports & Outdoors, Health
- Hybrid top 5: home_gym_builds, fishing_tales_bob, climbing_wall_finn, yoga_outdoors_ann, ski_season_vera
- Metrics: avg_final=0.6084, avg_query_intent=0.5172, avg_anchor_intent=1, avg_brand_industry_fit=0.5, avg_preferred_industry_fit=0.8, zero_gmv_top5=0, off_brand_top5=0, off_preferred_top5=0, missing_anchor_top5=0
- Checks:
  - PASS Top 5 should avoid zero-GMV false positives (0 zero-GMV creators)
  - PASS Top 5 should mostly overlap brand industries (0 off-brand creators)
  - PASS Top 5 should match query-specific preferred industries (0 off-preferred creators)
  - PASS Average query-intent should stay high (0.517)
  - PASS Average anchor-intent should stay meaningful (1.000)
  - PASS Average preferred-industry fit should stay high (0.800)
- Ablation:
  - semantic_only: fishing_tales_bob, kayak_adventures_lu, gaming_phones_rio, outdoor_survival_rex, kite_flyer_grace
  - business_only: home_gym_builds, fishing_tales_bob, climbing_wall_finn, paddleboard_pro_dee, yoga_outdoors_ann
  - hybrid: home_gym_builds, fishing_tales_bob, climbing_wall_finn, yoga_outdoors_ann, ski_season_vera

### outdoor_07

- Brand: `brand_outdoor_adventure`
- Query: "Climbing gear reviews and technique creators"
- Purpose: Climbing-specific outdoor case.
- Preferred industries: Sports & Outdoors
- Hybrid top 5: home_gym_builds, marathon_pac_kim, climbing_wall_finn, fishing_tales_bob, ski_season_vera
- Metrics: avg_final=0.7188, avg_query_intent=0.781, avg_anchor_intent=1, avg_brand_industry_fit=0.5, avg_preferred_industry_fit=1, zero_gmv_top5=0, off_brand_top5=0, off_preferred_top5=0, missing_anchor_top5=0
- Checks:
  - PASS Top 5 should avoid zero-GMV false positives (0 zero-GMV creators)
  - PASS Top 5 should mostly overlap brand industries (0 off-brand creators)
  - PASS Top 5 should match query-specific preferred industries (0 off-preferred creators)
  - PASS Average query-intent should stay high (0.781)
  - PASS Average anchor-intent should stay meaningful (1.000)
  - PASS Average preferred-industry fit should stay high (1.000)
- Ablation:
  - semantic_only: climbing_wall_finn, mountain_biker_ty, hiker_adventures_zach, ski_season_vera, gaming_phones_rio
  - business_only: home_gym_builds, marathon_pac_kim, fishing_tales_bob, climbing_wall_finn, biohack_labs_rex
  - hybrid: home_gym_builds, marathon_pac_kim, climbing_wall_finn, fishing_tales_bob, ski_season_vera

### outdoor_08

- Brand: `brand_outdoor_adventure`
- Query: "Mountain biking gear creators"
- Purpose: Should surface outdoor gear creators, not generic tech.
- Preferred industries: Sports & Outdoors
- Hybrid top 5: home_gym_builds, marathon_pac_kim, mountain_biker_ty, fishing_tales_bob, ski_season_vera
- Metrics: avg_final=0.6202, avg_query_intent=0.4659, avg_anchor_intent=0.6218, avg_brand_industry_fit=0.5, avg_preferred_industry_fit=1, zero_gmv_top5=0, off_brand_top5=0, off_preferred_top5=0, missing_anchor_top5=0
- Checks:
  - PASS Top 5 should avoid zero-GMV false positives (0 zero-GMV creators)
  - PASS Top 5 should mostly overlap brand industries (0 off-brand creators)
  - PASS Top 5 should match query-specific preferred industries (0 off-preferred creators)
  - PASS Average query-intent should stay high (0.466)
  - PASS Average anchor-intent should stay meaningful (0.622)
  - PASS Average preferred-industry fit should stay high (1.000)
- Ablation:
  - semantic_only: mountain_biker_ty, gaming_phones_rio, cycling_commute_jed, ski_season_vera, hiker_adventures_zach
  - business_only: home_gym_builds, marathon_pac_kim, fishing_tales_bob, climbing_wall_finn, ski_season_vera
  - hybrid: home_gym_builds, marathon_pac_kim, mountain_biker_ty, fishing_tales_bob, ski_season_vera

### outdoor_09

- Brand: `brand_outdoor_adventure`
- Query: "Ski and winter adventure gear creators"
- Purpose: Winter sports and adventure content query.
- Preferred industries: Sports & Outdoors
- Hybrid top 5: marathon_pac_kim, ski_season_vera, fishing_tales_bob, climbing_wall_finn, mountain_biker_ty
- Metrics: avg_final=0.6068, avg_query_intent=0.6053, avg_anchor_intent=0.7488, avg_brand_industry_fit=0.5, avg_preferred_industry_fit=1, zero_gmv_top5=0, off_brand_top5=0, off_preferred_top5=0, missing_anchor_top5=0
- Checks:
  - PASS Top 5 should avoid zero-GMV false positives (0 zero-GMV creators)
  - PASS Top 5 should mostly overlap brand industries (0 off-brand creators)
  - PASS Top 5 should match query-specific preferred industries (0 off-preferred creators)
  - PASS Average query-intent should stay high (0.605)
  - PASS Average anchor-intent should stay meaningful (0.749)
  - PASS Average preferred-industry fit should stay high (1.000)
- Ablation:
  - semantic_only: ski_season_vera, hiker_adventures_zach, kayak_adventures_lu, outdoor_survival_rex, mountain_biker_ty
  - business_only: marathon_pac_kim, fishing_tales_bob, climbing_wall_finn, biohack_labs_rex, ski_season_vera
  - hybrid: marathon_pac_kim, ski_season_vera, fishing_tales_bob, climbing_wall_finn, mountain_biker_ty

### outdoor_10

- Brand: `brand_outdoor_adventure`
- Query: "Wilderness survival gear creators"
- Purpose: Preparedness and survival outdoor query.
- Preferred industries: Sports & Outdoors, Health
- Hybrid top 5: home_gym_builds, marathon_pac_kim, fishing_tales_bob, climbing_wall_finn, ski_season_vera
- Metrics: avg_final=0.6619, avg_query_intent=0.686, avg_anchor_intent=1, avg_brand_industry_fit=0.5, avg_preferred_industry_fit=0.8, zero_gmv_top5=0, off_brand_top5=0, off_preferred_top5=0, missing_anchor_top5=0
- Checks:
  - PASS Top 5 should avoid zero-GMV false positives (0 zero-GMV creators)
  - PASS Top 5 should mostly overlap brand industries (0 off-brand creators)
  - PASS Top 5 should match query-specific preferred industries (0 off-preferred creators)
  - PASS Average query-intent should stay high (0.686)
  - PASS Average anchor-intent should stay meaningful (1.000)
  - PASS Average preferred-industry fit should stay high (0.800)
- Ablation:
  - semantic_only: outdoor_survival_rex, hiker_adventures_zach, workwear_rugged_colt, kayak_adventures_lu, mountain_biker_ty
  - business_only: home_gym_builds, marathon_pac_kim, fishing_tales_bob, climbing_wall_finn, biohack_labs_rex
  - hybrid: home_gym_builds, marathon_pac_kim, fishing_tales_bob, climbing_wall_finn, ski_season_vera

### outdoor_11

- Brand: `brand_outdoor_adventure`
- Query: "Paddleboarding and water adventure creators"
- Purpose: Water-sport outdoor query.
- Preferred industries: Sports & Outdoors
- Hybrid top 5: fishing_tales_bob, paddleboard_pro_dee, yoga_outdoors_ann, ski_season_vera, climbing_wall_finn
- Metrics: avg_final=0.5505, avg_query_intent=0.4416, avg_anchor_intent=1, avg_brand_industry_fit=0.5, avg_preferred_industry_fit=1, zero_gmv_top5=0, off_brand_top5=0, off_preferred_top5=0, missing_anchor_top5=0
- Checks:
  - PASS Top 5 should avoid zero-GMV false positives (0 zero-GMV creators)
  - PASS Top 5 should mostly overlap brand industries (0 off-brand creators)
  - PASS Top 5 should match query-specific preferred industries (0 off-preferred creators)
  - PASS Average query-intent should stay high (0.442)
  - PASS Average anchor-intent should stay meaningful (1.000)
  - PASS Average preferred-industry fit should stay high (1.000)
- Ablation:
  - semantic_only: kayak_adventures_lu, paddleboard_pro_dee, surf_life_carla, hiker_adventures_zach, gaming_phones_rio
  - business_only: fishing_tales_bob, paddleboard_pro_dee, biohack_labs_rex, climbing_wall_finn, yoga_outdoors_ann
  - hybrid: fishing_tales_bob, paddleboard_pro_dee, yoga_outdoors_ann, ski_season_vera, climbing_wall_finn

### outdoor_12

- Brand: `brand_outdoor_adventure`
- Query: "Durable phone gear for outdoor travel"
- Purpose: Outdoor phone accessories and durability query.
- Preferred industries: Sports & Outdoors, Phones & Electronics
- Hybrid top 5: home_gym_builds, gaming_phones_rio, marathon_pac_kim, webcam_reviews_sky, streaming_setup_ada
- Metrics: avg_final=0.66, avg_query_intent=0.4548, avg_anchor_intent=0.6714, avg_brand_industry_fit=0.5, avg_preferred_industry_fit=0.5, zero_gmv_top5=0, off_brand_top5=0, off_preferred_top5=0, missing_anchor_top5=0
- Checks:
  - PASS Top 5 should avoid zero-GMV false positives (0 zero-GMV creators)
  - PASS Top 5 should mostly overlap brand industries (0 off-brand creators)
  - PASS Top 5 should match query-specific preferred industries (0 off-preferred creators)
  - PASS Average query-intent should stay high (0.455)
  - PASS Average anchor-intent should stay meaningful (0.671)
  - PASS Average preferred-industry fit should stay high (0.500)
- Ablation:
  - semantic_only: gaming_phones_rio, wearable_tech_zoe, charging_tech_oscar, hiker_adventures_zach, earbuds_lab_dev
  - business_only: home_gym_builds, gaming_phones_rio, marathon_pac_kim, fishing_tales_bob, apple_insider_cy
  - hybrid: home_gym_builds, gaming_phones_rio, marathon_pac_kim, webcam_reviews_sky, streaming_setup_ada

### outdoor_13

- Brand: `brand_outdoor_adventure`
- Query: "Budget hiking gear for first-time adventurers"
- Purpose: Budget hiking gear precision case.
- Preferred industries: Sports & Outdoors
- Hybrid top 5: home_gym_builds, marathon_pac_kim, fishing_tales_bob, climbing_wall_finn, ski_season_vera
- Metrics: avg_final=0.6443, avg_query_intent=0.4913, avg_anchor_intent=1, avg_brand_industry_fit=0.5, avg_preferred_industry_fit=1, zero_gmv_top5=0, off_brand_top5=0, off_preferred_top5=0, missing_anchor_top5=0
- Checks:
  - PASS Top 5 should avoid zero-GMV false positives (0 zero-GMV creators)
  - PASS Top 5 should mostly overlap brand industries (0 off-brand creators)
  - PASS Top 5 should match query-specific preferred industries (0 off-preferred creators)
  - PASS Average query-intent should stay high (0.491)
  - PASS Average anchor-intent should stay meaningful (1.000)
  - PASS Average preferred-industry fit should stay high (1.000)
- Ablation:
  - semantic_only: hiker_adventures_zach, outdoor_survival_rex, climbing_wall_finn, budget_phones_sal, budget_pc_builds_max
  - business_only: home_gym_builds, marathon_pac_kim, fishing_tales_bob, climbing_wall_finn, ski_season_vera
  - hybrid: home_gym_builds, marathon_pac_kim, fishing_tales_bob, climbing_wall_finn, ski_season_vera

### outdoor_14

- Brand: `brand_outdoor_adventure`
- Query: "Outdoor creators with gear review content"
- Purpose: General gear-review outdoor query.
- Preferred industries: Sports & Outdoors
- Hybrid top 5: home_gym_builds, marathon_pac_kim, fishing_tales_bob, climbing_wall_finn, ski_season_vera
- Metrics: avg_final=0.718, avg_query_intent=0.8615, avg_anchor_intent=1, avg_brand_industry_fit=0.5, avg_preferred_industry_fit=1, zero_gmv_top5=0, off_brand_top5=0, off_preferred_top5=0, missing_anchor_top5=0
- Checks:
  - PASS Top 5 should avoid zero-GMV false positives (0 zero-GMV creators)
  - PASS Top 5 should mostly overlap brand industries (0 off-brand creators)
  - PASS Top 5 should match query-specific preferred industries (0 off-preferred creators)
  - PASS Average query-intent should stay high (0.862)
  - PASS Average anchor-intent should stay meaningful (1.000)
  - PASS Average preferred-industry fit should stay high (1.000)
- Ablation:
  - semantic_only: gaming_phones_rio, hiker_adventures_zach, outdoor_survival_rex, climbing_wall_finn, streaming_setup_ada
  - business_only: home_gym_builds, marathon_pac_kim, fishing_tales_bob, climbing_wall_finn, ski_season_vera
  - hybrid: home_gym_builds, marathon_pac_kim, fishing_tales_bob, climbing_wall_finn, ski_season_vera

### outdoor_15

- Brand: `brand_outdoor_adventure`
- Query: "Backcountry adventure and safety gear creators"
- Purpose: Safety and backcountry gear case.
- Preferred industries: Sports & Outdoors, Health
- Hybrid top 5: marathon_pac_kim, fishing_tales_bob, ski_season_vera, climbing_wall_finn, mountain_biker_ty
- Metrics: avg_final=0.6152, avg_query_intent=0.5943, avg_anchor_intent=1, avg_brand_industry_fit=0.5, avg_preferred_industry_fit=0.8, zero_gmv_top5=0, off_brand_top5=0, off_preferred_top5=0, missing_anchor_top5=0
- Checks:
  - PASS Top 5 should avoid zero-GMV false positives (0 zero-GMV creators)
  - PASS Top 5 should mostly overlap brand industries (0 off-brand creators)
  - PASS Top 5 should match query-specific preferred industries (0 off-preferred creators)
  - PASS Average query-intent should stay high (0.594)
  - PASS Average anchor-intent should stay meaningful (1.000)
  - PASS Average preferred-industry fit should stay high (0.800)
- Ablation:
  - semantic_only: outdoor_survival_rex, hiker_adventures_zach, mountain_biker_ty, ski_season_vera, kayak_adventures_lu
  - business_only: marathon_pac_kim, fishing_tales_bob, climbing_wall_finn, biohack_labs_rex, ski_season_vera
  - hybrid: marathon_pac_kim, fishing_tales_bob, ski_season_vera, climbing_wall_finn, mountain_biker_ty

### outdoor_16

- Brand: `brand_outdoor_adventure`
- Query: "Trail camera and phone accessory creators"
- Purpose: Outdoor gear with electronics crossover.
- Preferred industries: Sports & Outdoors, Phones & Electronics
- Hybrid top 5: apple_insider_cy, gaming_phones_rio, webcam_reviews_sky, marathon_pac_kim, streaming_setup_ada
- Metrics: avg_final=0.5579, avg_query_intent=0.6069, avg_anchor_intent=0.6459, avg_brand_industry_fit=0.5, avg_preferred_industry_fit=0.5, zero_gmv_top5=0, off_brand_top5=0, off_preferred_top5=0, missing_anchor_top5=4
- Checks:
  - PASS Top 5 should avoid zero-GMV false positives (0 zero-GMV creators)
  - PASS Top 5 should mostly overlap brand industries (0 off-brand creators)
  - PASS Top 5 should match query-specific preferred industries (0 off-preferred creators)
  - PASS Average query-intent should stay high (0.607)
  - PASS Average anchor-intent should stay meaningful (0.646)
  - PASS Average preferred-industry fit should stay high (0.500)
- Ablation:
  - semantic_only: gaming_phones_rio, camera_tech_leo, webcam_reviews_sky, mountain_biker_ty, phone_reviewer_kai
  - business_only: apple_insider_cy, marathon_pac_kim, fishing_tales_bob, gaming_phones_rio, webcam_reviews_sky
  - hybrid: apple_insider_cy, gaming_phones_rio, webcam_reviews_sky, marathon_pac_kim, streaming_setup_ada

### outdoor_17

- Brand: `brand_outdoor_adventure`
- Query: "Camping checklist and equipment creators"
- Purpose: Checklist-style equipment query.
- Preferred industries: Sports & Outdoors
- Hybrid top 5: home_gym_builds, marathon_pac_kim, fishing_tales_bob, climbing_wall_finn, tennis_daily_ace
- Metrics: avg_final=0.6394, avg_query_intent=0.5927, avg_anchor_intent=0.8109, avg_brand_industry_fit=0.5, avg_preferred_industry_fit=1, zero_gmv_top5=0, off_brand_top5=0, off_preferred_top5=0, missing_anchor_top5=0
- Checks:
  - PASS Top 5 should avoid zero-GMV false positives (0 zero-GMV creators)
  - PASS Top 5 should mostly overlap brand industries (0 off-brand creators)
  - PASS Top 5 should match query-specific preferred industries (0 off-preferred creators)
  - PASS Average query-intent should stay high (0.593)
  - PASS Average anchor-intent should stay meaningful (0.811)
  - PASS Average preferred-industry fit should stay high (1.000)
- Ablation:
  - semantic_only: outdoor_survival_rex, hiker_adventures_zach, gaming_phones_rio, kayak_adventures_lu, climbing_wall_finn
  - business_only: home_gym_builds, marathon_pac_kim, fishing_tales_bob, climbing_wall_finn, paddleboard_pro_dee
  - hybrid: home_gym_builds, marathon_pac_kim, fishing_tales_bob, climbing_wall_finn, tennis_daily_ace

### outdoor_18

- Brand: `brand_outdoor_adventure`
- Query: "Adventure travel gear creators"
- Purpose: Broader travel and gear query that should stay outdoors-first.
- Preferred industries: Sports & Outdoors
- Hybrid top 5: marathon_pac_kim, fishing_tales_bob, ski_season_vera, climbing_wall_finn, mountain_biker_ty
- Metrics: avg_final=0.6114, avg_query_intent=0.686, avg_anchor_intent=1, avg_brand_industry_fit=0.5, avg_preferred_industry_fit=1, zero_gmv_top5=0, off_brand_top5=0, off_preferred_top5=0, missing_anchor_top5=0
- Checks:
  - PASS Top 5 should avoid zero-GMV false positives (0 zero-GMV creators)
  - PASS Top 5 should mostly overlap brand industries (0 off-brand creators)
  - PASS Top 5 should match query-specific preferred industries (0 off-preferred creators)
  - PASS Average query-intent should stay high (0.686)
  - PASS Average anchor-intent should stay meaningful (1.000)
  - PASS Average preferred-industry fit should stay high (1.000)
- Ablation:
  - semantic_only: hiker_adventures_zach, outdoor_survival_rex, kayak_adventures_lu, mountain_biker_ty, gaming_phones_rio
  - business_only: marathon_pac_kim, fishing_tales_bob, climbing_wall_finn, ski_season_vera, yoga_outdoors_ann
  - hybrid: marathon_pac_kim, fishing_tales_bob, ski_season_vera, climbing_wall_finn, mountain_biker_ty

### outdoor_19

- Brand: `brand_outdoor_adventure`
- Query: "Trail running shoe review creators"
- Purpose: Footwear and performance review query.
- Preferred industries: Sports & Outdoors, Health
- Hybrid top 5: marathon_pac_kim, home_gym_builds, fishing_tales_bob, ski_season_vera, climbing_wall_finn
- Metrics: avg_final=0.6655, avg_query_intent=0.5895, avg_anchor_intent=1, avg_brand_industry_fit=0.5, avg_preferred_industry_fit=0.8, zero_gmv_top5=0, off_brand_top5=0, off_preferred_top5=0, missing_anchor_top5=0
- Checks:
  - PASS Top 5 should avoid zero-GMV false positives (0 zero-GMV creators)
  - PASS Top 5 should mostly overlap brand industries (0 off-brand creators)
  - PASS Top 5 should match query-specific preferred industries (0 off-preferred creators)
  - PASS Average query-intent should stay high (0.589)
  - PASS Average anchor-intent should stay meaningful (1.000)
  - PASS Average preferred-industry fit should stay high (0.800)
- Ablation:
  - semantic_only: marathon_pac_kim, mountain_biker_ty, wearable_tech_zoe, gaming_phones_rio, hiker_adventures_zach
  - business_only: home_gym_builds, marathon_pac_kim, fishing_tales_bob, climbing_wall_finn, biohack_labs_rex
  - hybrid: marathon_pac_kim, home_gym_builds, fishing_tales_bob, ski_season_vera, climbing_wall_finn

### outdoor_20

- Brand: `brand_outdoor_adventure`
- Query: "Climbing and bouldering gear educators"
- Purpose: Education-heavy climbing query.
- Preferred industries: Sports & Outdoors
- Hybrid top 5: home_gym_builds, marathon_pac_kim, climbing_wall_finn, fishing_tales_bob, ski_season_vera
- Metrics: avg_final=0.6736, avg_query_intent=0.5918, avg_anchor_intent=1, avg_brand_industry_fit=0.5, avg_preferred_industry_fit=1, zero_gmv_top5=0, off_brand_top5=0, off_preferred_top5=0, missing_anchor_top5=0
- Checks:
  - PASS Top 5 should avoid zero-GMV false positives (0 zero-GMV creators)
  - PASS Top 5 should mostly overlap brand industries (0 off-brand creators)
  - PASS Top 5 should match query-specific preferred industries (0 off-preferred creators)
  - PASS Average query-intent should stay high (0.592)
  - PASS Average anchor-intent should stay meaningful (1.000)
  - PASS Average preferred-industry fit should stay high (1.000)
- Ablation:
  - semantic_only: climbing_wall_finn, hiker_adventures_zach, mountain_biker_ty, gaming_phones_rio, outdoor_survival_rex
  - business_only: home_gym_builds, marathon_pac_kim, fishing_tales_bob, climbing_wall_finn, biohack_labs_rex
  - hybrid: home_gym_builds, marathon_pac_kim, climbing_wall_finn, fishing_tales_bob, ski_season_vera

### outdoor_21

- Brand: `brand_outdoor_adventure`
- Query: "Fishing tackle and outdoor gear creators"
- Purpose: Tackle and fishing commerce query.
- Preferred industries: Sports & Outdoors, Health
- Hybrid top 5: fishing_tales_bob, climbing_wall_finn, ski_season_vera, tennis_daily_ace, yoga_outdoors_ann
- Metrics: avg_final=0.6039, avg_query_intent=0.8959, avg_anchor_intent=0.95, avg_brand_industry_fit=0.5, avg_preferred_industry_fit=0.7, zero_gmv_top5=0, off_brand_top5=0, off_preferred_top5=0, missing_anchor_top5=0
- Checks:
  - PASS Top 5 should avoid zero-GMV false positives (0 zero-GMV creators)
  - PASS Top 5 should mostly overlap brand industries (0 off-brand creators)
  - PASS Top 5 should match query-specific preferred industries (0 off-preferred creators)
  - PASS Average query-intent should stay high (0.896)
  - PASS Average anchor-intent should stay meaningful (0.950)
  - PASS Average preferred-industry fit should stay high (0.700)
- Ablation:
  - semantic_only: fishing_tales_bob, gaming_phones_rio, kayak_adventures_lu, outdoor_kitchen_rex, outdoor_survival_rex
  - business_only: fishing_tales_bob, climbing_wall_finn, paddleboard_pro_dee, yoga_outdoors_ann, ski_season_vera
  - hybrid: fishing_tales_bob, climbing_wall_finn, ski_season_vera, tennis_daily_ace, yoga_outdoors_ann

### outdoor_22

- Brand: `brand_outdoor_adventure`
- Query: "Winter sports gear reviews"
- Purpose: Review-heavy winter outdoor query.
- Preferred industries: Sports & Outdoors
- Hybrid top 5: home_gym_builds, marathon_pac_kim, fishing_tales_bob, ski_season_vera, climbing_wall_finn
- Metrics: avg_final=0.6963, avg_query_intent=0.775, avg_anchor_intent=0.6143, avg_brand_industry_fit=0.5, avg_preferred_industry_fit=1, zero_gmv_top5=0, off_brand_top5=0, off_preferred_top5=0, missing_anchor_top5=0
- Checks:
  - PASS Top 5 should avoid zero-GMV false positives (0 zero-GMV creators)
  - PASS Top 5 should mostly overlap brand industries (0 off-brand creators)
  - PASS Top 5 should match query-specific preferred industries (0 off-preferred creators)
  - PASS Average query-intent should stay high (0.775)
  - PASS Average anchor-intent should stay meaningful (0.614)
  - PASS Average preferred-industry fit should stay high (1.000)
- Ablation:
  - semantic_only: ski_season_vera, gaming_phones_rio, wearable_tech_zoe, mountain_biker_ty, earbuds_lab_dev
  - business_only: home_gym_builds, marathon_pac_kim, fishing_tales_bob, climbing_wall_finn, ski_season_vera
  - hybrid: home_gym_builds, marathon_pac_kim, fishing_tales_bob, ski_season_vera, climbing_wall_finn

### outdoor_23

- Brand: `brand_outdoor_adventure`
- Query: "Outdoor smartwatch and phone accessory creators"
- Purpose: Outdoor-electronics accessory crossover query.
- Preferred industries: Sports & Outdoors, Phones & Electronics
- Hybrid top 5: home_gym_builds, apple_insider_cy, marathon_pac_kim, gaming_phones_rio, webcam_reviews_sky
- Metrics: avg_final=0.5984, avg_query_intent=0.4, avg_anchor_intent=0.5317, avg_brand_industry_fit=0.5, avg_preferred_industry_fit=0.5, zero_gmv_top5=0, off_brand_top5=0, off_preferred_top5=0, missing_anchor_top5=3
- Checks:
  - PASS Top 5 should avoid zero-GMV false positives (0 zero-GMV creators)
  - PASS Top 5 should mostly overlap brand industries (0 off-brand creators)
  - PASS Top 5 should match query-specific preferred industries (0 off-preferred creators)
  - PASS Average query-intent should stay high (0.400)
  - PASS Average anchor-intent should stay meaningful (0.532)
  - PASS Average preferred-industry fit should stay high (0.500)
- Ablation:
  - semantic_only: wearable_tech_zoe, gaming_phones_rio, phone_reviewer_kai, charging_tech_oscar, earbuds_lab_dev
  - business_only: home_gym_builds, apple_insider_cy, marathon_pac_kim, gaming_phones_rio, webcam_reviews_sky
  - hybrid: home_gym_builds, apple_insider_cy, marathon_pac_kim, gaming_phones_rio, webcam_reviews_sky

### outdoor_24

- Brand: `brand_outdoor_adventure`
- Query: "Survival and emergency preparedness gear creators"
- Purpose: Preparedness-specific outdoor commerce query.
- Preferred industries: Sports & Outdoors, Health
- Hybrid top 5: home_gym_builds, marathon_pac_kim, fishing_tales_bob, climbing_wall_finn, ski_season_vera
- Metrics: avg_final=0.6436, avg_query_intent=0.5566, avg_anchor_intent=1, avg_brand_industry_fit=0.5, avg_preferred_industry_fit=0.8, zero_gmv_top5=0, off_brand_top5=0, off_preferred_top5=0, missing_anchor_top5=0
- Checks:
  - PASS Top 5 should avoid zero-GMV false positives (0 zero-GMV creators)
  - PASS Top 5 should mostly overlap brand industries (0 off-brand creators)
  - PASS Top 5 should match query-specific preferred industries (0 off-preferred creators)
  - PASS Average query-intent should stay high (0.557)
  - PASS Average anchor-intent should stay meaningful (1.000)
  - PASS Average preferred-industry fit should stay high (0.800)
- Ablation:
  - semantic_only: outdoor_survival_rex, hiker_adventures_zach, kayak_adventures_lu, workwear_rugged_colt, gaming_phones_rio
  - business_only: home_gym_builds, marathon_pac_kim, fishing_tales_bob, climbing_wall_finn, biohack_labs_rex
  - hybrid: home_gym_builds, marathon_pac_kim, fishing_tales_bob, climbing_wall_finn, ski_season_vera

### outdoor_25

- Brand: `brand_outdoor_adventure`
- Query: "Outdoor phone charging and power bank creators"
- Purpose: Phone charging gear with outdoor usage context.
- Preferred industries: Phones & Electronics, Sports & Outdoors
- Hybrid top 5: home_gym_builds, charging_tech_oscar, marathon_pac_kim, apple_insider_cy, earbuds_lab_dev
- Metrics: avg_final=0.4576, avg_query_intent=0.3652, avg_anchor_intent=0.45, avg_brand_industry_fit=0.5, avg_preferred_industry_fit=0.5, zero_gmv_top5=0, off_brand_top5=0, off_preferred_top5=0, missing_anchor_top5=3
- Checks:
  - PASS Top 5 should avoid zero-GMV false positives (0 zero-GMV creators)
  - PASS Top 5 should mostly overlap brand industries (0 off-brand creators)
  - PASS Top 5 should match query-specific preferred industries (0 off-preferred creators)
  - PASS Average query-intent should stay high (0.365)
  - PASS Average anchor-intent should stay meaningful (0.450)
  - PASS Average preferred-industry fit should stay high (0.500)
- Ablation:
  - semantic_only: charging_tech_oscar, gaming_phones_rio, earbuds_lab_dev, repair_tech_tommy, laptop_reviews_amy
  - business_only: home_gym_builds, marathon_pac_kim, apple_insider_cy, fishing_tales_bob, gaming_phones_rio
  - hybrid: home_gym_builds, charging_tech_oscar, marathon_pac_kim, apple_insider_cy, earbuds_lab_dev

### outdoor_26

- Brand: `brand_outdoor_adventure`
- Query: "Rugged outdoor gear creators with repeat purchase intent"
- Purpose: Commerce-heavy rugged gear query.
- Preferred industries: Sports & Outdoors
- Hybrid top 5: marathon_pac_kim, climbing_wall_finn, ski_season_vera, mountain_biker_ty, gaming_phones_rio
- Metrics: avg_final=0.5333, avg_query_intent=0.4895, avg_anchor_intent=0.9018, avg_brand_industry_fit=0.5, avg_preferred_industry_fit=0.8, zero_gmv_top5=0, off_brand_top5=0, off_preferred_top5=1, missing_anchor_top5=0
- Checks:
  - PASS Top 5 should avoid zero-GMV false positives (0 zero-GMV creators)
  - PASS Top 5 should mostly overlap brand industries (0 off-brand creators)
  - PASS Top 5 should match query-specific preferred industries (1 off-preferred creators)
  - PASS Average query-intent should stay high (0.490)
  - PASS Average anchor-intent should stay meaningful (0.902)
  - PASS Average preferred-industry fit should stay high (0.800)
- Ablation:
  - semantic_only: workwear_rugged_colt, athletic_fit_cole, outdoor_survival_rex, luxury_menswear_kaz, hiker_adventures_zach
  - business_only: marathon_pac_kim, climbing_wall_finn, ski_season_vera, gaming_phones_rio, baby_gear_reviews_amy
  - hybrid: marathon_pac_kim, climbing_wall_finn, ski_season_vera, mountain_biker_ty, gaming_phones_rio

### outdoor_27

- Brand: `brand_outdoor_adventure`
- Query: "Outdoor creators for men 18-34 with strong GMV"
- Purpose: Audience-specific outdoor commerce query.
- Preferred industries: Sports & Outdoors
- Hybrid top 5: home_gym_builds, yoga_outdoors_ann, climbing_wall_finn, ski_season_vera, mountain_biker_ty
- Metrics: avg_final=0.5398, avg_query_intent=0.4058, avg_anchor_intent=1, avg_brand_industry_fit=0.5, avg_preferred_industry_fit=1, zero_gmv_top5=0, off_brand_top5=0, off_preferred_top5=0, missing_anchor_top5=0
- Checks:
  - PASS Top 5 should avoid zero-GMV false positives (0 zero-GMV creators)
  - PASS Top 5 should mostly overlap brand industries (0 off-brand creators)
  - PASS Top 5 should match query-specific preferred industries (0 off-preferred creators)
  - PASS Average query-intent should stay high (0.406)
  - PASS Average anchor-intent should stay meaningful (1.000)
  - PASS Average preferred-industry fit should stay high (1.000)
- Ablation:
  - semantic_only: athletic_fit_cole, workwear_rugged_colt, business_casual_nate, luxury_menswear_kaz, outdoor_kitchen_rex
  - business_only: home_gym_builds, climbing_wall_finn, yoga_outdoors_ann, ski_season_vera, mountain_biker_ty
  - hybrid: home_gym_builds, yoga_outdoors_ann, climbing_wall_finn, ski_season_vera, mountain_biker_ty

### outdoor_28

- Brand: `brand_outdoor_adventure`
- Query: "Mountain trail content with strong conversion"
- Purpose: Trail content plus commerce requirement.
- Preferred industries: Sports & Outdoors
- Hybrid top 5: home_gym_builds, marathon_pac_kim, fishing_tales_bob, mountain_biker_ty, ski_season_vera
- Metrics: avg_final=0.6335, avg_query_intent=0.48, avg_anchor_intent=0.6148, avg_brand_industry_fit=0.5, avg_preferred_industry_fit=1, zero_gmv_top5=0, off_brand_top5=0, off_preferred_top5=0, missing_anchor_top5=0
- Checks:
  - PASS Top 5 should avoid zero-GMV false positives (0 zero-GMV creators)
  - PASS Top 5 should mostly overlap brand industries (0 off-brand creators)
  - PASS Top 5 should match query-specific preferred industries (0 off-preferred creators)
  - PASS Average query-intent should stay high (0.480)
  - PASS Average anchor-intent should stay meaningful (0.615)
  - PASS Average preferred-industry fit should stay high (1.000)
- Ablation:
  - semantic_only: mountain_biker_ty, hiker_adventures_zach, ski_season_vera, outdoor_survival_rex, wearable_tech_zoe
  - business_only: home_gym_builds, marathon_pac_kim, fishing_tales_bob, biohack_labs_rex, ski_season_vera
  - hybrid: home_gym_builds, marathon_pac_kim, fishing_tales_bob, mountain_biker_ty, ski_season_vera

### outdoor_29

- Brand: `brand_outdoor_adventure`
- Query: "Endurance training creators with outdoor buying intent"
- Purpose: Performance and outdoors crossover query.
- Preferred industries: Sports & Outdoors, Health
- Hybrid top 5: home_gym_builds, marathon_pac_kim, climbing_wall_finn, yoga_outdoors_ann, biohack_labs_rex
- Metrics: avg_final=0.6146, avg_query_intent=0.4045, avg_anchor_intent=1, avg_brand_industry_fit=0.5, avg_preferred_industry_fit=0.7, zero_gmv_top5=0, off_brand_top5=0, off_preferred_top5=0, missing_anchor_top5=0
- Checks:
  - PASS Top 5 should avoid zero-GMV false positives (0 zero-GMV creators)
  - PASS Top 5 should mostly overlap brand industries (0 off-brand creators)
  - PASS Top 5 should match query-specific preferred industries (0 off-preferred creators)
  - PASS Average query-intent should stay high (0.404)
  - PASS Average anchor-intent should stay meaningful (1.000)
  - PASS Average preferred-industry fit should stay high (0.700)
- Ablation:
  - semantic_only: outdoor_survival_rex, wearable_tech_zoe, hiker_adventures_zach, yoga_outdoors_ann, climbing_wall_finn
  - business_only: home_gym_builds, marathon_pac_kim, climbing_wall_finn, biohack_labs_rex, paddleboard_pro_dee
  - hybrid: home_gym_builds, marathon_pac_kim, climbing_wall_finn, yoga_outdoors_ann, biohack_labs_rex

### outdoor_30

- Brand: `brand_outdoor_adventure`
- Query: "Outdoor recovery and wellness for athletes"
- Purpose: Wellness-heavy outdoor query that should still stay in-category.
- Preferred industries: Sports & Outdoors, Health
- Hybrid top 5: home_gym_builds, marathon_pac_kim, fishing_tales_bob, ski_season_vera, biohack_labs_rex
- Metrics: avg_final=0.6031, avg_query_intent=0.3636, avg_anchor_intent=1, avg_brand_industry_fit=0.5, avg_preferred_industry_fit=0.9, zero_gmv_top5=0, off_brand_top5=0, off_preferred_top5=0, missing_anchor_top5=0
- Checks:
  - PASS Top 5 should avoid zero-GMV false positives (0 zero-GMV creators)
  - PASS Top 5 should mostly overlap brand industries (0 off-brand creators)
  - PASS Top 5 should match query-specific preferred industries (0 off-preferred creators)
  - PASS Average query-intent should stay high (0.364)
  - PASS Average anchor-intent should stay meaningful (1.000)
  - PASS Average preferred-industry fit should stay high (0.900)
- Ablation:
  - semantic_only: yoga_outdoors_ann, outdoor_survival_rex, wearable_tech_zoe, hiker_adventures_zach, kayak_adventures_lu
  - business_only: home_gym_builds, marathon_pac_kim, fishing_tales_bob, biohack_labs_rex, ski_season_vera
  - hybrid: home_gym_builds, marathon_pac_kim, fishing_tales_bob, ski_season_vera, biohack_labs_rex

### outdoor_31

- Brand: `brand_outdoor_adventure`
- Query: "Kayaking and paddle gear creators"
- Purpose: Paddle-sport gear query.
- Preferred industries: Sports & Outdoors
- Hybrid top 5: marathon_pac_kim, fishing_tales_bob, climbing_wall_finn, ski_season_vera, tennis_daily_ace
- Metrics: avg_final=0.5428, avg_query_intent=0.3816, avg_anchor_intent=1, avg_brand_industry_fit=0.5, avg_preferred_industry_fit=1, zero_gmv_top5=0, off_brand_top5=0, off_preferred_top5=0, missing_anchor_top5=0
- Checks:
  - PASS Top 5 should avoid zero-GMV false positives (0 zero-GMV creators)
  - PASS Top 5 should mostly overlap brand industries (0 off-brand creators)
  - PASS Top 5 should match query-specific preferred industries (0 off-preferred creators)
  - PASS Average query-intent should stay high (0.382)
  - PASS Average anchor-intent should stay meaningful (1.000)
  - PASS Average preferred-industry fit should stay high (1.000)
- Ablation:
  - semantic_only: kayak_adventures_lu, gaming_phones_rio, paddleboard_pro_dee, kite_flyer_grace, mountain_biker_ty
  - business_only: marathon_pac_kim, fishing_tales_bob, climbing_wall_finn, ski_season_vera, gaming_phones_rio
  - hybrid: marathon_pac_kim, fishing_tales_bob, climbing_wall_finn, ski_season_vera, tennis_daily_ace

### outdoor_32

- Brand: `brand_outdoor_adventure`
- Query: "Content creators for scenic hiking trips and product sales"
- Purpose: Scenic outdoor storytelling with commerce requirement.
- Preferred industries: Sports & Outdoors
- Hybrid top 5: fishing_tales_bob, marathon_pac_kim, ski_season_vera, mountain_biker_ty, yoga_outdoors_ann
- Metrics: avg_final=0.5823, avg_query_intent=0.3561, avg_anchor_intent=1, avg_brand_industry_fit=0.5, avg_preferred_industry_fit=1, zero_gmv_top5=0, off_brand_top5=0, off_preferred_top5=0, missing_anchor_top5=0
- Checks:
  - PASS Top 5 should avoid zero-GMV false positives (0 zero-GMV creators)
  - PASS Top 5 should mostly overlap brand industries (0 off-brand creators)
  - PASS Top 5 should match query-specific preferred industries (0 off-preferred creators)
  - PASS Average query-intent should stay high (0.356)
  - PASS Average anchor-intent should stay meaningful (1.000)
  - PASS Average preferred-industry fit should stay high (1.000)
- Ablation:
  - semantic_only: hiker_adventures_zach, mountain_biker_ty, kayak_adventures_lu, ski_season_vera, outdoor_survival_rex
  - business_only: marathon_pac_kim, fishing_tales_bob, climbing_wall_finn, paddleboard_pro_dee, yoga_outdoors_ann
  - hybrid: fishing_tales_bob, marathon_pac_kim, ski_season_vera, mountain_biker_ty, yoga_outdoors_ann

### outdoor_33

- Brand: `brand_outdoor_adventure`
- Query: "Gear-heavy adventure creators that still fit the brand"
- Purpose: High-level outdoor fit check for hidden tests.
- Preferred industries: Sports & Outdoors
- Hybrid top 5: home_gym_builds, marathon_pac_kim, fishing_tales_bob, climbing_wall_finn, ski_season_vera
- Metrics: avg_final=0.6057, avg_query_intent=0.3554, avg_anchor_intent=1, avg_brand_industry_fit=0.5, avg_preferred_industry_fit=1, zero_gmv_top5=0, off_brand_top5=0, off_preferred_top5=0, missing_anchor_top5=0
- Checks:
  - PASS Top 5 should avoid zero-GMV false positives (0 zero-GMV creators)
  - PASS Top 5 should mostly overlap brand industries (0 off-brand creators)
  - PASS Top 5 should match query-specific preferred industries (0 off-preferred creators)
  - PASS Average query-intent should stay high (0.355)
  - PASS Average anchor-intent should stay meaningful (1.000)
  - PASS Average preferred-industry fit should stay high (1.000)
- Ablation:
  - semantic_only: gaming_phones_rio, hiker_adventures_zach, workwear_rugged_colt, athletic_fit_cole, kayak_adventures_lu
  - business_only: home_gym_builds, marathon_pac_kim, fishing_tales_bob, climbing_wall_finn, ski_season_vera
  - hybrid: home_gym_builds, marathon_pac_kim, fishing_tales_bob, climbing_wall_finn, ski_season_vera

