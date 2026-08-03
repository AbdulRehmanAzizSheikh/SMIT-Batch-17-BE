import jwt from "jsonwebtoken"

export const authMiddleware = (req, res, next) => {
    try {
        let token = req.cookies.token;

        if(!token) throw new Error("No token provided")

        console.log(token, "token -->")

        const decode = jwt.verify(token, process.env.JWT_SECRET_KEY)

        if(!decode) throw new Error("invalid token")
            
        console.log(decode, "decode -->")
        req.user = decode

        next()
    } catch (error) {
        next(error)

        
    }
}