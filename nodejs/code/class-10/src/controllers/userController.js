import { User } from "../models/userSchema.js"

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