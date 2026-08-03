import mongoose from 'mongoose'


const userSchema = new mongoose.Schema({
    firstName : String,
    lastName : String,
    password : {
        type : String,
        required: true
    },
    email : {
        type : String,
        required: true,
        unique: true
    },
    age : Number
    
}) 


export const User = mongoose.model("users", userSchema)