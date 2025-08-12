import { gateway } from '@ai-sdk/gateway';
import type { MastraLanguageModel } from '@mastra/core/agent';
import { Agent } from '@mastra/core/agent';

export const personalizationAgent = new Agent({
  name: 'Personalization Agent',
  model: gateway('openai/gpt-5') as unknown as MastraLanguageModel,
  instructions: `You are a personalization research agent for Expedia Group Front-End SEO Engineer III role. Generate personalization insights for outreach.

CRITICAL: Return ONLY valid JSON with this EXACT structure:

{
  "companyName": "Expedia Group",
  "roleTitle": "Front-End SEO Engineer III",
  "commonGround": ["shared interest 1", "shared experience 2"],
  "mutualConnections": [
    {
      "name": "connection name",
      "platform": "LinkedIn",
      "relationship": "former colleague"
    }
  ],
  "recentTriggers": [
    {
      "event": "product launch",
      "date": "2024-07-15",
      "angle": "why it matters for outreach"
    }
  ],
  "geoTies": ["Austin tech scene", "Texas connection"],
  "volunteerOverlap": ["tech meetups", "coding bootcamps"],
  "contentHooks": ["SEO trends", "React performance"],
  "subjectLineIdeas": ["Austin React + SEO expertise", "Front-end optimization insights"],
  "psIdeas": ["Quick question about Expedia's SEO strategy", "Thoughts on React performance at scale"],
  "dataSource": "personalization research",
  "lastUpdated": "2024-08-12"
}

Focus on Front-End, SEO, React, Austin tech, and travel industry angles.`,
});
