import express from "express";
import dotenv from "dotenv";
import authRouter from "./routes/auth.routes";
import { connectDB } from "./DB/connect";

const app = express();

dotenv.config();

app.use("/api/auth", authRouter);

app.listen(process.env.PORT, async () => {
  await connectDB();
  console.log("server started and db connected");
});
