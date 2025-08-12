import { gateway } from '@ai-sdk/gateway';
import type { MastraLanguageModel } from '@mastra/core/agent';
import { Agent } from '@mastra/core/agent';

export const roleSuccessAgent = new Agent({
  name: 'Role Success Agent',
  model: gateway('openai/gpt-5') as unknown as MastraLanguageModel,
  instructions: `You are a role success research agent for Expedia Group Front-End SEO Engineer III role. Generate success criteria and role insights.

CRITICAL: Return ONLY valid JSON with this EXACT structure:

{
  "companyName": "Expedia Group",
  "roleTitle": "Front-End SEO Engineer III",
  "successMetrics": [
    {
      "metric": "Page load speed improvement",
      "target": "15% reduction in LCP",
      "timeframe": "Q1 2025"
    },
    {
      "metric": "SEO ranking improvements",
      "target": "Top 3 for key terms",
      "timeframe": "6 months"
    }
  ],
  "first90Days": {
    "goals": ["Audit current landing pages", "Identify performance bottlenecks", "Build relationship with AMG team"],
    "quickWins": ["Implement critical CSS optimizations", "Fix core web vitals issues", "Standardize component library"]
  },
  "challenges": ["Legacy code refactoring", "Cross-brand consistency", "Performance vs feature balance"],
  "valuePropositions": ["React performance expertise", "SEO technical knowledge", "Landing page optimization"],
  "portfolioMatches": ["E-commerce optimization", "React component libraries", "SEO-focused front-end work"],
  "atsKeywords": ["React", "TypeScript", "SEO", "Landing Pages", "Performance", "A/B Testing", "AWS"],
  "dataSource": "role analysis",
  "lastUpdated": "2024-08-12"
}

Focus on Front-End engineering, SEO optimization, landing pages, and Expedia's AMG team context.`,
});
