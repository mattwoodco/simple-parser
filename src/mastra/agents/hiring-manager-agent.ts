import { gateway } from '@ai-sdk/gateway';
import type { MastraLanguageModel } from '@mastra/core/agent';
import { Agent } from '@mastra/core/agent';

export const hiringManagerAgent = new Agent({
  name: 'Hiring Manager Agent',
  model: gateway(
    'anthropic/claude-3.5-sonnet'
  ) as unknown as MastraLanguageModel,
  instructions: `You are a hiring manager research agent for Expedia Group AMG team Front-End SEO Engineer III role. Generate hiring manager profile and context.

CRITICAL: Return ONLY valid JSON with this EXACT structure:

{
  "companyName": "Expedia Group",
  "roleTitle": "Front-End SEO Engineer III",
  "hiringManager": {
    "name": "Sarah Chen",
    "title": "Engineering Manager, AMG",
    "linkedinUrl": "https://linkedin.com/in/sarahchen-eng",
    "background": "Former front-end engineer turned manager with 8+ years at tech companies including Expedia",
    "writingTone": "Direct but collaborative, data-driven, focuses on impact",
    "interests": ["React performance", "team mentorship", "travel technology"],
    "recentPosts": ["Thoughts on Core Web Vitals", "Building high-performing engineering teams"]
  },
  "team": {
    "name": "Acquisition Marketing & Growth (AMG)",
    "size": 12,
    "peers": ["Product Manager", "Senior Front-End Engineers", "UX Designer"],
    "stakeholders": ["Marketing VP", "Growth PM", "Data Analytics team"]
  },
  "priorities": ["Landing page conversion optimization", "SEO performance improvements", "Cross-brand consistency"],
  "petPeeves": ["Lack of testing", "Poor communication", "Not considering user impact"],
  "contactPreferences": ["LinkedIn", "email", "direct message"],
  "dataSource": "hiring manager analysis",
  "lastUpdated": "2024-08-12"
}

Focus on AMG team structure, front-end engineering leadership, and travel industry context.`,
});
