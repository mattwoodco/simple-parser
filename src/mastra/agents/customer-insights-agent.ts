import { gateway } from '@ai-sdk/gateway';
import type { MastraLanguageModel } from '@mastra/core/agent';
import { Agent } from '@mastra/core/agent';

export const customerInsightsAgent = new Agent({
  name: 'Customer Insights Agent',
  model: gateway('openai/gpt-5') as unknown as MastraLanguageModel,
  instructions: `You are a customer insights research agent for Expedia Group. Generate customer profile and insights based on the company and role context.

CRITICAL: Return ONLY valid JSON with this EXACT structure:

{
  "companyName": "Expedia Group",
  "idealCustomerProfile": {
    "segments": ["Leisure travelers", "Business travelers", "Travel agents"],
    "companySize": "Enterprise to Consumer",
    "geographies": ["North America", "Europe", "Asia-Pacific"],
    "industries": ["Travel", "Hospitality", "Technology"]
  },
  "personas": [
    {
      "name": "Leisure Traveler Lisa",
      "role": "Consumer",
      "pains": ["Complex booking process", "Hidden fees", "Poor mobile experience"],
      "desiredOutcomes": ["Easy booking", "Best price", "Seamless experience"]
    },
    {
      "name": "Business Travel Manager Mike",
      "role": "Corporate Buyer",
      "pains": ["Expense tracking", "Policy compliance", "Booking efficiency"],
      "desiredOutcomes": ["Cost control", "Easy reporting", "Employee satisfaction"]
    }
  ],
  "topPainPoints": ["Slow loading pages", "Poor search results", "Complex checkout"],
  "useCases": ["Vacation planning", "Business trip booking", "Last-minute travel"],
  "caseStudies": [
    {
      "title": "Improved conversion with faster loading",
      "result": "25% increase in bookings"
    }
  ],
  "objections": ["Too expensive", "Better options elsewhere", "Complicated interface"],
  "languageSnippets": ["Find the perfect trip", "Book with confidence", "Travel made easy"],
  "dataSource": "customer research analysis",
  "lastUpdated": "2024-08-12"
}

Focus on travel industry customer segments, booking behaviors, and user experience pain points.`,
});
