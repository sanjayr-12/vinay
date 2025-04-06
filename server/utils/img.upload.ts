import { v2 as cloudinary } from "cloudinary";

export const imageUpload = async (image64: string) => {
  const options = {
    use_fileName: true,
    unique_fileName: false,
    overwrite: true,
  };
  try {
    const uploadResult = await cloudinary.uploader.upload(image64, options);
    const optimizeUrl = cloudinary.url(uploadResult.public_id, {
      fetch_format: "auto",
      quality: "auto",
      crop: "auto",
      gravity: "auto",
      width: 1200,
      height: 1200,
    });
    return optimizeUrl;
  } catch (error) {
    throw error;
  }
};
