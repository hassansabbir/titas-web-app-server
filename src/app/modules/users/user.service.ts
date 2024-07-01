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

export const UserServices = {
  createUserToDb,
};
