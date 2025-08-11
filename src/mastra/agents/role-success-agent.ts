import { gateway } from '@ai-sdk/gateway';
import type { MastraLanguageModel } from '@mastra/core/agent';
import { Agent } from '@mastra/core/agent';

export const roleSuccessAgent = new Agent({
  name: 'Role Success Agent',
  model: gateway('openai/gpt-4o-mini') as unknown as MastraLanguageModel,
  instructions:
    'Return only JSON matching the provided output schema. Provide success metrics, first-90-day goals, challenges, value propositions, portfolio matches, and ATS keywords.',
});
