import mongoose from "mongoose"

export const connectDb = async () => {
 let con = await  mongoose.connect(process.env.MONGO_URI)
    console.log("Database Connected!", con.connection.host)
}