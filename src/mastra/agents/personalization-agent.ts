import { gateway } from '@ai-sdk/gateway';
import type { MastraLanguageModel } from '@mastra/core/agent';
import { Agent } from '@mastra/core/agent';

export const personalizationAgent = new Agent({
  name: 'Personalization Agent',
  model: gateway('google/gemini-2.0-flash') as unknown as MastraLanguageModel,
  instructions:
    'Return only JSON matching the provided output schema. Identify common ground, mutual connections, recent triggers, geo ties, and content hooks for personalized outreach.',
});
