import mongoose from "mongoose";

export const feedBackSchema = new mongoose.Schema({
  content: {
    type: String,
    required: true,
  },
  user: {
    type: mongoose.Schema.ObjectId,
    ref: "User",
  },
  isAddressed: {
    type: Boolean,
    default: false,
  },
  addressedBy: {
    type: mongoose.Schema.ObjectId,
    ref: "User",
    default: undefined,
  },
});
