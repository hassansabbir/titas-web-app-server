import { Schema, model } from 'mongoose';
import { TUser } from './user.interface';

const userSchema = new Schema<TUser>(
  {
    userId: { type: String, unique: true },
    fullName: { type: String, required: [true, 'Full Name is required'] },
    email: {
      type: String,
      required: [true, 'Email is required'],
      unique: true,
    },
    phoneNumber: { type: String, required: [true, 'Phone Number is required'] },
    userName: { type: String, required: [true, 'User Name is required'] },
    password: { type: String, required: [true, 'Password is required'] },
    role: { type: String, enum: ['superAdmin', 'admin', 'teacher', 'student'] },
    isDeleted: { type: Boolean, default: false },
  },
  {
    timestamps: true,
  },
);

export const UserModel = model<TUser>('User', userSchema);
