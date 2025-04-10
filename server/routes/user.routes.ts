import express from "express";
import { protectRoutes } from "../middleware/protectRoutes";
import {
  deleteImageController,
  getImageController,
  imageUploadController,
} from "../controllers/userController";

const userRouter = express.Router();

userRouter.post("/upload-img", protectRoutes, imageUploadController);
userRouter.get("/get-imgs", protectRoutes, getImageController);
userRouter.post("/delete-img", protectRoutes, deleteImageController);

export default userRouter;
