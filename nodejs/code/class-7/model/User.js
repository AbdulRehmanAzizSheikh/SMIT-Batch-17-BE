import mongoose from "mongoose";


const userSchema = new mongoose.Schema({
    firstName : {
        type:String,
        required : true
    },
    email :{
        type : String,
        required : true,
        unique : true
    },
    password : {
        required : true,
        type : String,
    },
    profession : String
})

export const User = mongoose.model("user", userSchema)