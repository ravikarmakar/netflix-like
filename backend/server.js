import express from "express";

import authRoutes from "./routes/auth.route.js";
import { ENV_VARS } from "./config/envVars.js";
import { connectDB } from "./config/db.js";

const PORT = ENV_VARS.PORT;
const app = express();

app.use(express.json()); // to parse data from body

app.use("/api/v1/auth", authRoutes);

app.listen(PORT, () => {
  console.log(`Server runing on port ${PORT}`);
  connectDB();
});
