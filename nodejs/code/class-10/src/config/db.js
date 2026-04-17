import mongoose from "mongoose"
import dotenv from "dotenv"

dotenv.config()

export const connectDb = async () => {
    let con = await mongoose.connect(process.env.MONGO_URI)
    console.log("DB Connected ==> ",con.connection.host)
}