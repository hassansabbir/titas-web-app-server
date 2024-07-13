import { z } from 'zod';

export const guardianInfoValidation = z.object({
  guardianName: z.string().optional(),
  guardianContact: z.string().optional(),
  guardianRelation: z.string().optional(),
});
export const userValidationSchema = z.object({
  studentId: z.string().min(1),
  fullName: z.string().min(1),
  class: z.string().min(1),
  rollNumber: z.string().min(1),
  bloodGroup: z.string().optional(),
  image: z.string().optional(),
  email: z.string().optional(),
  address: z.string().optional(),
  age: z.string().optional(),
  gender: z.string().optional(),
  dateOfBirth: z.string().optional(),
  phoneNumber: z.string().optional(),
  guardianDetails: guardianInfoValidation.optional(),
  password: z.string().min(1),
  role: z.enum(['superAdmin', 'admin', 'teacher', 'student']),
  isDeleted: z.boolean(),
});
