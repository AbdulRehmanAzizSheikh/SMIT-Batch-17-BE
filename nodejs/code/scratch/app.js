import express from "express"
import cookieParser from "cookie-parser"
import helmet from "helmet"
import { rateLimit } from 'express-rate-limit'
import authRoutes from "./src/routes/authRoutes.js"
import { connectDb } from "./src/db/db.js"
import userRoutes from "./src/routes/userRoute.js"
import { errorMiddleware } from "./src/middleware/errorMiddleware.js"
import jobRoute from "./src/routes/jobRoutes.js"


const app = express()
app.use(express.json())
app.use(cookieParser())
app.use(helmet())

const limiter = rateLimit({
	windowMs: 60 * 1000, // 15 minutes
	max: 5, 
	message : "too many request"
	
})

// Apply the rate limiting middleware to all requests.
app.use(limiter)

const PORT = process.env.PORT || 6500


app.get("/",(req, res) => {
    res.send("hello from the server!")
})


app.use("/api/auth", authRoutes)
app.use("/api/user", userRoutes)
app.use("/api/job", jobRoute)
// app.use("/api/user")



app.use(errorMiddleware)

app.listen(PORT, () => {
    console.log(`server is listenin.. ${PORT}`)
    connectDb()
})