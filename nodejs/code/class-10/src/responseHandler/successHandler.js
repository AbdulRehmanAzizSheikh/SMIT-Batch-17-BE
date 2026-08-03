export const successResponse = (res, statusCode, status, message, data = {}, token ) => {
  return res.status(statusCode).json({
    status: status,
    message: message,
    data : data ,
    token : token
  });
};
