import { z } from 'zod';

export const technologyResearchSchema = z
  .object({
    companyName: z.string(),
    techStack: z.object({
      frontend: z.array(z.string()),
      backend: z.array(z.string()),
      databases: z.array(z.string()),
      cloud: z.array(z.string()),
      devops: z.array(z.string()),
      monitoring: z.array(z.string()),
    }),
    products: z.array(
      z.object({
        name: z.string(),
        description: z.string(),
        technology: z.array(z.string()),
        status: z.string(),
        launchDate: z.string(),
      })
    ),
    apis: z.object({
      public: z.array(
        z.object({
          name: z.string(),
          version: z.string(),
          documentation: z.string(),
          usage: z.string(),
        })
      ),
      internal: z.array(z.string()),
    }),
    openSource: z.array(
      z.object({
        project: z.string(),
        language: z.string(),
        stars: z.number(),
        description: z.string(),
        lastUpdated: z.string(),
      })
    ),
    patents: z.array(
      z.object({
        title: z.string(),
        number: z.string(),
        filed: z.string(),
        status: z.string(),
        category: z.string(),
      })
    ),
    roadmap: z.object({
      shortTerm: z.array(z.string()),
      longTerm: z.array(z.string()),
      researchAreas: z.array(z.string()),
    }),
    architecture: z.object({
      style: z.string(),
      scalability: z.string(),
      security: z.string(),
      performance: z.string(),
      reliability: z.string(),
    }),
    dataSource: z.string().optional(),
    lastUpdated: z.string().optional(),
  })
  .partial();
