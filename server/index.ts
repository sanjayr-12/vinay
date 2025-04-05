import express from "express";
import dotenv from "dotenv";
import authRouter from "./routes/auth.routes";
import { connectDB } from "./DB/connect";
import cors from "cors";
import cookieParser from "cookie-parser";

const app = express();
app.use(cors({ origin: process.env.ORIGIN }));
dotenv.config();
app.use(express.json());
app.use(cookieParser());

app.use("/api/auth", authRouter);

app.listen(process.env.PORT, async () => {
  await connectDB();
  console.log("server started and db connected");
});
