import { z } from 'zod';

// ---- News research
export const newsSchema = z
  .object({
    companyName: z.string(),
    recentArticles: z.array(
      z.object({
        title: z.string(),
        source: z.string(),
        date: z.string(),
        sentiment: z.string(),
        summary: z.string(),
      })
    ),
    pressReleases: z.array(
      z.object({
        title: z.string(),
        date: z.string(),
        category: z.string(),
        summary: z.string(),
      })
    ),
    awards: z.array(
      z.object({
        award: z.string(),
        organization: z.string(),
        date: z.string(),
        category: z.string(),
      })
    ),
    mediaAppearances: z.array(
      z.object({
        person: z.string(),
        event: z.string(),
        date: z.string(),
        topic: z.string(),
      })
    ),
    industryMentions: z.array(
      z.object({
        publication: z.string(),
        context: z.string(),
        date: z.string(),
        relevance: z.string(),
      })
    ),
    sentiment: z.object({
      overall: z.string(),
      mediaScore: z.number(),
      trendDirection: z.string(),
      keyThemes: z.array(z.string()),
    }),
  })
  .partial();
