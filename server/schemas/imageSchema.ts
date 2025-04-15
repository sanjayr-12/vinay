import mongoose from "mongoose";

export const imageSchema = new mongoose.Schema(
  {
    url: {
      type: String,
      required: true,
    },
    public_id: {
      type: String,
      required: true,
    },
    imageName: {
      type: String,
      requried: true,
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
      type: Boolean,
      required: true,
    },
  },
  { timestamps: true }
);
