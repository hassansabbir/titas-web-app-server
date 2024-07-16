import { Schema, model } from 'mongoose';
import {TGuardian, TStudent} from "./student.interface";

const guardianSchema = new Schema<TGuardian>({
    guardianContact: { type: String, default: undefined },
    guardianRelation: { type: String, default: undefined },
    guardianName: { type: String, default: undefined },
});

const studentSchema = new Schema<TStudent>(
    {
        studentId: { type: String, unique: true },
        fullName: { type: String, required: [true, 'Full Name is required'] },
        class: { type: String, required: [true, 'Class is required'] },
        rollNumber: { type: String, required: [true, 'Roll is required'] },
        bloodGroup: { type: String, default: undefined },
        image: { type: String, default: undefined },
        email: { type: String, default: undefined },
        address: { type: String, default: undefined },
        phoneNumber: { type: String, default: undefined },
        guardianDetails: guardianSchema,
        age: { type: String, default: undefined },
        gender: { type: String, default: undefined },
        dateOfBirth: { type: String, default: undefined },
        password: { type: String, required: [true, 'Password is required'] },
        role: { type: String, enum: ['superAdmin', 'admin', 'teacher', 'student'] },
        isDeleted: { type: Boolean, default: false },
    },
    {
        timestamps: true,
    },
);

export const StudentModel = model<TStudent>('Student', studentSchema);
