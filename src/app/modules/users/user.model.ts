import { Schema, model } from 'mongoose';
import { TUser } from './user.interface';

const userSchema = new Schema<TUser>(
  {
    studentId: { type: String, unique: true },
    fullName: { type: String, required: [true, 'Full Name is required'] },
    class: { type: String, required: [true, 'Class is required'] },
    rollNumber: { type: String, required: [true, 'Roll is required'] },
    password: { type: String, required: [true, 'Password is required'] },
    role: { type: String, enum: ['superAdmin', 'admin', 'teacher', 'student'] },
    isDeleted: { type: Boolean, default: false },
  },
  {
    timestamps: true,
  },
);

export const UserModel = model<TUser>('User', userSchema);
