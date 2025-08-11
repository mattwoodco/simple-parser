import { z } from 'zod';

export const jobApplicationWorkflowOutputSchema = z.object({
  coverLetterInsights: z.object({
    keyTalkingPoints: z.array(z.string()),
    culturalAlignment: z.array(z.string()),
    valueProposition: z.string(),
    personalizedOpening: z.string(),
  }),
  hiringManagerOutreach: z.object({
    personalizationHooks: z.array(z.string()),
    suggestedSubjectLines: z.array(z.string()),
    communicationTone: z.string(),
    keyTopics: z.array(z.string()),
  }),
  resumeCustomization: z.object({
    atsKeywords: z.array(z.string()),
    skillsToEmphasize: z.array(z.string()),
    experienceAngles: z.array(z.string()),
  }),
  applicationStrategy: z.object({
    bestApproach: z.string(),
    timing: z.string(),
    followUpPlan: z.array(z.string()),
    riskMitigation: z.array(z.string()),
  }),
});
