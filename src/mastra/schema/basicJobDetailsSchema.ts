import { z } from 'zod';
// ---- Job posting schemas
export const basicJobDetailsSchema = z
  .object({
    // Core job info
    jobTitle: z.string().describe('The job title'),
    jobDescription: z.string().describe('The job description'),
    company: z.string().describe('The company name'),
    industry: z.string().describe('The industry'),
    department: z.string().describe('The department'),
    jobFunction: z.string().describe('The job function'),

    // Location & policy
    location: z.string().describe('The location'),
    remotePolicy: z
      .enum(['remote', 'on-site', 'hybrid', 'not specified'])
      .describe('The remote policy'),
    postedDate: z.string().describe('The posted date'),

    // Compensation & benefits
    payRange: z.string().describe('The salary/pay range'),
    benefitsPackage: z.string().describe('The benefits package'),

    // Role type & requirements
    employmentType: z.string().describe('The employment type'),
    experienceLevel: z.string().describe('The experience level'),
    yearsExperience: z.string().describe('The years of experience'),
    educationRequirements: z.string().describe('The education requirements'),
    requiredSkills: z.array(z.string()).describe('The required skills'),
  })
  .partial();
