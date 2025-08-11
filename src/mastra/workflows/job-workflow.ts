import { createTool } from '@mastra/core/tools';
import { createStep, createWorkflow } from '@mastra/core/workflows';
import { z } from 'zod';
import { companyCultureAgent } from '../agents/company-culture-agent';
import { customerInsightsAgent } from '../agents/customer-insights-agent';
import { employeeAgent } from '../agents/employee-agent';
import { financialsAgent } from '../agents/financials-agent';
import { hiringManagerAgent } from '../agents/hiring-manager-agent';
import { jobParserAgent } from '../agents/job-parser-agent';
import { leadershipAgent } from '../agents/leadership-agent';
import { marketAgent } from '../agents/market-agent';
import { newsAgent } from '../agents/news-agent';
import { personalizationAgent } from '../agents/personalization-agent';
import { roleSuccessAgent } from '../agents/role-success-agent';
import { socialMediaAgent } from '../agents/social-agent';
import { synthesizeAgent } from '../agents/synthesize-agent';
import { technologyAgent } from '../agents/technology-agent';
import { basicJobDetailsSchema } from '../schema/basicJobDetailsSchema';
import { companyCultureSchema } from '../schema/companyCultureSchema';
import { customerInsightsSchema } from '../schema/customerInsightsSchema';
import { employeeResearchSchema } from '../schema/employeeSchema';
import { financialResearchSchema } from '../schema/financialSchema';
import { hiringManagerSchema } from '../schema/hiringManagerSchema';
import { jobApplicationWorkflowOutputSchema } from '../schema/jobApplicationWorkflowOutputSchema';
import { leadershipResearchSchema } from '../schema/leadershipSchema';
import { marketResearchSchema } from '../schema/marketSchema';
import { newsSchema } from '../schema/newsSchema';
import { personalizationSchema } from '../schema/personalizationSchema';
import { roleSuccessCriteriaSchema } from '../schema/roleSuccessCriteriaSchema';
import { socialMediaResearchSchema } from '../schema/socialMediaSchema';
import { technologyResearchSchema } from '../schema/technologySchema';

// Reusable schema for synthesized research to keep types consistent across steps
const synthesisSchema = z.object({
  report: z.string(),
  keyInsights: z.array(z.string()),
  recommendations: z.array(z.string()),
  riskFactors: z.array(z.string()),
  opportunityScore: z.number(),
});

function parseJsonWithSchema<TSchema extends z.ZodType<unknown>>(
  text: string,
  schema: TSchema
): z.infer<TSchema> {
  try {
    const json = JSON.parse(text);
    const parsed = schema.safeParse(json);
    if (parsed.success) {
      return parsed.data as z.infer<TSchema>;
    }
  } catch {
    // ignore parse errors and return schema default
  }
  // Fallback to empty object parsed through schema (assumes root is partial)
  return schema.parse({}) as z.infer<TSchema>;
}

const parseJobTool = createTool({
  id: 'Parse Job',
  description: 'Parse step data using flexible validation',
  inputSchema: z.object({ rawText: z.string() }),
  outputSchema: basicJobDetailsSchema,
  execute: async ({ context }, _options) => {
    const result = await jobParserAgent.generate(context.rawText);
    return parseJsonWithSchema(result.text, basicJobDetailsSchema);
  },
});

export const parseJobStep = createStep(parseJobTool);

const newsResearchTool = createTool({
  id: 'News Research',
  description: 'Research the news about the company',
  inputSchema: basicJobDetailsSchema,
  outputSchema: newsSchema,
  execute: async ({ context }, _options) => {
    const companyName = context.company || 'Unknown Company';
    console.log('🚀 ~ companyName:', companyName);
    const result = await newsAgent.generate(companyName);
    return parseJsonWithSchema(result.text, newsSchema);
  },
});

export const newsResearchStep = createStep(newsResearchTool);

const leadershipResearchTool = createTool({
  id: 'Leadership Research',
  description: 'Research the leadership of the company',
  inputSchema: basicJobDetailsSchema,
  outputSchema: leadershipResearchSchema,
  execute: async ({ context }, _options) => {
    const companyName = context.company || 'Unknown Company';
    const result = await leadershipAgent.generate(companyName);
    return parseJsonWithSchema(result.text, leadershipResearchSchema);
  },
});

export const leadershipResearchStep = createStep(leadershipResearchTool);

const financialResearchTool = createTool({
  id: 'Financial Research',
  description: 'Research the financials of the company',
  inputSchema: basicJobDetailsSchema,
  outputSchema: financialResearchSchema,
  execute: async ({ context }, _options) => {
    const companyName = context.company || 'Unknown Company';
    const result = await financialsAgent.generate(companyName);
    return parseJsonWithSchema(result.text, financialResearchSchema);
  },
});

export const financialResearchStep = createStep(financialResearchTool);

const socialMediaResearchTool = createTool({
  id: 'Social Media Research',
  description: 'Research the social media of the company',
  inputSchema: basicJobDetailsSchema,
  outputSchema: socialMediaResearchSchema,
  execute: async ({ context }, _options) => {
    const companyName = context.company || 'Unknown Company';
    const result = await socialMediaAgent.generate(companyName);
    return parseJsonWithSchema(result.text, socialMediaResearchSchema);
  },
});

export const socialMediaResearchStep = createStep(socialMediaResearchTool);

const employeeResearchTool = createTool({
  id: 'Employee Research',
  description: 'Research the employees of the company',
  inputSchema: basicJobDetailsSchema,
  outputSchema: employeeResearchSchema,
  execute: async ({ context }, _options) => {
    const companyName = context.company || 'Unknown Company';
    const result = await employeeAgent.generate(companyName);
    return parseJsonWithSchema(result.text, employeeResearchSchema);
  },
});

export const employeeResearchStep = createStep(employeeResearchTool);

const technologyResearchTool = createTool({
  id: 'Technology Research',
  description: 'Research the technology of the company',
  inputSchema: basicJobDetailsSchema,
  outputSchema: technologyResearchSchema,
  execute: async ({ context }, _options) => {
    const companyName = context.company || 'Unknown Company';
    const result = await technologyAgent.generate(companyName);
    return parseJsonWithSchema(result.text, technologyResearchSchema);
  },
});

export const technologyResearchStep = createStep(technologyResearchTool);

const marketResearchTool = createTool({
  id: 'Market Research',
  description: 'Research the market of the company',
  inputSchema: basicJobDetailsSchema,
  outputSchema: marketResearchSchema,
  execute: async ({ context }, _options) => {
    const companyName = context.company || 'Unknown Company';
    const result = await marketAgent.generate(companyName);
    return parseJsonWithSchema(result.text, marketResearchSchema);
  },
});

export const marketResearchStep = createStep(marketResearchTool);

const companyCultureResearchTool = createTool({
  id: 'Company Culture Research',
  description: 'Research the company culture and values',
  inputSchema: synthesisSchema,
  outputSchema: companyCultureSchema,
  execute: async ({ context }, _options) => {
    const prompt = `Research company culture based on this synthesis: ${context.report}`;
    const result = await companyCultureAgent.generate(prompt);
    return parseJsonWithSchema(result.text, companyCultureSchema);
  },
});

export const companyCultureResearchStep = createStep(
  companyCultureResearchTool
);

const hiringManagerResearchTool = createTool({
  id: 'Hiring Manager Research',
  description: 'Research the hiring manager and team',
  inputSchema: synthesisSchema,
  outputSchema: hiringManagerSchema,
  execute: async ({ context }, _options) => {
    const prompt = `Research hiring manager and team based on this synthesis: ${context.report}`;
    const result = await hiringManagerAgent.generate(prompt);
    return parseJsonWithSchema(result.text, hiringManagerSchema);
  },
});

export const hiringManagerResearchStep = createStep(hiringManagerResearchTool);

const roleSuccessResearchTool = createTool({
  id: 'Role Success Research',
  description: 'Research role success criteria and KPIs',
  inputSchema: synthesisSchema,
  outputSchema: roleSuccessCriteriaSchema,
  execute: async ({ context }, _options) => {
    const prompt = `Research role success criteria based on this synthesis: ${context.report}`;
    const result = await roleSuccessAgent.generate(prompt);
    return parseJsonWithSchema(result.text, roleSuccessCriteriaSchema);
  },
});

export const roleSuccessResearchStep = createStep(roleSuccessResearchTool);

const customerInsightsResearchTool = createTool({
  id: 'Customer Insights Research',
  description: "Research the company's customers and market",
  inputSchema: synthesisSchema,
  outputSchema: customerInsightsSchema,
  execute: async ({ context }, _options) => {
    const prompt = `Research customer insights based on this synthesis: ${context.report}`;
    const result = await customerInsightsAgent.generate(prompt);
    return parseJsonWithSchema(result.text, customerInsightsSchema);
  },
});

export const customerInsightsResearchStep = createStep(
  customerInsightsResearchTool
);

const personalizationResearchTool = createTool({
  id: 'Personalization Research',
  description: 'Research personalization opportunities',
  inputSchema: synthesisSchema,
  outputSchema: personalizationSchema,
  execute: async ({ context }, _options) => {
    const prompt = `Research personalization opportunities based on this synthesis: ${context.report}`;
    const result = await personalizationAgent.generate(prompt);
    return parseJsonWithSchema(result.text, personalizationSchema);
  },
});

export const personalizationResearchStep = createStep(
  personalizationResearchTool
);

const synthesizeResearchTool = createTool({
  id: 'Synthesize Research',
  description: 'Synthesize the research',
  inputSchema: z.object({
    'News Research': newsSchema,
    'Leadership Research': leadershipResearchSchema,
    'Financial Research': financialResearchSchema,
    'Social Media Research': socialMediaResearchSchema,
    'Employee Research': employeeResearchSchema,
    'Technology Research': technologyResearchSchema,
    'Market Research': marketResearchSchema,
  }),
  outputSchema: synthesisSchema,
  execute: async ({ context }) => {
    try {
      const dataKeys = Object.keys(context);
      const summary = dataKeys
        .map((key) => {
          const data = (context as Record<string, unknown>)[key];
          return `${key}: ${typeof data === 'object' ? JSON.stringify(data).substring(0, 500) : data}`;
        })
        .join('\n\n');

      const prompt = `Research Data Summary:
${summary}

Please synthesize this research into the required format with:
1. A comprehensive report summarizing key findings
2. 3-5 key insights about the company  
3. 3-5 strategic recommendations
4. 3-5 potential risk factors
5. An opportunity score (1-10)

Return only JSON. Do not include any text outside the JSON object.`;

      const report = await synthesizeAgent.generate(prompt);
      return parseJsonWithSchema(report.text, synthesisSchema);
    } catch (error) {
      console.log('Error in synthesize step:', error);
      // Return a fallback structure to prevent workflow failure
      return {
        report:
          'Unable to synthesize research data at this time. Please review individual research components.',
        keyInsights: ['Research synthesis temporarily unavailable'],
        recommendations: ['Manual review of research components recommended'],
        riskFactors: ['Unable to assess risks due to synthesis error'],
        opportunityScore: 5,
      };
    }
  },
});

export const synthesizeResearchStep = createStep(synthesizeResearchTool);

const finalSummarizerTool = createTool({
  id: 'Final Summarizer',
  description:
    'Create final summary with actionable insights for job application',
  inputSchema: z.object({
    'Company Culture Research': companyCultureSchema,
    'Hiring Manager Research': hiringManagerSchema,
    'Role Success Research': roleSuccessCriteriaSchema,
    'Customer Insights Research': customerInsightsSchema,
    'Personalization Research': personalizationSchema,
  }),
  outputSchema: jobApplicationWorkflowOutputSchema,
  execute: async ({ context }) => {
    try {
      const dataKeys = Object.keys(context);
      const summary = dataKeys
        .map((key) => {
          const data = (context as Record<string, unknown>)[key];
          if (typeof data === 'object' && data !== null) {
            const preview = JSON.stringify(data).substring(0, 300);
            return `${key}: ${preview}...`;
          }
          return `${key}: ${data}`;
        })
        .join('\n\n');

      const prompt = `Create actionable job application insights based on this research data:

${summary}

Generate specific, actionable insights for:
1. Cover Letter Insights: talking points, cultural alignment, value proposition, personalized opening
2. Hiring Manager Outreach: personalization hooks, subject lines, communication tone, key topics  
3. Resume Customization: ATS keywords, skills to emphasize, experience angles
4. Application Strategy: best approach, timing, follow-up plan, risk mitigation

Be specific and practical in all recommendations.

Return only JSON. Do not include any text outside the JSON object.`;

      const result = await synthesizeAgent.generate(prompt);
      return parseJsonWithSchema(
        result.text,
        jobApplicationWorkflowOutputSchema
      );
    } catch (error) {
      console.log('Error in final summarizer step:', error);
      // Return fallback structure
      return {
        coverLetterInsights: {
          keyTalkingPoints: [
            'Review individual research components for insights',
          ],
          culturalAlignment: ['Unable to determine cultural alignment'],
          valueProposition:
            'Please review research data manually to create value proposition',
          personalizedOpening: 'Unable to generate personalized opening',
        },
        hiringManagerOutreach: {
          personalizationHooks: ['Review hiring manager research manually'],
          suggestedSubjectLines: ['Unable to generate subject lines'],
          communicationTone: 'Professional',
          keyTopics: ['Unable to determine key topics'],
        },
        resumeCustomization: {
          atsKeywords: ['Unable to extract ATS keywords'],
          skillsToEmphasize: ['Review role requirements manually'],
          experienceAngles: ['Unable to determine experience angles'],
        },
        applicationStrategy: {
          bestApproach: 'Standard application process',
          timing: 'Apply as soon as possible',
          followUpPlan: ['Follow up after 1 week'],
          riskMitigation: ['Review application carefully before submitting'],
        },
      };
    }
  },
});

export const finalSummarizerStep = createStep(finalSummarizerTool);

export const jobApplicationWorkflow = createWorkflow({
  id: 'job-workflow',
  inputSchema: z.object({ rawText: z.string() }),
  outputSchema: jobApplicationWorkflowOutputSchema,
})
  .then(parseJobStep)
  .parallel([
    newsResearchStep,
    leadershipResearchStep,
    financialResearchStep,
    socialMediaResearchStep,
    employeeResearchStep,
    technologyResearchStep,
    marketResearchStep,
  ])
  .then(synthesizeResearchStep)
  .parallel([
    companyCultureResearchStep,
    hiringManagerResearchStep,
    roleSuccessResearchStep,
    customerInsightsResearchStep,
    personalizationResearchStep,
  ])
  .then(finalSummarizerStep)
  .commit();
