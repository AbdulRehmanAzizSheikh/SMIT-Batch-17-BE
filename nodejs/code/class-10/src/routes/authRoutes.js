import express from "express"
import { forgetPassword, login, resetPassword, signup, verifyOtp } from "../controllers/authController.js"


const authRoutes = express.Router()



authRoutes.post("/signup", signup)
authRoutes.post("/login", login)
authRoutes.post("/verify-otp", verifyOtp)
authRoutes.post("/forget-password", forgetPassword)
authRoutes.post("/reset-password", resetPassword)


export default authRoutes