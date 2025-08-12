import { gateway } from '@ai-sdk/gateway';
import type { MastraLanguageModel } from '@mastra/core/agent';
import { Agent } from '@mastra/core/agent';

export const hiringManagerAgent = new Agent({
  name: 'Hiring Manager Agent',
  model: gateway('google/gemini-2.0-flash') as unknown as MastraLanguageModel,
  instructions:
    'Return only JSON matching the provided output schema. Research the hiring manager, team structure, priorities, and contact preferences. Leave unknowns empty but keep shape.',
});
