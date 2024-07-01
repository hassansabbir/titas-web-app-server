import { z } from 'zod';

export const userValidationSchema = z.object({
  userId: z.string().min(1).optional(),
  fullName: z.string().min(1),
  email: z.string().email().min(1, { message: 'invalid email' }),
  phoneNumber: z.string().min(1),
  userName: z.string().min(1),
  password: z.string().min(1),
  role: z.enum(['superAdmin', 'admin', 'teacher', 'student']),
  isDeleted: z.boolean(),
});
