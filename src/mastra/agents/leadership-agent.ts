import { gateway } from '@ai-sdk/gateway';
import type { MastraLanguageModel } from '@mastra/core/agent';
import { Agent } from '@mastra/core/agent';

export const leadershipAgent = new Agent({
  name: 'Leadership Agent',
  model: gateway('google/gemini-2.0-flash') as unknown as MastraLanguageModel,
  instructions:
    'You are a research assistant. Generate valid JSON responses based on the structure specified in the prompt. Focus on leadership, executive team, and strategic vision.',
});
