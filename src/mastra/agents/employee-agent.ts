import { gateway } from '@ai-sdk/gateway';
import type { MastraLanguageModel } from '@mastra/core/agent';
import { Agent } from '@mastra/core/agent';

export const employeeAgent = new Agent({
  name: 'Employee Agent',
  model: gateway('openai/gpt-4o-mini') as unknown as MastraLanguageModel,
  instructions:
    'Return only JSON matching the provided output schema. Summarize Glassdoor-like data and representative reviews; leave optional fields empty if unknown.',
});
