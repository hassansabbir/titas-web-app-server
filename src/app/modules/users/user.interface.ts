export type TGuardian = {
  guardianName: string;
  guardianContact: string;
  guardianRelation: string;
};
export interface TUser {
  studentId: string;
  image: string;
  email: string;
  address: string;
  guardianDetails: TGuardian;
  phoneNumber: string;
  fullName: string;
  class: string;
  rollNumber: string;
  password: string;
  role: 'superAdmin' | 'admin' | 'teacher' | 'student';
  isDeleted: boolean;
}
