import { gateway } from '@ai-sdk/gateway';
import type { MastraLanguageModel } from '@mastra/core/agent';
import { Agent } from '@mastra/core/agent';

export const synthesizeAgent = new Agent({
  name: 'Synthesize Agent',
  model: gateway('google/gemini-2.0-flash') as unknown as MastraLanguageModel,
  instructions: `You are a structured-output model. Always return strictly valid JSON that matches the provided output schema exactly.

Rules:
- Do not include any prose outside JSON.
- Do not add extra keys or omit required ones from the provided schema.
- Keep answers specific, concise, and actionable.
- When synthesizing research, integrate signals across news, leadership, financials, social media, employees, technology, and market when available.`,
});
