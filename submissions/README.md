# Submission Artifacts

This folder contains tracked submission artifacts that are safe to commit:

- `brand_smart_home.json`: the current top-10 submission file
- `brand_smart_home_explain.json`: score breakdowns and rationale for the top 10
- `evaluation-report.json`: benchmark results across multiple queries and brands
- `evaluation-report.md`: human-readable evaluation summary

Regenerate these files with:

```bash
npm run submit:smart-home
npm run evaluate
```
