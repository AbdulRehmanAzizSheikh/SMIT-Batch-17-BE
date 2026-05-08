import {app} from "./src/app.js"
import dotenv from "dotenv"
import { connectDb } from "./src/config/db.js"


dotenv.config()
const PORT = process.env.PORT || 6500

app.listen(PORT, () => {
    console.log(`server chl rhaa hai ${PORT}`)
    connectDb()
})