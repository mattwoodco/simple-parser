import { z } from 'zod';

export const hiringManagerSchema = z
  .object({
    companyName: z.string(),
    roleTitle: z.string(),
    hiringManager: z.object({
      name: z.string(),
      title: z.string(),
      linkedinUrl: z.string().url().optional(),
      background: z.string(),
      writingTone: z.string(), // mirror in letter
      interests: z.array(z.string()),
      recentPosts: z.array(z.string()),
    }),
    team: z.object({
      name: z.string(),
      size: z.number(),
      peers: z.array(z.string()),
      stakeholders: z.array(z.string()),
    }),
    priorities: z.array(z.string()),
    petPeeves: z.array(z.string()),
    contactPreferences: z.array(z.string()), // e.g., LinkedIn, email, X
    dataSource: z.string().optional(),
    lastUpdated: z.string().optional(),
  })
  .partial();
