import express from "express"
import morgan from "morgan"
import cors from "cors"
import authRoutes from "./routes/authRoutes.js"

export const app = express()

// middlewares ==>
    app.use(express.json())
    app.use(morgan("tiny"))
    app.use(cors())

    // auth routes
    app.use("/api/auth", authRoutes)

    // user route
    // app.use("/api/users", userRoutes)
    
