import { Schema, model } from 'mongoose';
import { TGuardian, TUser } from './user.interface';

const guardianSchema = new Schema<TGuardian>({
  guardianContact: { type: String, default: undefined },
  guardianRelation: { type: String, default: undefined },
  guardianName: { type: String, default: undefined },
});

const userSchema = new Schema<TUser>(
  {
    studentId: { type: String, unique: true },
    fullName: { type: String, required: [true, 'Full Name is required'] },
    class: { type: String, required: [true, 'Class is required'] },
    rollNumber: { type: String, required: [true, 'Roll is required'] },
    image: { type: String, default: undefined },
    email: { type: String, default: undefined },
    address: { type: String, default: undefined },
    phoneNumber: { type: String, default: undefined },
    guardianDetails: guardianSchema,
    password: { type: String, required: [true, 'Password is required'] },
    role: { type: String, enum: ['superAdmin', 'admin', 'teacher', 'student'] },
    isDeleted: { type: Boolean, default: false },
  },
  {
    timestamps: true,
  },
);

export const UserModel = model<TUser>('User', userSchema);
