import express from 'express'
const router = express.Router()

import { 
    getAllStudents,
    getStudentById,
    createNewStudent,
    updateStudent,
    deleteStudent,
         } from '../controller/studentController.js';
 import {  isAuthenticatedUser, authorizedUser} from '../middleware/auth.js';

router.route('/students').get(getAllStudents);
router.route('/student/:id').get(getStudentById);
router.route('/new/student').post(isAuthenticatedUser,authorizedUser, createNewStudent);
// router.route('/new/student').post(createNewStudent);
router.route('/update/:id').put( isAuthenticatedUser,updateStudent);
router.route('/delete/:id').delete(isAuthenticatedUser,deleteStudent);
// router.route('/delete/:id').delete(deleteStudent);


export default router
