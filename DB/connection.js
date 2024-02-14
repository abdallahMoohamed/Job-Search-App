import mongoose from "mongoose";
import { env } from "../config/variables.env.js";

const connectDB = async () => {
  return await mongoose.connect(env.DB_CONNECTION).then(res => {
    console.log("Successfully Connection with DB .");
  }).catch(err => {
    console.log("Fail to connect with DB due: " + err);
  })
}

export default connectDB