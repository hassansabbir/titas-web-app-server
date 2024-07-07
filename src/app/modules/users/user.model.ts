import { Schema, model } from 'mongoose';
import { TGuardian, TUser } from './user.interface';

const guardianSchema = new Schema<TGuardian>({
  guardianContact: { type: String },
  guardianRelation: { type: String },
  guardianName: { type: String },
});

const userSchema = new Schema<TUser>(
  {
    studentId: { type: String, unique: true },
    fullName: { type: String, required: [true, 'Full Name is required'] },
    class: { type: String, required: [true, 'Class is required'] },
    rollNumber: { type: String, required: [true, 'Roll is required'] },
    image: { type: String },
    email: { type: String },
    address: { type: String },
    phoneNumber: { type: String },
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
