import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    email : {
        type : String,
        required: true,
        unique  : true
    },
    password : {
        type : String,
        required: true,
    },
    userName : {
        type : String,
        required: true
    },
    age : Number,
    about : String,
    otp: String,
    otpExpiry : Date,
    
    isVerified: {
        type : Boolean,
        default:false
    }
    

})


export const User = mongoose.model("users", userSchema)