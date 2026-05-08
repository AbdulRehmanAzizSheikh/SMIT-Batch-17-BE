import mongoose from 'mongoose'


const jobSchema = new mongoose.Schema({
    jobTitle: {
        type:String,
        required : true
    },
    jobDescription : {
        type:String,
        required : true
    },
    salary : Number,
    jobType: String,
    location: String,
})


export const Job = mongoose.model("jobs", jobSchema)