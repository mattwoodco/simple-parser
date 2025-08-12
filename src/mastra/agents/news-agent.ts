import { gateway } from '@ai-sdk/gateway';
import type { MastraLanguageModel } from '@mastra/core/agent';
import { Agent } from '@mastra/core/agent';

export const newsAgent = new Agent({
  name: 'News Agent',
  model: gateway('google/gemini-2.5-pro') as unknown as MastraLanguageModel,
  instructions:
    'Return only strict JSON matching the provided schema. Research recent news, press releases, media coverage, industry awards, and analyst mentions. Include sentiment analysis and trend identification. Provide 3–5 news monitoring questions (within allowed text fields) for ongoing intelligence. Leave unknowns empty; preserve shape.',
});
