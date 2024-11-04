import mongoose from "mongoose";
import { ENV_VARS } from "./envVars.js";

// Connect to MongoDB
export const connectDB = async () => {
  try {
    const conn = await mongoose.connect(ENV_VARS.MONGO_URI);
    console.log("MongoDB connected:" + conn.connection.host);
  } catch (error) {
    console.error("Database connection error:", error.message);
    process.exit(1); // Exit process with failure
  }
};
