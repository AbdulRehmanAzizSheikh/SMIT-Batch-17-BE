// console.log("js is running ==>")
import express from "express";
import cors from "cors"

const app = express()

app.use(cors())

app.get("/",(req,res) =>{
    console.log(res.send("hello from server!"))
})

app.get("/categories",(req,res) => {
    res.send("Shirt, Shoe")
})

app.post("/login", (req, res) =>{
    res.json({
        status : true,
        message : "User Logged In Successfully"
    })
})


app.get("/users", (req, res) => {
    res.json({
        status : true,
        data : [
            {
                username: "hasanCoder66",
                firstName : "Muhammad Hasan",
                lastName :"Muhammad Ashraf",
                age : 23,
                exp : 2,
                designation : "Frontend Developer",
                jobType:"Remote"
            },
            {
                username: "shayan",
                firstName : "Muhammad Shayan",
                lastName :"Khan",
                age : 18,
                exp : "Fresher",
                designation : "Student",
                jobType:"study"
            },
            {
                username: "muhammad_husnain",
                firstName : "Muhammad Hasnain",
                lastName :"Muhammad Ali",
                age : 18,
                exp : "Fresher",
                designation : "Student",
                jobType:"study"
            },
            {
                username: "muhammad_husnain",
                firstName : "Muhammad Hasnain",
                lastName :"Muhammad Ali",
                age : 18,
                exp : "Fresher",
                designation : "Student",
                jobType:"study"
            },
        ]
    })
})

app.listen( 8000, () => {
    console.log("server is listening from port 8000")
})