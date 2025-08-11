import { z } from 'zod';

export const marketResearchSchema = z
  .object({
    companyName: z.string(),
    marketPosition: z.object({
      rank: z.string(),
      category: z.string(),
      marketSize: z.string(),
      growth: z.string(),
      differentiation: z.string(),
    }),
    competitors: z.array(
      z.object({
        name: z.string(),
        marketShare: z.string(),
        strengths: z.array(z.string()),
        weaknesses: z.array(z.string()),
        positioning: z.string(),
      })
    ),
    marketShare: z.object({
      current: z.string(),
      trend: z.string(),
      segments: z.array(
        z.object({
          segment: z.string(),
          share: z.string(),
          growth: z.string(),
        })
      ),
    }),
    industryTrends: z.array(
      z.object({
        trend: z.string(),
        impact: z.string(),
        timeline: z.string(),
        relevance: z.string(),
        description: z.string(),
      })
    ),
    threats: z.array(
      z.object({
        threat: z.string(),
        severity: z.string(),
        probability: z.string(),
        mitigation: z.string(),
        timeline: z.string(),
      })
    ),
    opportunities: z.array(
      z.object({
        opportunity: z.string(),
        potential: z.string(),
        timeline: z.string(),
        requirements: z.array(z.string()),
        priority: z.string(),
      })
    ),
    dataSource: z.string().optional(),
    lastUpdated: z.string().optional(),
    profileCount: z.number().optional(),
  })
  .partial();
