import { gateway } from '@ai-sdk/gateway';
import type { MastraLanguageModel } from '@mastra/core/agent';
import { Agent } from '@mastra/core/agent';

export const companyCultureAgent = new Agent({
  name: 'Company Culture Agent',
  model: gateway('google/gemini-2.0-flash') as unknown as MastraLanguageModel,
  instructions:
    'Return only JSON matching the provided output schema. Summarize mission, values, culture, rituals, and employer brand. Keep it grounded and concise.',
});
