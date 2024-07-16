import { Request, Response } from 'express';
import {studentValidationSchema} from "./student.validation";
import {StudentServices} from "./student.service";

const createStudents = async (req: Request, res: Response) => {
    try {
        const studentData = req.body;
        const ZodParsedData = studentValidationSchema.parse(studentData);
        const result = await StudentServices.createStudentToDb(ZodParsedData);
        res.status(200).json({
            success: true,
            message: 'Student Created Successfully',
            data: result,
        });
    } catch (error: any) {
        res.status(500).json({
            success: false,
            message: error.message || 'Something went wrong',
            error: error,
        });
    }
};

export const updateStudentById = async (req: Request, res: Response) => {
    try {
        const studentId = req.params.studentId;
        const validatedData = studentValidationSchema.parse(req.body);

        const updateStudent = await StudentServices.updateStudentById(
            studentId,
            validatedData,
        );

        res.status(200).json({
            success: true,
            message: 'User details updated successfully',
            data: updateStudent,
        });
    } catch (error: any) {
        res.status(500).json({
            success: false,
            message: error.message || 'Something went wrong',
            error: error,
        });
    }
};

const updateImageByStudentId = async (req: Request, res: Response) => {
    try {
        const studentId = req.params.studentId;
        const { image } = req.body;

        if (!image) {
            return res.status(400).json({
                success: false,
                message: 'Image URL is required',
            });
        }

        const updateStudent = await StudentServices.updateImageByStudentId(
            studentId,
            image,
        );

        if (updateStudent) {
            res.status(200).json({
                success: true,
                message: 'Student image updated successfully',
                data: updateStudent,
            });
        } else {
            res.status(404).json({
                success: false,
                message: 'Student with this studentId not found',
                error: {
                    code: 404,
                    description: 'Student not found!',
                },
            });
        }
    } catch (error: any) {
        res.status(500).json({
            success: false,
            message: error.message || 'Something went wrong',
            error: error,
        });
    }
};

const getStudents = async (req: Request, res: Response) => {
    try {
        const students = await StudentServices.getAllStudentFromDb();
        res.status(200).json({
            success: true,
            message: 'Student Fetched Successfully',
            data: students,
        });
    } catch (error: any) {
        res.status(500).json({
            success: false,
            message: error.message || 'Something went wrong',
            error: error,
        });
    }
};

const getStudentByEmail = async (req: Request, res: Response) => {
    try {
        const studentByEmail = await StudentServices.getStudentByEmail(req.params.email);
        if (studentByEmail) {
            res.status(200).json({
                success: true,
                message: 'Student with this email founded successfully',
                data: studentByEmail,
            });
        } else {
            res.status(404).json({
                success: false,
                message: 'Student with this email not found',
                error: { code: 404, description: 'Student not found!' },
            });
        }
    } catch (error: any) {
        res.status(500).json({
            success: false,
            message: error.message || 'Something went wrong',
            error: error,
        });
    }
};

const getStudentById = async (req: Request, res: Response) => {
    try {
        const studentById = await StudentServices.getStudentById(req.params.studentId);
        if (studentById) {
            res.status(200).json({
                success: true,
                message: 'Student with this id founded successfully',
                data: studentById,
            });
        } else {
            res.status(404).json({
                success: false,
                message: 'Student with this not found',
                error: {
                    code: 404,
                    description: 'Student with this id could not be found',
                },
            });
        }
    } catch (error: any) {
        res.status(500).json({
            success: false,
            message: error.message || 'Something went wrong',
            error: error,
        });
    }
};

export const StudentControllers = {
    createStudents,
    updateStudentById,
    updateImageByStudentId,
    getStudents,
    getStudentByEmail,
    getStudentById,
};
