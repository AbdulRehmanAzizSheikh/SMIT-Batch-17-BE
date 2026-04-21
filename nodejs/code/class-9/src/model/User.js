import mongoose from "mongoose";


const userSchema = new mongoose.Schema({
    firstName : String,
    lastName : String,
    email : {
        type : String,
        required : true, 
        unique : true
    },
     password : {
        type : String,
        required : true, 
        
    },
     username : {
        type : String,
        required : true, 
        unique:true
        
    },
    about : String
})


export const User = mongoose.model("users", userSchema)