import express from 'express';

import { signIn, signUp, sendVerificationEmail, verifyEmailToken } from '../controller/userController';

const router = express.Router()

router.post('/signIn', signIn)
router.post('/signUp', signUp)
router.post('/getVerificationEmail', sendVerificationEmail)
router.post('/verifyToken/:userToken', verifyEmailToken)

export default router
