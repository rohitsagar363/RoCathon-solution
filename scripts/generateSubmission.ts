import { mkdir, writeFile } from 'node:fs/promises';
import path from 'node:path';

import { closePool } from '../src/db';
import { searchCreators } from '../src/searchCreators';
import { getBrandProfile } from './brands';

const DEFAULT_BRAND_ID = 'brand_smart_home';
const DEFAULT_QUERY = 'Affordable home decor for small apartments';
const DEFAULT_OUTPUT_PATH = path.resolve(__dirname, '..', 'output', 'brand_smart_home.json');

async function main(): Promise<void> {
  const brandId = process.argv[2] ?? DEFAULT_BRAND_ID;
  const query = process.argv[3] ?? DEFAULT_QUERY;
  const outputPath = process.argv[4] ?? DEFAULT_OUTPUT_PATH;

  const brandProfile = getBrandProfile(brandId);
  const results = await searchCreators(query, brandProfile);
  const topTen = results.slice(0, 10);

  await mkdir(path.dirname(outputPath), { recursive: true });
  await writeFile(outputPath, `${JSON.stringify(topTen, null, 2)}\n`, 'utf8');

  console.log(`Wrote ${topTen.length} ranked creators to ${outputPath}`);
}

main()
  .catch((error) => {
    console.error(error);
    process.exitCode = 1;
  })
  .finally(async () => {
    await closePool();
  });
