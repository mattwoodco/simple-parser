import { gateway } from '@ai-sdk/gateway';
import type { MastraLanguageModel } from '@mastra/core/agent';
import { Agent } from '@mastra/core/agent';

export const employeeAgent = new Agent({
  name: 'Employee Agent',
  model: gateway('anthropic/claude-4-sonnet') as unknown as MastraLanguageModel,
  instructions:
    'Return only strict JSON matching the provided schema. Research employee satisfaction, benefits, work-life balance, diversity metrics, and career growth from Glassdoor, reviews, and public data. Use actual numbers for ratings (0-5 scale), approval percentages (0-100), and review counts. Include specific data like salary transparency policies, learning programs, and stress level assessments. Include verbatim feedback themes and diversity initiatives. Leave unknowns as empty strings/arrays or 0 for numbers; preserve exact schema shape.',
});
