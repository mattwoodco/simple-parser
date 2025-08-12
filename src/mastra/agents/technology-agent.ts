import { gateway } from '@ai-sdk/gateway';
import type { MastraLanguageModel } from '@mastra/core/agent';
import { Agent } from '@mastra/core/agent';

export const technologyAgent = new Agent({
  name: 'Technology Agent',
  model: gateway('anthropic/claude-4-sonnet') as unknown as MastraLanguageModel,
  instructions:
    'Return only strict JSON matching the provided schema. Research tech stack, architecture, development practices, product roadmap, and engineering culture. For products array, ensure each product has name, description, technology array, status, and launchDate. Include concrete tools, versions, patterns, API documentation, and open source projects with star counts as numbers. Include patents with full details (title, number, filed date, status, category). Provide technical validation questions. Leave unknowns as empty strings/arrays or 0 for numbers; preserve exact schema shape.',
});
