import { Request, Response } from 'express';
import { userValidationSchema } from './user.validation';
import { UserServices } from './user.service';

const createUsers = async (req: Request, res: Response) => {
  try {
    const userData = req.body;
    const ZodParsedData = userValidationSchema.parse(userData);
    // console.log(ZodParsedData);
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

const getUserByEmail = async (req: Request, res: Response) => {
  try {
    const userByEmail = await UserServices.getUserByEmail(req.params.email);
    if (userByEmail) {
      res.status(200).json({
        success: true,
        message: 'User with this email founded successfully',
        data: userByEmail,
      });
    } else {
      res.status(404).json({
        success: false,
        message: 'User with this email not found',
        error: { code: 404, description: 'User not found!' },
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

const getUserById = async (req: Request, res: Response) => {
  try {
    const userById = await UserServices.getUserById(req.params.userId);
    if (userById) {
      res.status(200).json({
        success: true,
        message: 'User with this id founded successfully',
        data: userById,
      });
    } else {
      res.status(404).json({
        success: false,
        message: 'User with this not found',
        error: { code: 404, descption: 'User with this id could not be found' },
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

export const UserControllers = {
  createUsers,
  getUsers,
  getUserByEmail,
  getUserById,
};
