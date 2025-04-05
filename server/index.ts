import express from "express";
import dotenv from "dotenv";
import authRouter from "./routes/auth.routes";
import { connectDB } from "./DB/connect";
import cors from "cors";

const app = express();
app.use(cors({ origin: "http://localhost:5173" }));
dotenv.config();
app.use(express.json());

app.use("/api/auth", authRouter);

app.listen(process.env.PORT, async () => {
  await connectDB();
  console.log("server started and db connected");
});
