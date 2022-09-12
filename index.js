import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import designPatternRouter from "./routes/designPatternRoute.js";
import authRouter from "./routes/authRoute.js";
import cookieParser from "cookie-parser";

const app = express();
const port = 3000;

dotenv.config();

app.use(express.json());
app.use(cookieParser());

const connectionToDB = async () => {
  try {
    mongoose.connect(process.env.MONGO_URL);
    console.log("Connection to MongoDB is successful!");
  } catch (error) {
    console.error(error);
  }
};

app.use("/api", designPatternRouter);
app.use("/api", authRouter);

app.listen(port, () => {
  connectionToDB();
  console.log(`Server started on port ${port}`);
});