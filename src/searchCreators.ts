import type { BrandProfile, RankedCreator } from './types';
import { retrieveSemanticCandidates } from './db';
import { buildQueryEmbeddingText, embedText } from './embeddings';
import { rerankCreators } from './scoring';

/**
 * Search and rank creators for a given natural-language query and brand profile.
 *
 * Retrieval stays semantic. Commerce signals are applied only in the reranker.
 */
export async function searchCreators(
  query: string,
  brandProfile: BrandProfile
): Promise<RankedCreator[]> {
  const sanitizedQuery = query.trim();

  if (!sanitizedQuery) {
    return [];
  }

  const queryEmbedding = await embedText(buildQueryEmbeddingText(sanitizedQuery, brandProfile));
  const candidates = await retrieveSemanticCandidates(queryEmbedding, 50);

  return rerankCreators(candidates, brandProfile, sanitizedQuery);
}
