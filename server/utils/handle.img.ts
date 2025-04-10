import { v2 as cloudinary } from "cloudinary";
const options = {
  use_fileName: true,
  unique_fileName: false,
  overwrite: true,
};
export const imageUpload = async (image64: string) => {
  try {
    const uploadResult = await cloudinary.uploader.upload(image64, options);
    const optimizeUrl = cloudinary.url(uploadResult.public_id, {
      fetch_format: "auto",
      quality: "auto",
      width: 1200,
      height: 1200,
    });
    return [optimizeUrl, uploadResult.public_id];
  } catch (error) {
    throw error;
  }
};

export const deleteImage = async (public_id: string) => {
  try {
    await cloudinary.uploader.destroy(public_id);
    return true;
  } catch (error) {
    throw error;
  }
};
