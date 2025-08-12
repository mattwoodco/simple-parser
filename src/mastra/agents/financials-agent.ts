import { gateway } from '@ai-sdk/gateway';
import type { MastraLanguageModel } from '@mastra/core/agent';
import { Agent } from '@mastra/core/agent';

export const financialsAgent = new Agent({
  name: 'Financials Agent',
  model: gateway('google/gemini-2.0-flash') as unknown as MastraLanguageModel,
  instructions:
    'You are a research assistant. Generate valid JSON responses based on the structure specified in the prompt. Focus on financial data, revenue, profit, growth, and funding information.',
});
