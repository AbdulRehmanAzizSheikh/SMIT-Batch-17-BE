export const errorMiddleware = (err, req, res, next) => {
    console.log(err.message)

//     if(err == "error ayaaa"){
//         res.json({
//     status : false,
//     message : "error hai..."
// })
//     }

//      if(err == "hunain nhi hai"){
       
//     }


 res.json({
    status : false,
    message : err.message
})
}