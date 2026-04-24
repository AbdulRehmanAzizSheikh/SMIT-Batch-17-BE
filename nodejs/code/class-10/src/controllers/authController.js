import { User } from "../models/userSchema.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import { successResponse } from "../responseHandler/successHandler.js";

const login = async (req, res, next) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) throw new Error("All fields are required!");

    let myUser = await User.findOne({ email: email });
    console.log(myUser);

    if (!myUser) throw new Error("User not found");

    bcrypt.compare(password, myUser.password, function (err, result) {
     try {
       if (result) {
        const token = jwt.sign(
          { email: myUser.email, id: myUser._id },  // payload
          process.env.JWT_SECRET_KEY,              // secret key
          // {expiresIn:"1h"}                                      // token expiry
          {expiresIn: 1 * 60}                                      // token expiry
        );
        successResponse(res,200,true,"User logged In  Successfully",myUser,token,);
      }else {
        throw new Error("Invalid Credentials")
      }
     } catch (error) {
      next(error)
     }
      // result == true
    });

    // if (myUser.password != password) throw new Error("Invalid credientials");
  } catch (error) {
    next(error);
  }
};

const signup = async (req, res, next) => {
  // if(true){
  //   throw "hunain nhi hai"
  // }else {
  //   throw "error ayaaa"
  // }
  try {
    console.log(req.body);

    // let user ;
    const { age, email, password, userName } = req.body;

    // if(!user) throw new Error("user nhi hai...")
    // if (!firstName || !lastName || !email || !password || !userName)
    //   return res.json({
    //     status: false,
    //     message: "All Fields are required!",
    //   });

    bcrypt.hash(password, 12, async function (err, hash) {
      // Store hash in your password DB.

      await User.create({
        ...req.body,
        password: hash,
      });
      successResponse(res, 200, true, "User Signup  Successfully");
    });
  } catch (error) {
    next(error);
  }
};

export { signup, login };
