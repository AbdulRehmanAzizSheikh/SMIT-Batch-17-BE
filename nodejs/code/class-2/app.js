// console.log("js running -->") 


// const http = require("http")
// const path = require("path")


// const server = http.createServer((req, res) => {
// const pathname = req.url
// console.log(pathname)

// if(pathname == "/shirt"){
//     res.end("yelo shirt")
// }else if(pathname == "/shoe"){
//     res.end("yelo shoe")
// }else if(pathname == "/"){
//     res.end("hello from server!")

// } else {
//     res.end("page not found")
// }
// })

// server.listen(8000, "127.0.0.1",() => {
//     console.log("server is running on port 8000")
// })






// const express = require('express')
// const app = express()
// const port = 3000

// app.get('/', (req, res) => {
//   res.send('Hello World!')
// })

// app.listen(port, () => {
//   console.log(`Example app listening on port ${port}`)
// })


import express from 'express'

const app =  express()

// console.log(app)

app.get("/", (req, res) => {
res.send("Hello From The Server.")
})

app.get("/shirt", (req, res) => {
    res.send("ye lo dost white shirt")
    
})

app.listen(8000, () => {
    console.log("server is listening on port 8000")
})