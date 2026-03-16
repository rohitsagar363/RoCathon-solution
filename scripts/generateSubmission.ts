import { mkdir, writeFile } from 'node:fs/promises';
import path from 'node:path';

import { closePool } from '../src/db';
import { explainRankedCreators } from '../src/explain';
import { searchCreators } from '../src/searchCreators';
import { getBrandProfile } from './brands';

const DEFAULT_BRAND_ID = 'brand_smart_home';
const DEFAULT_QUERY = 'Affordable home decor for small apartments';
const DEFAULT_OUTPUT_PATH = path.resolve(__dirname, '..', 'output', 'brand_smart_home.json');
const DEFAULT_TRACKED_OUTPUT_PATH = path.resolve(
  __dirname,
  '..',
  'submissions',
  'brand_smart_home.json'
);
const DEFAULT_EXPLAIN_OUTPUT_PATH = path.resolve(
  __dirname,
  '..',
  'submissions',
  'brand_smart_home_explain.json'
);

async function writeJsonFile(filePath: string, value: unknown): Promise<void> {
  await mkdir(path.dirname(filePath), { recursive: true });
  await writeFile(filePath, `${JSON.stringify(value, null, 2)}\n`, 'utf8');
}

async function main(): Promise<void> {
  const brandId = process.argv[2] ?? DEFAULT_BRAND_ID;
  const query = process.argv[3] ?? DEFAULT_QUERY;
  const outputPath = process.argv[4] ?? DEFAULT_OUTPUT_PATH;

  const brandProfile = getBrandProfile(brandId);
  const results = await searchCreators(query, brandProfile);
  const topTen = results.slice(0, 10);
  const explanations = explainRankedCreators(topTen, brandProfile, query);

  await writeJsonFile(outputPath, topTen);
  await writeJsonFile(DEFAULT_TRACKED_OUTPUT_PATH, topTen);
  await writeJsonFile(DEFAULT_EXPLAIN_OUTPUT_PATH, explanations);

  console.log(`Wrote ${topTen.length} ranked creators to ${outputPath}`);
  console.log(`Wrote tracked submission to ${DEFAULT_TRACKED_OUTPUT_PATH}`);
  console.log(`Wrote explainability artifact to ${DEFAULT_EXPLAIN_OUTPUT_PATH}`);
}

main()
  .catch((error) => {
    console.error(error);
    process.exitCode = 1;
  })
  .finally(async () => {
    await closePool();
  });
