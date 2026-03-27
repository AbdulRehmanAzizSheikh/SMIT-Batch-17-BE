// let username = "hasancoder66"

// console.log(username)


// const fs = require("fs")
const http = require("http")
const url = require("url")

// const readFileReturn = fs.readFile("./server.txt", "utf-8", (err, data) => {
//     console.log(data)
// })

// fs.writeFileSync("./server.txt", "kuch bi bhaee dimagh mai ni arhaa!")


// console.log(readFileReturn)


/// Server create ker rahy hain...

const server = http.createServer((req, res) => {
    const pathname = req.url
    // console.log(req.url)
    if(pathname == "/shirt"){
        res.end("shirt wala page")
    } else if(pathname == "/shoe"){
        res.end("shoe wala page")
    }else {
     console.log("something went wrong!")   
    }
res.end("server is running -->")
})

// console.log(server)


server.listen(8000, "127.0.0.1", ()=>{
    console.log("server is listening!")
})