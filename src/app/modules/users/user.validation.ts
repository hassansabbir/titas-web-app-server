import { z } from 'zod';

export const guardianInfoValidation = z.object({
  guardianName: z.string(),
  guardianContact: z.string(),
  guardianRelation: z.string(),
});
export const userValidationSchema = z.object({
  studentId: z.string().min(1),
  fullName: z.string().min(1),
  class: z.string().min(1),
  rollNumber: z.string().min(1),
  image: z.string(),
  email: z.string(),
  address: z.string(),
  phoneNumber: z.string(),
  guardianDetails: guardianInfoValidation,
  password: z.string().min(1),
  role: z.enum(['superAdmin', 'admin', 'teacher', 'student']),
  isDeleted: z.boolean(),
});
