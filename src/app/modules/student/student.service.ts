import {TStudent} from "./student.interface";
import {StudentModel} from "./student.model";

const createStudentToDb = async (student: TStudent) => {
    try {
        const result = await StudentModel.create(student);
        return result;
    } catch (error: any) {
        console.error('Error creating Student ID:', error);
        if (error.code === 11000 || error.code === 11001) {
            return Promise.reject(
                new Error('Student with the same ID already exists.'),
            );
        }
        return Promise.reject(error);
    }
};

export const updateStudentById = async (
    studentId: string,
    data: Partial<TStudent>,
): Promise<TStudent | null> => {
    try {
        const updateStudent = await StudentModel.findOneAndUpdate({ studentId }, data, {
            new: true,
        });

        return updateStudent;
    } catch (error) {
        console.error('Error in updateStudentById service:', error);
        throw error;
    }
};

const updateImageByStudentId = async (
    studentId: string,
    imageUrl: string,
): Promise<TStudent | null> => {
    try {
        const updatedStudent = await StudentModel.findOneAndUpdate(
            { studentId },
            { image: imageUrl },
            { new: true },
        );
        return updatedStudent;
    } catch (error: any) {
        console.error('Error in updateImageByStudentId service:', error);
        throw error;
    }
};

const getAllStudentFromDb = async () => {
    const result = await StudentModel.find({}, { __v: 0 });
    return result;
};
//^  Service > Controller > Route
const getStudentByEmail = async (email: string) => {
    try {
        const studentByEmail = await StudentModel.findOne({
            email,
        });
        return studentByEmail;
    } catch (error: any) {
        if (error.code === 11000 || error.code === 11001) {
            return Promise.reject(
                new Error('User with the same email couldnt be found.'),
            );
        }
        return Promise.reject(error);
    }
};

const getStudentById = async (studentId: string) => {
    try {
        const studentById = await StudentModel.findOne({
            studentId,
        });
        return studentById;
    } catch (error: any) {
        if (error.code === 11000 || error.code === 11001) {
            return Promise.reject(new Error('Student with the same ID already exist'));
        }
        return Promise.reject(error);
    }
};
export const StudentServices = {
    createStudentToDb,
    updateStudentById,
    updateImageByStudentId,
    getStudentByEmail,
    getAllStudentFromDb,
    getStudentById,
};
