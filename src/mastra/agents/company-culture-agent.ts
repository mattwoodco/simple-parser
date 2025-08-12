import { gateway } from '@ai-sdk/gateway';
import type { MastraLanguageModel } from '@mastra/core/agent';
import { Agent } from '@mastra/core/agent';

export const companyCultureAgent = new Agent({
  name: 'Company Culture Agent',
  model: gateway('openai/gpt-5') as unknown as MastraLanguageModel,
  instructions:
    'Return only strict JSON matching the provided schema. Distill mission, values, leadership tone, rituals, talent brand, and DEI stance. Contrast stated culture vs. inferred reality when signals allow. Keep it crisp, grounded, and occasionally witty. Add 3–5 culture-specific validation prompts (within allowed text fields) to guide further research.',
});
