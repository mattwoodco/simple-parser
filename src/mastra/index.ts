import { Mastra } from '@mastra/core/mastra';
import { jobApplicationWorkflow } from './workflows/job-workflow';

export const mastra = new Mastra({
  workflows: { jobApplicationWorkflow },
  aiSdkCompat: 'v4',
});
