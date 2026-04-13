import { successResponse, errorResponse } from '../utils/responseHandler.js';

export const signup = (req , res) => {
    const {username, email, password} = req.body;

    if(!username || !email || !password) 
        return errorResponse(400, false, "all fileds are required", res)
    

    try {
        // let result = 12 + 12
        return successResponse(200, true, "User Signup Successfully!", [], res)
    } catch (error) {
        
    }


    
}


export const login = (req , res) => {
    console.log(req.body)

    try {
      return successResponse(200, true, "User Loggedin Successfully!", {}, res)  
    } catch (error) {
        return errorResponse(400, false, "Invalid Email or password",res)
    }
    
}