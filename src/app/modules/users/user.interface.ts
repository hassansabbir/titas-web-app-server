export interface TUser {
  studentId: string;
  fullName: string;
  class: string;
  rollNumber: string;
  password: string;
  role: 'superAdmin' | 'admin' | 'teacher' | 'student';
  isDeleted: boolean;
}
