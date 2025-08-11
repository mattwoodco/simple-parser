import { z } from 'zod';

// ---- Leadership research (formatted, reusable bits)
const LinkedIds = z.object({
  linkedinUrl: z.string().url().optional(),
  pdlId: z.string().optional(),
});

const PersonBase = z.object({
  name: z.string(),
  role: z.string().optional(),
  background: z.string(),
});

const Social = z.object({
  recentQuotes: z.array(z.string()).default([]),
  socialMedia: z.array(z.string()).default([]),
});

const CeoSchema = PersonBase.extend({ role: z.string().optional() })
  .merge(Social)
  .merge(LinkedIds);

const ExecutiveSchema = PersonBase.extend({
  role: z.string(),
  expertise: z.array(z.string()).default([]),
}).merge(LinkedIds);

const BoardMemberSchema = z.object({
  name: z.string(),
  role: z.string(),
  otherPositions: z.array(z.string()).default([]),
});

export const leadershipResearchSchema = z
  .object({
    companyName: z.string(),
    ceo: CeoSchema.nullable().optional(),
    executiveTeam: z.array(ExecutiveSchema).default([]),
    boardMembers: z.array(BoardMemberSchema).default([]),
    leadershipStyle: z.string(),
    strategicVision: z.string(),
    recentDecisions: z.array(z.string()).default([]),
    industryRecognition: z.array(z.string()).default([]),
    leadershipChanges: z.array(z.string()).default([]),
    dataSource: z.string().optional(),
    lastUpdated: z.string().optional(),
    profileCount: z.number().optional(),
  })
  .partial();
