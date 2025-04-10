import { imageModel } from "../models/models";
import { deleteImage, imageUpload } from "../utils/handle.img";

export class UserService {
  async imageUpload(base64String: string, imageName: string, userId: string) {
    let [url, public_id] = await imageUpload(base64String);
    let newImage = {
      url,
      public_id,
      imageName,
      visibility: "PUBLIC",
      uploadedBy: userId,
      isAI: false,
    };
    await new imageModel(newImage).save();
    return true;
  }

  async getImages() {
    const imageData = await imageModel
      .find({})
      .sort({ _id: -1 })
      .populate("uploadedBy", "name")
      .exec();

    return imageData;
  }

  async deleteImage(docId: string, public_id: string) {
    const result = await deleteImage(public_id);
    if (!result) return false;
    await imageModel.findByIdAndDelete(docId);
    return true;
  }
}
