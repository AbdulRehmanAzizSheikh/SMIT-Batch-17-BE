export const updateUser = (req, res, next) => {
    try {
        


        res.send({
        message : "update user successfulyy!"
        })
    } catch (error) {
        next(error)
    }
}