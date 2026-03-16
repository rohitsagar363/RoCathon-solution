import assert from 'node:assert/strict';
import test from 'node:test';

import { getCreatorCount, closePool } from '../src/db';
import { searchCreators } from '../src/searchCreators';
import { getBrandProfile } from '../scripts/brands';

const hasRuntimeEnv = Boolean(process.env.OPENAI_API_KEY && process.env.DATABASE_URL);

(hasRuntimeEnv ? test : test.skip)(
  'search smoke test returns deterministic ranked creators after ingest',
  async () => {
    const creatorCount = await getCreatorCount();

    assert.equal(creatorCount, 200, 'Expected 200 creators in Postgres. Run npm run ingest first.');

    const query = 'Affordable home decor for small apartments';
    const brandProfile = getBrandProfile('brand_smart_home');
    const firstRun = await searchCreators(query, brandProfile);
    const secondRun = await searchCreators(query, brandProfile);

    assert.equal(firstRun.length, 50);
    assert.equal(firstRun[0].scores.final_score >= firstRun[1].scores.final_score, true);
    assert.deepEqual(
      firstRun.slice(0, 10).map((creator) => creator.username),
      secondRun.slice(0, 10).map((creator) => creator.username)
    );
  }
);

test.after(async () => {
  await closePool();
});
