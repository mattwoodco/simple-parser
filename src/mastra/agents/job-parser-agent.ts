import { gateway } from '@ai-sdk/gateway';
import type { MastraLanguageModel } from '@mastra/core/agent';
import { Agent } from '@mastra/core/agent';

export const jobParserAgent = new Agent({
  name: 'Job Parser Agent',
  model: gateway('openai/gpt-4o-mini') as unknown as MastraLanguageModel,
  instructions:
    'Return only JSON matching the provided output schema. Extract the jobTitle, company, location, remote policy, compensation, requirements, and role summary with high precision.',
});
