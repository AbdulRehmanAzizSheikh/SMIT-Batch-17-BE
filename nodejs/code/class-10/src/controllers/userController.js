import { User } from "../models/userSchema.js"

export const getUser = async (req, res) => {
    try {

        console.log(req.query)
        const {firstName, lastName, _id} = req.query

        console.log(firstName, lastName)
        const user = await User.find({
           _id : _id
        })


        res.status(200).json({
            status : true, 
            message : "data retrieve successfully!",
            data : user[0]
        })

    } catch (error) {
        res.status(404).json({
            status : false,
            message : error.message,
            
        })
    }
}