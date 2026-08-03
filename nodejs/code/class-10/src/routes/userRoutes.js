import express from "express"
import { getUser, updateUser } from "../controllers/userController.js"


const userRoutes = express.Router()



userRoutes.get("/", getUser)
userRoutes.put("/", updateUser)



export default userRoutes