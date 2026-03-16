import { closePool } from '../src/db';
import { searchCreators } from '../src/searchCreators';
import { DEMO_RUNS, getBrandProfile } from './brands';

async function main(): Promise<void> {
  for (const run of DEMO_RUNS) {
    const brandProfile = getBrandProfile(run.brandId);
    const results = await searchCreators(run.query, brandProfile);

    console.log(`\n=== ${run.brandId} :: ${run.query} ===`);

    for (const creator of results.slice(0, 5)) {
      console.log(
        `${creator.username} | final=${creator.scores.final_score.toFixed(4)} | semantic=${creator.scores.semantic_score.toFixed(4)} | projected=${creator.scores.projected_score.toFixed(2)} | GMV=${creator.metrics.total_gmv_30d} | GPM=${creator.metrics.gpm}`
      );
    }
  }
}

main()
  .catch((error) => {
    console.error(error);
    process.exitCode = 1;
  })
  .finally(async () => {
    await closePool();
  });
