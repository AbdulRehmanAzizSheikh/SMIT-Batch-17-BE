import express from 'express'
import { login, signup } from '../controllers/authController.js'
import { updateUser } from '../controllers/userController.js'
import { authMiddleware } from '../middleware/authMiddleware.js'

const userRoutes = express.Router()

// api/user
userRoutes.put("/", authMiddleware, updateUser )


export default userRoutes