import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

let isConnected = false;

export const connectDb = async () => {
  try {
    if (isConnected) {
      console.log("DB already connected.");

      return;
    }
    let con = await mongoose.connect(process.env.MONGO_URI);
    console.log("DB Connected ==> ", con.connection.host);
    isConnected = true;
  } catch (error) {
    console.log("DB Error -->", error);
  }
};
