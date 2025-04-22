import express from "express";
import { protectRoutes } from "../middleware/protectRoutes";
import {
  addFeedBackController,
  deleteImageController,
  feedBackActionController,
  generateAIImageController,
  getAllFeedBackController,
  getAllUsersController,
  getImageController,
  getUserFeedBackController,
  getUserInfoController,
  imageUploadController,
} from "../controllers/userController";

const userRouter = express.Router();

userRouter.post("/upload-img", protectRoutes, imageUploadController);
userRouter.post("/get-imgs", protectRoutes, getImageController);
userRouter.post("/delete-img", protectRoutes, deleteImageController);

userRouter.post("/gen-img", protectRoutes, generateAIImageController);

userRouter.post("/feedback", protectRoutes, addFeedBackController);
userRouter.get("/feedback/all", protectRoutes, getAllFeedBackController);
userRouter.get("/feedback/user", protectRoutes, getUserFeedBackController);
userRouter.post("/feedback/action", protectRoutes, feedBackActionController);

userRouter.get("/all", protectRoutes, getAllUsersController);

userRouter.get("/info", protectRoutes, getUserInfoController);

export default userRouter;
