import express from "express";
import dotenv from "dotenv";
import authRouter from "./routes/auth.routes";
import { connectDB } from "./DB/connect";
import cors from "cors";
import cookieParser from "cookie-parser";
import configCloudinary from "./config/cloudinary";
import userRouter from "./routes/user.routes";

const app = express();
app.use(cors({ origin: process.env.ORIGIN }));
dotenv.config();
app.use(express.json({ limit: "10mb" }));
app.use(cookieParser());

app.use("/api/auth", authRouter);
app.use("/api/user", userRouter);

app.listen(process.env.PORT, async () => {
  await connectDB();
  await configCloudinary();
  console.log("server started and db connected");
});
