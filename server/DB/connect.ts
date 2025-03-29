import mongoose from "mongoose";

export const connectDB = async () => {
  const uri: string = process.env.MONGO_URI || "";
  try {
    await mongoose.connect(uri);
  } catch (error: any) {
    throw new Error(error.message)
  }
};
