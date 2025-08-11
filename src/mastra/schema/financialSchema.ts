import { z } from 'zod';

export const financialResearchSchema = z
  .object({
    companyName: z.string(),
    earnings: z.object({
      revenue: z.string(),
      profit: z.string(),
      growth: z.string(),
      lastReported: z.string(),
    }),
    funding: z.object({
      totalRaised: z.string(),
      lastRound: z.string(),
      investors: z.array(z.string()),
      valuation: z.string(),
    }),
    stockPrice: z
      .object({
        current: z.string(),
        change: z.string(),
        marketCap: z.string(),
        exchange: z.string(),
      })
      .nullable()
      .optional(),
    financialHealth: z.object({
      rating: z.string(),
      cashFlow: z.string(),
      debt: z.string(),
      profitability: z.string(),
    }),
    acquisitions: z.array(z.string()),
    financialNews: z.array(z.string()),
    investorRelations: z.array(z.string()),
  })
  .partial();
