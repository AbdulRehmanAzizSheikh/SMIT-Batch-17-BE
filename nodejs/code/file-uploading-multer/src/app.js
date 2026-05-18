import express from "express"
import cors from "cors"
import multer from "multer"
import {Post} from "./models/postSchema.js"
import cloudinary from "./config/cloudinary.js"



const storage = multer.diskStorage({
    destination : (req, file, cb) => {
        cb(null, "./src/uploads")
    },
    filename : (req, file, cb) => {
        // console.log(file,"file -->")

        // console.log(req, "req -->")
        cb(null, `${Date.now()}-${file.originalname}`)
    },

})


const upload = multer({storage})

// const upload = multer({ dest: './src/uploads' })

export const app = express()

app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(cors())


app.post("/profile", upload.single("avatar")  , async (req, res) =>{

    try {

        const file = req.file
        const {title, description} = req.body;

        if (!file) {
                return res.status(400).json({
                    status: false,
                    message: "Profile is required"
                })
            }

            
               const cloudResponse = await cloudinary.uploader.upload(
                file.path,
                {
                    folder: "users"
                }
            )

          
         let post =   await Post.create({
                title: title,
                description : description,
                postImage : cloudResponse.secure_url
            })
            
            
         res.status(200).json({
             status:true,
             message: "Image uploaded successfully!",
             data: post
         })

    } catch (error) {   
         res.status(400).json({
            status:false,
             message :"server error" + error.message
         })
    }
})

// app.use("/", (req, res) => {
//     res.send("hello from the server")
// })



// app.post("/upload", upload.single("profileImage"),  async (req, res) => {
//     try {
        
//         const file = req.file;
//         const {title, description} = req.body;

//         console.log(file)

//         if(!file) return res.status(400).json({
//             status:false,
//             message : "Image is required!"
//         })

//         console.log(req)

//         const cloudResponse = await cloudinary.uploader.upload(file.path, {
//                     folder: "users"
//                 })

//                 console.log("Cloud Response ===>",cloudResponse)

//         const post = await Post.create({
//             title,
//             description,
//             postImage : cloudResponse.secure_url

//         })

//         res.status(200).json({
//             status:true,
//             message: "Image uploaded successfully!"
//         })

//     } catch (error) {
//         res.status(400).json({
//             status:false,
//             message :"server error" + error
//         })
//     }
// })




// app.post("/uploads", upload.fields([{name:"profileImage"},{name:"coverImage"}]),  async (req, res) => {
   
//     let file = req.file

//     console.log(file)
//     // console.log()

//     res.status(200).json({
//         message:"kaam hogiyaa..."
//     })

// })






