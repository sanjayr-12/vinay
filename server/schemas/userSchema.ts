import mongoose from "mongoose";

export const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    imageUrl: {
      type: String,
    },
    roles: {
      type: Array,
      required: true,
    },
  },
  { timestamps: true }
);
