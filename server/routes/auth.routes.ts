import express from "express";
import {
  authController,
  logoutController,
  verifyAuthController,
} from "../controllers/authController";
import { protectRoutes } from "../middleware/protectRoutes";

const authRouter = express.Router();

authRouter.post("/", authController);
authRouter.get("/verify", verifyAuthController);
authRouter.get("/logout", protectRoutes, logoutController);

export default authRouter;
