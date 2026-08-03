import {app} from "./src/app.js"
import dotenv from "dotenv"
import { connectDb } from "./src/config/db.js"

dotenv.config()

const PORT = process.env.PORT || 5500
//   await  connectDb()

await connectDb()

// app.listen(PORT, () => {
//     console.log("server is listenting on port:" + PORT)
// })


export default app