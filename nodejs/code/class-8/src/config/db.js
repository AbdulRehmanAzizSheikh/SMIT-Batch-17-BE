import mongoose from "mongoose"

export const connectDb = async () => {

    try {
    let con =  await mongoose.connect(process.env.MONGO_URI)
        console.log("DB Connected ==>" )//, con.connection.host
    } catch (error) {
        console.log(error.message)
    }
    
}
