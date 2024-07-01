export interface TUser {
  userId?: string;
  fullName: string;
  email: string;
  phoneNumber: string;
  userName: string;
  password: string;
  role: 'superAdmin' | 'admin' | 'teacher' | 'student';
  isDeleted: boolean;
}
