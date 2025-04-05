import express from "express";
import { authController, verifyAuthController } from "../controllers/authController";

const authRouter = express.Router();

authRouter.post("/", authController);
authRouter.get("/verify", verifyAuthController)

export default authRouter;
