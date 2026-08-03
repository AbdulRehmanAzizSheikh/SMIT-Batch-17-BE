import express from "express"
import cors from "cors"
import authRoutes from "./routes/authRoutes.js"
import userRoutes from "./routes/userRoutes.js"
import { errorMiddleware } from "./middleware/errorMiddleware.js"

export const app = express()

app.use(express.json())
app.use(cors())

// authentication
app.use("/api/auth", authRoutes)

// users
app.use("/api/user", userRoutes)


app.use(errorMiddleware)

// get users,
// add users
// delete users
// // update users 