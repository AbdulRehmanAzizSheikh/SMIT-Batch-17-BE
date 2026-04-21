import {User} from "../model/User.js"

export const signup = async (req, res) => {
    
try {

    const {username, firstName, email, password, lastName} = req.body

    if(!username || !firstName || !email || !password || !lastName) return res.json({
        status : false,
        message :"All fields are requried"
    })
    
    const userData ={
         ...req.body
    }

    let user = new User(userData)

    let saveDb = await user.save()


    res.json({
    status  : true,
    message : "User Signup Successfully!",
    data : saveDb
})
} catch (error) {
   res.json({
    status : false,
    message : error.message
   }) 
}
}