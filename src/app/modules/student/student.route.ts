import express from 'express';
import {StudentControllers} from "./student.controller";

const router = express.Router();

router.post('/students', StudentControllers.createStudents);
router.get('/students', StudentControllers.getStudents);
router.get('/students/:email', StudentControllers.getStudentByEmail);
router.get('/student/:studentId', StudentControllers.getStudentById);
router.patch('/student/:studentId', StudentControllers.updateStudentById);
router.patch(
    '/update-studentImg/:studentId',
    StudentControllers.updateImageByStudentId,
);
export const StudentRoutes = router;
