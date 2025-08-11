import { z } from 'zod';

export const roleSuccessCriteriaSchema = z
  .object({
    companyName: z.string(),
    roleTitle: z.string(),
    successMetrics: z.array(
      z.object({
        metric: z.string(),
        target: z.string(),
        timeframe: z.string(),
      })
    ),
    first90Days: z.object({
      goals: z.array(z.string()),
      quickWins: z.array(z.string()),
    }),
    challenges: z.array(z.string()),
    valuePropositions: z.array(z.string()), // angles you'll pitch
    portfolioMatches: z.array(z.string()),
    atsKeywords: z.array(z.string()),
    dataSource: z.string().optional(),
    lastUpdated: z.string().optional(),
  })
  .partial();
