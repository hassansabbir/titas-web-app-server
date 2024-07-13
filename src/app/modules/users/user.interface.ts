export type TGuardian = {
  guardianName?: string | undefined;
  guardianContact?: string | undefined;
  guardianRelation?: string | undefined;
};
export interface TUser {
  studentId: string;
  image?: string | undefined;
  email?: string | undefined;
  address?: string | undefined;
  guardianDetails?: TGuardian | undefined;
  phoneNumber?: string | undefined;
  age?: string | undefined;
  gender?: string | undefined;
  dateOfBirth?: string | undefined;
  fullName: string;
  class: string;
  rollNumber: string;
  password: string;
  confirmPassword?: string;
  role: 'superAdmin' | 'admin' | 'teacher' | 'student';
  isDeleted: boolean;
}
