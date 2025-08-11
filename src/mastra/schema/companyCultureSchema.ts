import { z } from 'zod';

export const companyCultureSchema = z
  .object({
    companyName: z.string(),
    mission: z.string(),
    values: z.array(z.string()),
    cultureDescriptors: z.array(z.string()),
    communicationStyle: z.string(), // e.g., direct, formal, playful
    decisionMaking: z.string(), // e.g., data-driven, consensus
    workStyle: z.string(), // e.g., async-first, office-centric
    rituals: z.array(z.string()),
    communityInvolvement: z.array(z.string()),
    employerBrand: z.object({
      evp: z.string(), // employee value proposition
      careerSiteThemes: z.array(z.string()),
      toneOfVoice: z.string(),
    }),
    dataSource: z.string().optional(),
    lastUpdated: z.string().optional(),
  })
  .partial();
