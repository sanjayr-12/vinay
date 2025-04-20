import express from "express";
import { protectRoutes } from "../middleware/protectRoutes";
import {
  addFeedBackController,
  deleteImageController,
  feedBackActionController,
  generateAIImageController,
  getAllFeedBackController,
  getImageController,
  getUserFeedBackController,
  imageUploadController,
} from "../controllers/userController";

const userRouter = express.Router();

userRouter.post("/upload-img", protectRoutes, imageUploadController);
userRouter.get("/get-imgs", protectRoutes, getImageController);
userRouter.post("/delete-img", protectRoutes, deleteImageController);

userRouter.post("/gen-img", protectRoutes, generateAIImageController);

userRouter.post("/feedback", protectRoutes, addFeedBackController);
userRouter.get("/feedback/all", protectRoutes, getAllFeedBackController);
userRouter.get("/feedback/user", protectRoutes, getUserFeedBackController);
userRouter.post("/feedback/action", protectRoutes, feedBackActionController)

export default userRouter;
