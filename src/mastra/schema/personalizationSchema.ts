import { z } from 'zod';

export const personalizationSchema = z
  .object({
    companyName: z.string(),
    roleTitle: z.string(),
    commonGround: z.array(z.string()),
    mutualConnections: z.array(
      z.object({
        name: z.string(),
        platform: z.string(),
        relationship: z.string(),
      })
    ),
    recentTriggers: z.array(
      z.object({
        event: z.string(), // funding, launch, award, post
        date: z.string(),
        angle: z.string(), // why it matters to your pitch
      })
    ),
    geoTies: z.array(z.string()),
    volunteerOverlap: z.array(z.string()),
    contentHooks: z.array(z.string()),
    subjectLineIdeas: z.array(z.string()),
    psIdeas: z.array(z.string()),
    dataSource: z.string().optional(),
    lastUpdated: z.string().optional(),
  })
  .partial();
