import express from 'express'
const router =express.Router()
import { registerNewUser,loginUser,logoutUser, google } from '../controller/authController.js';

router.route('/auth/register').post(registerNewUser);
router.route('/auth/login').post(loginUser);
router.route('/auth/logout').post(logoutUser);
router.route('/auth/google').post(google);

export default router;
