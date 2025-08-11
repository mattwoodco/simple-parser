import type { z } from 'zod';
import type { basicJobDetailsSchema } from '../schema/basicJobDetailsSchema';
import type { newsSchema } from '../schema/newsSchema';

export type JobPosting = z.infer<typeof basicJobDetailsSchema>;

export type News = z.infer<typeof newsSchema>;
