import { stat } from "node:fs"

export const successHandler = (res, status, statusCode, message) => {
    res.status(statusCode).json({
        status,
        message
    })
}