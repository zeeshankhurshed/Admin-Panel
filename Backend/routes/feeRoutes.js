import express from 'express'
const router = express.Router()

import { createNewUser, deleteUser, getAllUsers, getUserById, updateUser, } from '../controller/fee.controller.js'

router.route('/userFee').get(getAllUsers);
router.route('/userFee/:id').get(getUserById);
router.route('/new/userFee').post(createNewUser);
router.route('/update/:id').put( updateUser);
router.route('/delete/:id').delete(deleteUser);

export default router