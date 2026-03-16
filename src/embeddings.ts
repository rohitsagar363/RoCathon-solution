import OpenAI from 'openai';

import { EMBEDDING_DIMENSION, EMBEDDING_MODEL, getOpenAiApiKey } from './config';
import type { BrandProfile, Creator } from './types';

let openAiClient: OpenAI | undefined;

function getOpenAiClient(): OpenAI {
  if (!openAiClient) {
    openAiClient = new OpenAI({ apiKey: getOpenAiApiKey() });
  }

  return openAiClient;
}

function validateEmbedding(embedding: number[]): number[] {
  if (embedding.length !== EMBEDDING_DIMENSION) {
    throw new Error(
      `Expected ${EMBEDDING_DIMENSION} dimensions from ${EMBEDDING_MODEL}, received ${embedding.length}.`
    );
  }

  return embedding;
}

export function buildCreatorEmbeddingText(creator: Creator): string {
  return `Bio: ${creator.bio}\nContent style tags: ${creator.content_style_tags.join(', ')}`;
}

export function buildQueryEmbeddingText(query: string, brandProfile: BrandProfile): string {
  return `Query: ${query}\nRelevant industries: ${brandProfile.industries.join(', ')}`;
}

export async function embedText(input: string): Promise<number[]> {
  const [embedding] = await embedTexts([input]);

  return embedding;
}

export async function embedTexts(inputs: string[]): Promise<number[][]> {
  if (inputs.length === 0) {
    return [];
  }

  const response = await getOpenAiClient().embeddings.create({
    model: EMBEDDING_MODEL,
    input: inputs
  });

  const embeddings = response.data
    .sort((left, right) => left.index - right.index)
    .map((item) => validateEmbedding(item.embedding));

  if (embeddings.length !== inputs.length) {
    throw new Error(`Expected ${inputs.length} embeddings, received ${embeddings.length}.`);
  }

  return embeddings;
}
