import { boolean, required } from "joi";
import mongoose from "mongoose";

export const imageSchema = new mongoose.Schema(
  {
    url: {
      type: String,
      required: true,
    },
    visibility: {
      type: String,
      enum: ["PUBLIC", "PRIVATE"],
      required: true,
    },
    uploadedBy: {
      type: mongoose.Schema.ObjectId,
      ref: "User",
    },
    isAI: {
      type: boolean,
      required: true,
    },
  },
  { timestamps: true }
);
