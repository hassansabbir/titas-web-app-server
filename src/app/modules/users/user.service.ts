import { TUser } from './user.interface';
import { UserModel } from './user.model';

const createUserToDb = async (user: TUser) => {
  try {
    const result = await UserModel.create(user);
    return result;
  } catch (error: any) {
    if (error.code === 11000 || error.code === 11001) {
      return Promise.reject(
        new Error('User with the same userId already exists.'),
      );
    }
    return Promise.reject(error);
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

const getUserById = async (userId: string) => {
  try {
    const userById = await UserModel.findOne({
      userId,
    });
    return userById;
  } catch (error: any) {
    if (error.code === 11000 || error.code === 11001) {
      return Promise.reject(new Error('User with the same id already exist'));
    }
    return Promise.reject(error);
  }
};
export const UserServices = {
  createUserToDb,
  getAllUserFromDb,
  getUserByEmail,
  getUserById,
};
