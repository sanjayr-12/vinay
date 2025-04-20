import cluster from "cluster";
import { availableParallelism } from "os";
import express from "express";
import dotenv from "dotenv";
import authRouter from "./routes/auth.routes";
import { connectDB } from "./DB/connect";
import cors from "cors";
import cookieParser from "cookie-parser";
import configCloudinary from "./config/cloudinary";
import userRouter from "./routes/user.routes";
import path from "path";
import utilRouter from "./utils/utils.routes";
import { reStart } from "./utils/self.cron";

const numCPUs = availableParallelism();

if (cluster.isPrimary) {
  console.log(`Master ${process.pid} is running`);

  for (let i = 0; i < numCPUs; i++) {
    cluster.fork();
  }

  cluster.on("exit", (worker, code, signal) => {
    console.log(`Worker ${worker.process.pid} died. Spawning a new one...`);
    cluster.fork();
  });
} else {
  dotenv.config();
  const app = express();

  app.use(express.json({ limit: "10mb" }));
  app.use(cookieParser());
  app.use(express.static(path.join(__dirname, "../../client/dist")));

  app.use("/api/auth", authRouter);
  app.use("/api/user", userRouter);
  app.use("/api/utils", utilRouter);

  app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "../../client/dist", "index.html"));
  });

  app.listen(process.env.PORT, async () => {
    await connectDB();
    await configCloudinary();
    reStart();
    console.log(
      `Worker ${process.pid} started and server running on port ${process.env.PORT}`
    );
  });
}
