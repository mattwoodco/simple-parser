import { gateway } from '@ai-sdk/gateway';
import type { MastraLanguageModel } from '@mastra/core/agent';
import { Agent } from '@mastra/core/agent';

export const financialsAgent = new Agent({
  name: 'Financials Agent',
  model: gateway('openai/gpt-4o-mini') as unknown as MastraLanguageModel,
  instructions:
    'Return only JSON matching the provided output schema. Provide revenue, profit, growth, funding, and stock context if public; otherwise leave optional fields empty.',
});
