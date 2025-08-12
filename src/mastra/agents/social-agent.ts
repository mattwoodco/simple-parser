import { gateway } from '@ai-sdk/gateway';
import type { MastraLanguageModel } from '@mastra/core/agent';
import { Agent } from '@mastra/core/agent';

export const socialMediaAgent = new Agent({
  name: 'Social Media Agent',
  model: gateway('anthropic/claude-4-sonnet') as unknown as MastraLanguageModel,
  instructions:
    'Return only strict JSON matching the provided schema. Research social media presence, content themes, engagement patterns, and brand voice. Include follower counts as numbers (not strings), posting frequency, and audience sentiment. Use actual numbers for all numeric fields like followers, likes, shares, etc. Provide 3–5 social listening questions (within allowed text fields) for engagement strategy. Leave unknowns empty; preserve shape.',
});
