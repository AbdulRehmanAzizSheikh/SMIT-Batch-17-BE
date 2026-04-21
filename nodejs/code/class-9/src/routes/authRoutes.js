import express from "express";
import { signup } from "../controller/authController.js";

const authRouter = express.Router()



authRouter.post("/signup", signup)
// authRouter.()


export default authRouter