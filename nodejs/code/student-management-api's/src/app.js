import express from "express"
import { stat } from "node:fs"
import authRoute from "./routes/authRoute.js"
import { errorMiddleware } from "./middleware/errorMiddleware.js"


const app = express()


app.use("/" , (req, res) => {
res.status(200).json({
    status : true,
    message :"hello from server!"
})
})

app.use("/api/auth", authRoute)

app.use(errorMiddleware)

export default app