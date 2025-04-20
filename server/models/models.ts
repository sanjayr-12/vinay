import mongoose from "mongoose";
import { userSchema } from "../schemas/userSchema";
import { imageSchema } from "../schemas/imageSchema";
import { feedBackSchema } from "../schemas/feedBackSchema";

export const userModel = mongoose.model("User", userSchema);

export const imageModel = mongoose.model("Image", imageSchema)

export const feedBackModel = mongoose.model("FeedBack", feedBackSchema)
