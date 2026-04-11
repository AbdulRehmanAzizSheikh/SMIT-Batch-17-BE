import express from "express"
import mongoose from "mongoose"
import dotenv from 'dotenv'
import { User } from "./model/User.js"


dotenv.config()

const app = express()
const PORT = process.env.PORT || 5500


const connectDB = async () => {
    try {
       await mongoose.connect(process.env.MONGO_URI)

        console.log("db connected")
    } catch (error) {
        console.log(error)
    }
}

app.use(express.json())

app.post("/user", async (req, res) => {

    console.log(req.body)
    const {firstName, email, password, profession} = req.body

    try {
        const userData = {
        firstName : firstName,
        password : password,
        email : email,
        profession :profession
    }

    const user = new User(userData)

    await user.save()

    // const user = await User.save(userData)
    // console.log(user)

    res.json({
        status : true,
        message : "User Add Successfully!"
    })
    } catch (error) {
        console.log(error.message)
        res.json({
            status : false,
            message : error.message
        })
    }
})

app.get("/users", async (req, res) => {

    try {
   let allUsers =  await  User.find()

   res.json({
    status : true,
    message  :"All Users Fetch Successfully!",
    data : allUsers
   })
    } catch (error) {
        console.log(error)
    }
})


app.listen(PORT, () => {
    console.log(`Server is Listening on PORT: ${PORT}`)
    connectDB()
})