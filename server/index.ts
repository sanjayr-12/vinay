import express from "express";
import dotenv from "dotenv";
import authRouter from "./routes/auth.routes";
import { connectDB } from "./DB/connect";
import cors from "cors";
import cookieParser from "cookie-parser";
import configCloudinary from "./config/cloudinary";
import userRouter from "./routes/user.routes";
import path from "path";

const app = express();
app.use(cors({ origin: process.env.ORIGIN }));
dotenv.config();
app.use(express.json({ limit: "10mb" }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "../../client/dist")));

app.use("/api/auth", authRouter);
app.use("/api/user", userRouter);

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../../client/dist", "index.html"));
});

app.listen(process.env.PORT, async () => {
  await connectDB();
  await configCloudinary();
  console.log("server started and db connected");
});
