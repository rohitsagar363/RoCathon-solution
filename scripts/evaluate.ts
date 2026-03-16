import { mkdir, writeFile } from 'node:fs/promises';
import path from 'node:path';

import { retrieveSemanticCandidates, closePool } from '../src/db';
import { buildQueryEmbeddingText, embedText } from '../src/embeddings';
import { explainRankedCreators } from '../src/explain';
import { buildScoreBreakdown, rerankCreators } from '../src/scoring';
import type { Industry } from '../src/types';
import { getBrandProfile } from './brands';
import { EVALUATION_CASES, type EvaluationCase } from './evaluationCases';

type ModeName = 'semantic_only' | 'business_only' | 'hybrid';

interface ModeSummary {
  mode: ModeName;
  top5: string[];
}

interface EvaluationCheck {
  name: string;
  pass: boolean;
  value: string;
}

interface EvaluationSummary {
  id: string;
  brandId: string;
  query: string;
  purpose: string;
  preferredIndustries: Industry[];
  expectations: EvaluationCase['expectations'];
  checks: EvaluationCheck[];
  passCount: number;
  failCount: number;
  top5: string[];
  metrics: {
    avg_final_score: number;
    avg_query_intent_score: number;
    avg_anchor_intent_score: number;
    avg_brand_industry_fit: number;
    avg_preferred_industry_fit: number;
    zero_gmv_in_top5: number;
    off_brand_industry_in_top5: number;
    off_preferred_industry_in_top5: number;
    missing_anchor_in_top5: number;
  };
  ablation: ModeSummary[];
}

interface AggregateSummary {
  total_cases: number;
  passing_cases: number;
  failing_cases: number;
  total_checks: number;
  passed_checks: number;
  failed_checks: number;
  case_pass_rate: number;
  check_pass_rate: number;
  by_brand: Array<{
    brandId: string;
    cases: number;
    passingCases: number;
    failingCases: number;
    passedChecks: number;
    totalChecks: number;
  }>;
  failure_hotspots: Array<{
    check: string;
    failures: number;
  }>;
  weakest_cases: Array<{
    id: string;
    brandId: string;
    failedChecks: number;
  }>;
}

interface EvaluationReport {
  generated_at: string;
  aggregate: AggregateSummary;
  cases: EvaluationSummary[];
}

function ratioOfIntersection(left: readonly string[], right: readonly string[]): number {
  if (right.length === 0) {
    return 0;
  }

  const leftSet = new Set(left);
  const overlap = right.filter((value) => leftSet.has(value)).length;

  return overlap / right.length;
}

function overlapsIndustry(tags: readonly string[], preferredIndustries: readonly string[]): boolean {
  if (preferredIndustries.length === 0) {
    return true;
  }

  const tagSet = new Set(tags);
  return preferredIndustries.some((industry) => tagSet.has(industry));
}

function sortSemanticOnly(candidates: Awaited<ReturnType<typeof retrieveSemanticCandidates>>) {
  return [...candidates].sort((left, right) => {
    if (right.semantic_score !== left.semantic_score) {
      return right.semantic_score - left.semantic_score;
    }

    return right.projected_score - left.projected_score;
  });
}

function sortBusinessOnly(
  candidates: Awaited<ReturnType<typeof retrieveSemanticCandidates>>,
  evaluationCase: EvaluationCase
) {
  const brandProfile = getBrandProfile(evaluationCase.brandId);

  return [...candidates].sort((left, right) => {
    const leftBreakdown = buildScoreBreakdown(left, brandProfile, evaluationCase.query);
    const rightBreakdown = buildScoreBreakdown(right, brandProfile, evaluationCase.query);
    const leftScore = leftBreakdown.business_score * leftBreakdown.penalty_multiplier;
    const rightScore = rightBreakdown.business_score * rightBreakdown.penalty_multiplier;

    if (rightScore !== leftScore) {
      return rightScore - leftScore;
    }

    return right.projected_score - left.projected_score;
  });
}

function summarizeCase(
  evaluationCase: EvaluationCase,
  topExplained: ReturnType<typeof explainRankedCreators>,
  ablation: ModeSummary[]
): EvaluationSummary {
  const top5 = topExplained.slice(0, 5);
  const preferredIndustries = evaluationCase.preferredIndustries;
  const avgFinal = top5.reduce((sum, creator) => sum + creator.scores.final_score, 0) / top5.length;
  const avgIntent =
    top5.reduce((sum, creator) => sum + creator.breakdown.query_intent_score, 0) / top5.length;
  const avgAnchor =
    top5.reduce((sum, creator) => sum + creator.breakdown.anchor_intent_score, 0) / top5.length;
  const avgBrandIndustry =
    top5.reduce((sum, creator) => sum + creator.breakdown.components.industry_fit, 0) / top5.length;
  const avgPreferredIndustry =
    top5.reduce(
      (sum, creator) =>
        sum + ratioOfIntersection(creator.content_style_tags, preferredIndustries),
      0
    ) / top5.length;
  const zeroGmv = top5.filter((creator) => creator.metrics.total_gmv_30d === 0).length;
  const offBrandIndustry = top5.filter((creator) => creator.breakdown.penalties.industry_mismatch).length;
  const offPreferredIndustry = top5.filter(
    (creator) => !overlapsIndustry(creator.content_style_tags, preferredIndustries)
  ).length;
  const missingAnchor = top5.filter((creator) => creator.breakdown.penalties.missing_anchor_intent).length;
  const expectations = evaluationCase.expectations;

  const checks: EvaluationCheck[] = [
    {
      name: 'Top 5 should avoid zero-GMV false positives',
      pass: zeroGmv <= expectations.maxZeroGmvTop5,
      value: `${zeroGmv} zero-GMV creators`
    },
    {
      name: 'Top 5 should mostly overlap brand industries',
      pass: offBrandIndustry <= expectations.maxBrandOffIndustryTop5,
      value: `${offBrandIndustry} off-brand creators`
    },
    {
      name: 'Top 5 should match query-specific preferred industries',
      pass: offPreferredIndustry <= expectations.maxPreferredOffIndustryTop5,
      value: `${offPreferredIndustry} off-preferred creators`
    },
    {
      name: 'Average query-intent should stay high',
      pass: avgIntent >= expectations.minAverageQueryIntent,
      value: avgIntent.toFixed(3)
    },
    {
      name: 'Average anchor-intent should stay meaningful',
      pass: avgAnchor >= expectations.minAverageAnchorIntent,
      value: avgAnchor.toFixed(3)
    },
    {
      name: 'Average preferred-industry fit should stay high',
      pass: avgPreferredIndustry >= expectations.minAveragePreferredIndustryFit,
      value: avgPreferredIndustry.toFixed(3)
    }
  ];

  return {
    id: evaluationCase.id,
    brandId: evaluationCase.brandId,
    query: evaluationCase.query,
    purpose: evaluationCase.purpose,
    preferredIndustries,
    expectations,
    checks,
    passCount: checks.filter((check) => check.pass).length,
    failCount: checks.filter((check) => !check.pass).length,
    top5: top5.map((creator) => creator.username),
    metrics: {
      avg_final_score: Number(avgFinal.toFixed(4)),
      avg_query_intent_score: Number(avgIntent.toFixed(4)),
      avg_anchor_intent_score: Number(avgAnchor.toFixed(4)),
      avg_brand_industry_fit: Number(avgBrandIndustry.toFixed(4)),
      avg_preferred_industry_fit: Number(avgPreferredIndustry.toFixed(4)),
      zero_gmv_in_top5: zeroGmv,
      off_brand_industry_in_top5: offBrandIndustry,
      off_preferred_industry_in_top5: offPreferredIndustry,
      missing_anchor_in_top5: missingAnchor
    },
    ablation
  };
}

function buildAggregate(cases: EvaluationSummary[]): AggregateSummary {
  const totalCases = cases.length;
  const passingCases = cases.filter((item) => item.failCount === 0).length;
  const totalChecks = cases.reduce((sum, item) => sum + item.checks.length, 0);
  const passedChecks = cases.reduce((sum, item) => sum + item.passCount, 0);
  const failureCounts = new Map<string, number>();

  for (const evaluationCase of cases) {
    for (const check of evaluationCase.checks) {
      if (!check.pass) {
        failureCounts.set(check.name, (failureCounts.get(check.name) ?? 0) + 1);
      }
    }
  }

  const brandSummaries = new Map<
    string,
    { cases: number; passingCases: number; passedChecks: number; totalChecks: number }
  >();

  for (const evaluationCase of cases) {
    const current = brandSummaries.get(evaluationCase.brandId) ?? {
      cases: 0,
      passingCases: 0,
      passedChecks: 0,
      totalChecks: 0
    };

    current.cases += 1;
    current.passingCases += evaluationCase.failCount === 0 ? 1 : 0;
    current.passedChecks += evaluationCase.passCount;
    current.totalChecks += evaluationCase.checks.length;
    brandSummaries.set(evaluationCase.brandId, current);
  }

  return {
    total_cases: totalCases,
    passing_cases: passingCases,
    failing_cases: totalCases - passingCases,
    total_checks: totalChecks,
    passed_checks: passedChecks,
    failed_checks: totalChecks - passedChecks,
    case_pass_rate: Number((passingCases / totalCases).toFixed(4)),
    check_pass_rate: Number((passedChecks / totalChecks).toFixed(4)),
    by_brand: [...brandSummaries.entries()].map(([brandId, value]) => ({
      brandId,
      cases: value.cases,
      passingCases: value.passingCases,
      failingCases: value.cases - value.passingCases,
      passedChecks: value.passedChecks,
      totalChecks: value.totalChecks
    })),
    failure_hotspots: [...failureCounts.entries()]
      .map(([check, failures]) => ({ check, failures }))
      .sort((left, right) => right.failures - left.failures),
    weakest_cases: [...cases]
      .sort((left, right) => {
        if (right.failCount !== left.failCount) {
          return right.failCount - left.failCount;
        }

        return left.id.localeCompare(right.id);
      })
      .slice(0, 10)
      .map((item) => ({
        id: item.id,
        brandId: item.brandId,
        failedChecks: item.failCount
      }))
  };
}

function renderMarkdownReport(report: EvaluationReport): string {
  const lines: string[] = [
    '# Hidden Test Benchmark',
    '',
    `Generated: ${report.generated_at}`,
    '',
    '## Summary',
    '',
    `- Cases: ${report.aggregate.total_cases}`,
    `- Passing cases: ${report.aggregate.passing_cases}`,
    `- Failing cases: ${report.aggregate.failing_cases}`,
    `- Case pass rate: ${report.aggregate.case_pass_rate}`,
    `- Total checks: ${report.aggregate.total_checks}`,
    `- Passed checks: ${report.aggregate.passed_checks}`,
    `- Failed checks: ${report.aggregate.failed_checks}`,
    `- Check pass rate: ${report.aggregate.check_pass_rate}`,
    '',
    '## Brand Breakdown',
    ''
  ];

  for (const brand of report.aggregate.by_brand) {
    lines.push(
      `- ${brand.brandId}: ${brand.passingCases}/${brand.cases} cases passing, ${brand.passedChecks}/${brand.totalChecks} checks passing`
    );
  }

  lines.push('', '## Failure Hotspots', '');

  if (report.aggregate.failure_hotspots.length === 0) {
    lines.push('- None');
  } else {
    for (const hotspot of report.aggregate.failure_hotspots.slice(0, 10)) {
      lines.push(`- ${hotspot.check}: ${hotspot.failures}`);
    }
  }

  lines.push('', '## Weakest Cases', '');

  for (const weakCase of report.aggregate.weakest_cases) {
    lines.push(`- ${weakCase.id} (${weakCase.brandId}): ${weakCase.failedChecks} failed checks`);
  }

  lines.push('', '## Case Results', '');

  for (const summary of report.cases) {
    lines.push(`### ${summary.id}`);
    lines.push('');
    lines.push(`- Brand: \`${summary.brandId}\``);
    lines.push(`- Query: "${summary.query}"`);
    lines.push(`- Purpose: ${summary.purpose}`);
    lines.push(`- Preferred industries: ${summary.preferredIndustries.join(', ')}`);
    lines.push(`- Hybrid top 5: ${summary.top5.join(', ')}`);
    lines.push(
      `- Metrics: avg_final=${summary.metrics.avg_final_score}, avg_query_intent=${summary.metrics.avg_query_intent_score}, avg_anchor_intent=${summary.metrics.avg_anchor_intent_score}, avg_brand_industry_fit=${summary.metrics.avg_brand_industry_fit}, avg_preferred_industry_fit=${summary.metrics.avg_preferred_industry_fit}, zero_gmv_top5=${summary.metrics.zero_gmv_in_top5}, off_brand_top5=${summary.metrics.off_brand_industry_in_top5}, off_preferred_top5=${summary.metrics.off_preferred_industry_in_top5}, missing_anchor_top5=${summary.metrics.missing_anchor_in_top5}`
    );
    lines.push('- Checks:');
    for (const check of summary.checks) {
      lines.push(`  - ${check.pass ? 'PASS' : 'FAIL'} ${check.name} (${check.value})`);
    }
    lines.push('- Ablation:');
    for (const mode of summary.ablation) {
      lines.push(`  - ${mode.mode}: ${mode.top5.join(', ')}`);
    }
    lines.push('');
  }

  return `${lines.join('\n')}\n`;
}

async function main(): Promise<void> {
  const evaluationSummaries: EvaluationSummary[] = [];

  for (const evaluationCase of EVALUATION_CASES) {
    const brandProfile = getBrandProfile(evaluationCase.brandId);
    const queryEmbedding = await embedText(buildQueryEmbeddingText(evaluationCase.query, brandProfile));
    const candidates = await retrieveSemanticCandidates(queryEmbedding, 50);
    const hybridResults = rerankCreators(candidates, brandProfile, evaluationCase.query);
    const explanations = explainRankedCreators(hybridResults.slice(0, 10), brandProfile, evaluationCase.query);

    const semanticOnly = sortSemanticOnly(candidates).slice(0, 5).map((creator) => creator.username);
    const businessOnly = sortBusinessOnly(candidates, evaluationCase)
      .slice(0, 5)
      .map((creator) => creator.username);

    evaluationSummaries.push(
      summarizeCase(evaluationCase, explanations, [
        { mode: 'semantic_only', top5: semanticOnly },
        { mode: 'business_only', top5: businessOnly },
        { mode: 'hybrid', top5: explanations.slice(0, 5).map((creator) => creator.username) }
      ])
    );
  }

  const report: EvaluationReport = {
    generated_at: new Date().toISOString(),
    aggregate: buildAggregate(evaluationSummaries),
    cases: evaluationSummaries
  };

  const submissionsDir = path.resolve(__dirname, '..', 'submissions');
  await mkdir(submissionsDir, { recursive: true });

  const jsonContent = `${JSON.stringify(report, null, 2)}\n`;
  const markdownContent = renderMarkdownReport(report);

  await writeFile(path.join(submissionsDir, 'evaluation-report.json'), jsonContent, 'utf8');
  await writeFile(path.join(submissionsDir, 'evaluation-report.md'), markdownContent, 'utf8');
  await writeFile(path.join(submissionsDir, 'hidden-test-benchmark.json'), jsonContent, 'utf8');
  await writeFile(path.join(submissionsDir, 'hidden-test-benchmark.md'), markdownContent, 'utf8');

  console.log(
    `Wrote hidden-test benchmark artifacts (${report.aggregate.passing_cases}/${report.aggregate.total_cases} cases passing) to ${submissionsDir}`
  );
}

main()
  .catch((error) => {
    console.error(error);
    process.exitCode = 1;
  })
  .finally(async () => {
    await closePool();
  });
