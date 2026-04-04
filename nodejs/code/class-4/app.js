import express from 'express'

const app = express()


app.get("/", (req, res) =>{
res.send("Helloo from server!")
})

// app.get("/about", (req, res) =>{
// res.json({
//     status : true,
//     message : "Yelo data about ki taraf sai."

// })
// })



app.post("/users",(req, res) => {
    res.json({
        status : true,
        message   : "User Signed up successfully!"
    })
})

app.get("/users",(req, res) => {
    res.json({
        status : true,
        message   : "User data fetch successfully!"
    })
})

app.put("/users",(req, res) => {
    res.json({
        status : true,
        message   : "User Updated successfully!"
    })
})

app.delete("/users",(req, res) => {
    res.json({
        status : true,
        message   : "User deleted successfully!"
    })
})


app.listen(8000, () => {
    console.log("Server listening on port no 8000")  
})