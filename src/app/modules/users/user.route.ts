import express from 'express';
import { UserControllers } from './user.controller';

const router = express.Router();

router.post('/users', UserControllers.createUsers);
router.get('/users', UserControllers.getUsers);
router.get('/users/:email', UserControllers.getUserByEmail);
router.get('/user/:studentId', UserControllers.getStudentById);
router.patch('/user/:studentId', UserControllers.updateStudentById);
router.patch(
  '/update-userImage/:studentId',
  UserControllers.updateImageByStudentId,
);
export const UserRoutes = router;
