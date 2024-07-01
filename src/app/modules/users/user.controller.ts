import { Request, Response } from 'express';
import { userValidationSchema } from './user.validation';
import { UserServices } from './user.service';

const createUsers = async (req: Request, res: Response) => {
  try {
    const userData = req.body;
    const ZodParsedData = userValidationSchema.parse(userData);
    const result = await UserServices.createUserToDb(ZodParsedData);
    res.status(200).json({
      success: true,
      message: 'User Created Successfully',
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

const getUsers = async (req: Request, res: Response) => {
  try {
    const users = await UserServices.getAllUserFromDb();
    res.status(200).json({
      success: true,
      message: 'User Fetched Successfully',
      data: users,
    });
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: error.message || 'Something went wrong',
      error: error,
    });
  }
};

export const UserControllers = {
  createUsers,
  getUsers,
};
