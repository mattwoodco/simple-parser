import { gateway } from '@ai-sdk/gateway';
import type { MastraLanguageModel } from '@mastra/core/agent';
import { Agent } from '@mastra/core/agent';

export const socialMediaAgent = new Agent({
  name: 'Social Media Agent',
  model: gateway('openai/gpt-4o-mini') as unknown as MastraLanguageModel,
  instructions:
    'Return only JSON matching the provided output schema. Summarize notable social posts and engagement. If unknown, keep schema shape with empty arrays.',
});
