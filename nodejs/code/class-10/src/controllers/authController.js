import { User } from "../models/userSchema.js";

const login = (req, res) => {
  res.status(200).json({
    status: true,
    message: "User logged Successfully",
  });
};

const signup = async (req, res) => {
  try {
    console.log(req.body);

    const { firstName, lastName, email, password, userName } = req.body;

    // if (!firstName || !lastName || !email || !password || !userName)
    //   return res.json({
    //     status: false,
    //     message: "All Fields are required!",
    //   });

    await User.create(req.body);

    res.status(200).json({
      status: true,
      message: "User Signup  Successfully",
    });
  } catch (error) {
    res.json({
      status: false,
      message: error.message,
    });
  }
};

export { signup, login };
