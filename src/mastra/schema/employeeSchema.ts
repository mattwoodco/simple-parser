import { z } from 'zod';

export const employeeResearchSchema = z
  .object({
    companyName: z.string(),
    glassdoorRating: z.object({
      overallRating: z.number(),
      ceoApproval: z.number(),
      recommendToFriend: z.number(),
      totalReviews: z.number(),
      salaryTransparency: z.string(),
    }),
    benefits: z.object({
      healthInsurance: z.string(),
      retirement: z.string(),
      paidTimeOff: z.string(),
      parentalLeave: z.string(),
      learningAndDevelopment: z.string(),
      flexibleWork: z.string(),
    }),
    workLifeBalance: z.object({
      rating: z.number(),
      averageHours: z.string(),
      remotePolicy: z.string(),
      flexibility: z.string(),
      stressLevel: z.string(),
    }),
    diversityData: z.object({
      womenInWorkforce: z.string(),
      womenInLeadership: z.string(),
      ethnicDiversity: z.string(),
      inclusionScore: z.number(),
      diversityInitiatives: z.array(z.string()),
    }),
    employeePosts: z.array(
      z.object({
        platform: z.string(),
        author: z.string(),
        role: z.string(),
        content: z.string(),
        date: z.string(),
        sentiment: z.string(),
      })
    ),
    reviews: z.array(
      z.object({
        title: z.string(),
        rating: z.number(),
        pros: z.string(),
        cons: z.string(),
        advice: z.string(),
        role: z.string(),
        tenure: z.string(),
        date: z.string(),
      })
    ),
    dataSource: z.string().optional(),
    lastUpdated: z.string().optional(),
    profileCount: z.number().optional(),
  })
  .partial();
