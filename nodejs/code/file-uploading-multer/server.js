
import dotenv from "dotenv"
import { app } from "./src/app.js"
import { connectDb } from "./src/db/db.js"


dotenv.config()

const PORT = process.env.PORT || 5500

app.listen(PORT, () => {
    console.log("server is listenting on port:" + PORT)
    connectDb()
})