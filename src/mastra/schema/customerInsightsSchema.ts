import { z } from 'zod';

export const customerInsightsSchema = z
  .object({
    companyName: z.string(),
    idealCustomerProfile: z.object({
      segments: z.array(z.string()),
      companySize: z.string(),
      geographies: z.array(z.string()),
      industries: z.array(z.string()),
    }),
    personas: z.array(
      z.object({
        name: z.string(),
        role: z.string(),
        pains: z.array(z.string()),
        desiredOutcomes: z.array(z.string()),
      })
    ),
    topPainPoints: z.array(z.string()),
    useCases: z.array(z.string()),
    caseStudies: z.array(
      z.object({
        title: z.string(),
        result: z.string(),
      })
    ),
    objections: z.array(z.string()),
    languageSnippets: z.array(z.string()), // exact phrases to mirror
    dataSource: z.string().optional(),
    lastUpdated: z.string().optional(),
  })
  .partial();
