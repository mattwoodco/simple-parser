import { gateway } from '@ai-sdk/gateway';
import type { MastraLanguageModel } from '@mastra/core/agent';
import { Agent } from '@mastra/core/agent';

export const leadershipAgent = new Agent({
  name: 'Leadership Agent',
  model: gateway('openai/gpt-4o-mini') as unknown as MastraLanguageModel,
  instructions:
    'Return only JSON matching the provided output schema. Summarize CEO, exec team, board, style, and vision with cited facts where possible.',
});
