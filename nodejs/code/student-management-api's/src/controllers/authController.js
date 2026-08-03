import { User } from "../models/user.js";
import bcrypt from "bcrypt";
import { successHandler } from "../responseHandler/succes.js";

export const signup = async (req, res, next) => {
  try {
    const { firstName, lastName, email, age, password } = req.body;

    if (!email || !password) throw new Error("email or password are required");

    const hashedPass = await bcrypt.hash(password, 12);

    //       const createUser = new User({
    // firstName,
    // lastName,
    // email,
    // age,
    // password,

    //       })

    //       await createUser.save()

    await User.create({ ...req.body, password: hashedPass });
    successHandler(res, true, 201, "user signup successfully");
  } catch (error) {
    next(error);
  }
};

export const login = async (req, res, next) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) throw new Error("email or password are required");

    const user = await User.find({ email });

    if (!user) throw new Error("user not found!");

    const passMatch = await bcrypt.compare(password, user.password, 12);

    if (passMatch !== user.password) throw new Error("invalid credentials");

    successHandler(res, true, 200, "user login successfully");
  } catch (error) {
    next(error);
  }
};

export { signup, login };
