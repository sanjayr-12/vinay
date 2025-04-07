import mongoose from "mongoose";
import { userSchema } from "../schemas/userSchema";
import { imageSchema } from "../schemas/imageSchema";

export const userModel = mongoose.model("User", userSchema);

export const imageModel = mongoose.model("Image",imageSchema)