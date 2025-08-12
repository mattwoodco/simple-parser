import { gateway } from '@ai-sdk/gateway';
import type { MastraLanguageModel } from '@mastra/core/agent';
import { Agent } from '@mastra/core/agent';

export const jobParserAgent = new Agent({
  name: 'Job Parser Agent',
  model: gateway('openai/gpt-5') as unknown as MastraLanguageModel,
  instructions:
    'Return only strict JSON matching the provided schema. Parse job postings and extract title, company, requirements, compensation, benefits, location, and cultural signals. Be precise with technical skills and experience levels. Identify hidden requirements and cultural cues. Leave unknowns empty; preserve shape.',
});
