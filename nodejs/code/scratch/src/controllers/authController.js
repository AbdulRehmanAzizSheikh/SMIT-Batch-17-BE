import { User } from "../models/user.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export const signup = async (req, res, next) => {
  try {
    const { firstName, email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({
        message: "email password required",
      });
    }

    bcrypt.hash(password, 12, async function (err, hash) {
      let user = await User.create({
        firstName,
        email,
        password: hash,
      });

      res.status(200).json({
        status: true,
        message: "user signup success fully",
        data: user,
      });
    });
  } catch (error) {
    res.send(error);
  }
};

export const login = async (req, res, next) => {
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
            { email: myUser.email, id: myUser._id }, // payload
            process.env.JWT_SECRET_KEY, // secret key
            {expiresIn:"1h"}                                      // token expiry
            // { expiresIn: 10 * 60 }, // token expiry
          );
          res.cookie("token", token)
          res.status(200).json({
            status: true,
            message: "user login successfully",
          });
        } else {
          throw new Error("Invalid Credentials");
        }
      } catch (error) {
        next(error);
      }
      // result == true
    });
  } catch (error) {
    next(error);
  }
};
