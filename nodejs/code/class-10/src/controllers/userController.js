import { User } from "../models/userSchema.js"
import jwt from "jsonwebtoken"
import { successResponse } from "../responseHandler/successHandler.js"

export const getUser = async (req, res) => {
    try {

        const {limit, skip, sort} = req.query


        // let query = {}
        // let query2 = {}

//         console.log(req.query)
//         const {userName, age} = req.query

//         if(req.query.ageStart && req.query.ageEnd){
//             query = {$gte : req.query.ageStart,  $lte: req.query.ageEnd }
//         }

//         if(req.query.userName){
//             query = {...req.query}
//         }

//         console.log(query)

// console.log("req querry ==>",req.query)

        const user = await User.find().limit(limit).skip(skip).sort(sort)


        res.status(200).json({
            status : true, 
            message : "data retrieve successfully!",
            data : user
        })

    } catch (error) {
        res.status(404).json({
            status : false,
            message : error.message,
            
        })
    }
}

// export const updateUser = async (req, res, next) => {
//     try {
//         const updateDetails = req.body ;
//         const token = req.headers.authorization

//         console.log(token)
//         let decodedToken = jwt.verify(token, process.env.JWT_SECRET_KEY)

//         if(!token) throw new Error("No Token Provider")


//        let updatedUser =   await User.findByIdAndUpdate(decodedToken.id, updateDetails)

//             res.status(200).json({
//                 status : true,
//                 message:"updated user successfully",
//                 data : updatedUser
//             })
//     } catch (error) {
//         next(error)
//     }
// }





export const updateUser = async (req, res, next) => {
    try {
        const updateUserDetails = req.body;
        const token = req.headers.authorization.split(" ")[1]


        if(!token) throw new Error("token not provided")

            const decodeToken = jwt.verify(token, process.env.JWT_SECRET_KEY)
        
            console.log(decodeToken)
         let user =  await User.findByIdAndUpdate(decodeToken.id, updateUserDetails)
        successResponse(res, 200, true, "update user successfully!", user )

    } catch (error) {
        next(error)
    }
}