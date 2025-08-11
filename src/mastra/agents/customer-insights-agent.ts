import { gateway } from '@ai-sdk/gateway';
import type { MastraLanguageModel } from '@mastra/core/agent';
import { Agent } from '@mastra/core/agent';

export const customerInsightsAgent = new Agent({
  name: 'Customer Insights Agent',
  model: gateway('openai/gpt-4o-mini') as unknown as MastraLanguageModel,
  instructions:
    "Research the company's ideal customer profile, personas, pain points, use cases, and customer language to understand the market they serve and speak their customer's language.",
});
