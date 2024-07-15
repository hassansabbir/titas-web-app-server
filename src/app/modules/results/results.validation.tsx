import { z } from 'zod';

export const resultsValidationSchema = z.object({
  key: z.string().min(1),
  board: z.string().min(1),
  year: z.number().min(1),
  appeared: z.number().min(1),
  passed: z.number().min(1),
  failed: z.number().min(1),
  aPlus: z.number().min(1),
  passRate: z.number().min(1),
  boardRank: z.number().min(1),
  nationalRank: z.number().min(1),
  districtRank: z.number().min(1),
});
