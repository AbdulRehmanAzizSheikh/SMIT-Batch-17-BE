import express from "express"
import authRoutes from "./routes/authRoutes.js"
import userRoutes from "./userRoutes.js"

export const app = express()

app.use(express.json())

// authentication
app.use("/api/auth", authRoutes)

// users
app.use("/api/user", userRoutes)

// get users,
// add users
// delete users
// // update users 