import express from 'express'
import { login, signup } from '../controllers/authController.js'

const authRoutes = express.Router()

// /api/auth
authRoutes.post("/signup",signup )
authRoutes.post("/login",login )

export default authRoutes