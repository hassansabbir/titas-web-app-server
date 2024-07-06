import { z } from 'zod';

export const userValidationSchema = z.object({
  studentId: z.string().min(1),
  fullName: z.string().min(1),
  class: z.string().min(1),
  rollNumber: z.string().min(1),
  password: z.string().min(1),
  role: z.enum(['superAdmin', 'admin', 'teacher', 'student']),
  isDeleted: z.boolean(),
});
