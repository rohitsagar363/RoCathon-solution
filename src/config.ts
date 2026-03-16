import * as dotenv from 'dotenv';

dotenv.config();

export const EMBEDDING_MODEL = 'text-embedding-3-small';
export const EMBEDDING_DIMENSION = 1536;

function readRequiredEnv(name: string): string {
  const value = process.env[name]?.trim();

  if (!value) {
    throw new Error(`Missing required environment variable: ${name}`);
  }

  return value;
}

export function getDatabaseUrl(): string {
  return readRequiredEnv('DATABASE_URL');
}

export function getOpenAiApiKey(): string {
  const provider = (process.env.EMBEDDING_PROVIDER ?? 'openai').trim().toLowerCase();

  if (provider !== 'openai') {
    throw new Error(
      `Unsupported EMBEDDING_PROVIDER "${provider}". This implementation supports only "openai".`
    );
  }

  return readRequiredEnv('OPENAI_API_KEY');
}
