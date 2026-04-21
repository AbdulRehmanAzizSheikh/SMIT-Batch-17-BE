import express from "express"
import authRouter from "./routes/authRoutes.js"


export const app = express()

/// middelwares ==>

    app.use(express.json())


    // routes

    // auth 
    app.use("/api/auth", authRouter)


    /// user

