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

export const updateStudentById = async (req: Request, res: Response) => {
  try {
    const userId = req.params.studentId;
    const validatedData = userValidationSchema.parse(req.body);

    const updatedUser = await UserServices.updateStudentById(
      userId,
      validatedData,
    );

    res.status(200).json({
      success: true,
      message: 'User details updated successfully',
      data: updatedUser,
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

    const updatedUser = await UserServices.updateImageByStudentId(
      studentId,
      image,
    );

    if (updatedUser) {
      res.status(200).json({
        success: true,
        message: 'User image updated successfully',
        data: updatedUser,
      });
    } else {
      res.status(404).json({
        success: false,
        message: 'User with this studentId not found',
        error: {
          code: 404,
          description: 'User not found!',
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

const getStudentById = async (req: Request, res: Response) => {
  try {
    const studentById = await UserServices.getStudentById(req.params.studentId);
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
          descption: 'Student with this id could not be found',
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

export const UserControllers = {
  createUsers,
  updateStudentById,
  updateImageByStudentId,
  getUsers,
  getUserByEmail,
  getStudentById,
};
