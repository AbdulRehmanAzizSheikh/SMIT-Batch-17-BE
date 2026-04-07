import express from "express"
import morgan from "morgan"
import dotenv from "dotenv"

dotenv.config()

const app = express()
const PORT = process.env.PORT || 5500
let users = []

// middlewars
app.use(express.json())
app.use(morgan("tiny"))

// app.use((req, res, next) => {
//     console.log("mera pehlaaa middleware chlaaa")
//     req.requestTime = new Date().toISOString()
//     next()
// })

// app.use((req, res, next) => {
//     console.log("mera second middleware chlaaa ==>")
//     next()
// })




app.get("/",(req, res) => {
    res.json({
        status : true,
        message : "Hello From Server"
    })
})

app.get("/user/:username", (req, res) => {
    const {username} = req.params

    // console.log(username)

   const findSingleUser = users.find((user) => user.username == username)
    // {
    //     if(user.username == username){
    //         return user
    //     }
    // }

    if(!username){
      return  res.status(400).send("user not found")
    }


    res.json({
        status  :true,
        message : "Fetch Single User.",
        user : findSingleUser
    })
})

app.post("/users",(req, res) => {
    
    const user = req.body

    users.push(user)
    res.json({
        status : true,
        message : "User Added Successfully",
        
    })
})

app.get("/users",(req, res) => {
    res.json({
        status : true,
        message : "User data fetch Successfully",
        data : users,
        time : req.requestTime  
    })
})

app.put("/users/:username",(req, res) => {

    const user = req.body
    const {username} = req.params

    users = users.map((u) => {
        if(u.username == username){
          return u = user
        }
        return u
    })

    res.json({
        status : true,
        message : "User Updated Successfully"
    })
})

app.delete("/users/:username",(req, res) => {

    const {username} = req.params

    users = users.filter((u) => u.username !==  username)

    res.json({
        status : true,
        message : "User deleted Successfully"
    })
})


app.listen(PORT, () => {
    console.log(`Server is listenting on port ${PORT}`)
})