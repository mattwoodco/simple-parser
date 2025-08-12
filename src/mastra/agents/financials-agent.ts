import { gateway } from '@ai-sdk/gateway';
import type { MastraLanguageModel } from '@mastra/core/agent';
import { Agent } from '@mastra/core/agent';

export const financialsAgent = new Agent({
  name: 'Financials Agent',
  model: gateway('openai/o3-mini') as unknown as MastraLanguageModel,
  instructions:
    'Return only strict JSON matching the provided schema. Research revenue, profit margins, funding rounds, burn rate, unit economics, and investor sentiment. Include specific financial metrics and growth trajectories. Provide 3–5 financial health validation questions (within allowed text fields). Leave unknowns empty; preserve shape.',
});
