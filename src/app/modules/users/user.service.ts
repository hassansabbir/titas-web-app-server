import { TUser } from './user.interface';
import { UserModel } from './user.model';

const createUserToDb = async (user: TUser) => {
  try {
    const result = await UserModel.create(user);
    return result;
  } catch (error: any) {
    console.error('Error creating user:', error);
    if (error.code === 11000 || error.code === 11001) {
      return Promise.reject(
        new Error('User with the same studentId already exists.'),
      );
    }
    return Promise.reject(error);
  }
};

export const updateStudentById = async (
  studentId: string,
  data: Partial<TUser>,
): Promise<TUser | null> => {
  try {
    const updatedUser = await UserModel.findOneAndUpdate({ studentId }, data, {
      new: true,
    });

    return updatedUser;
  } catch (error) {
    console.error('Error in updateStudentById service:', error);
    throw error;
  }
};

const getAllUserFromDb = async () => {
  const result = await UserModel.find({}, { __v: 0 });
  return result;
};
//^  Service > Controller > Route
const getUserByEmail = async (email: string) => {
  try {
    const userByEmail = await UserModel.findOne({
      email,
    });
    return userByEmail;
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
    const studentById = await UserModel.findOne({
      studentId,
    });
    return studentById;
  } catch (error: any) {
    if (error.code === 11000 || error.code === 11001) {
      return Promise.reject(new Error('User with the same id already exist'));
    }
    return Promise.reject(error);
  }
};
export const UserServices = {
  createUserToDb,
  updateStudentById,
  getAllUserFromDb,
  getUserByEmail,
  getStudentById,
};
