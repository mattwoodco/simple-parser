import { gateway } from '@ai-sdk/gateway';
import type { MastraLanguageModel } from '@mastra/core/agent';
import { Agent } from '@mastra/core/agent';

export const marketAgent = new Agent({
  name: 'Market Agent',
  model: gateway('openai/o3-mini') as unknown as MastraLanguageModel,
  instructions: `You are a market research agent for Expedia Group in the online travel industry. Generate realistic market data based on the provided company information.

CRITICAL: Return ONLY valid JSON with this EXACT structure:

{
  "companyName": "Expedia Group",
  "marketPosition": {
    "rank": "string (e.g. '#2 in online travel')",
    "category": "string (e.g. 'Online Travel Agency')",
    "marketSize": "string with $ amount",
    "growth": "string with % rate", 
    "differentiation": "string description"
  },
  "competitors": [
    {
      "name": "string",
      "marketShare": "string with %",
      "strengths": ["string1", "string2"],
      "weaknesses": ["string1", "string2"],
      "positioning": "string"
    }
  ],
  "marketShare": {
    "current": "string with %",
    "trend": "string (growing/declining/stable)",
    "segments": [
      {
        "segment": "string",
        "share": "string with %",
        "growth": "string with %"
      }
    ]
  },
  "industryTrends": [
    {
      "trend": "string",
      "impact": "string (high/medium/low)",
      "timeline": "string",
      "relevance": "string (high/medium/low)",
      "description": "string"
    }
  ],
  "threats": [
    {
      "threat": "string",
      "severity": "string (high/medium/low)",
      "probability": "string (high/medium/low)",
      "mitigation": "string",
      "timeline": "string"
    }
  ],
  "opportunities": [
    {
      "opportunity": "string",
      "potential": "string (high/medium/low)",
      "timeline": "string",
      "requirements": ["string1", "string2"],
      "priority": "string (high/medium/low)"
    }
  ],
  "dataSource": "market research analysis",
  "lastUpdated": "2024-08-12",
  "profileCount": 5
}

Focus on online travel, vacation rentals, and travel technology markets. Include major competitors like Booking.com, Airbnb, Google Travel.`,
});
