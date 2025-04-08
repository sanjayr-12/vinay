import { imageModel } from "../models/models";
import { imageUpload } from "../utils/img.upload";

export class UserService {
  async imageUpload(base64String: string, imageName: string, userId: string) {
    let url = await imageUpload(base64String);
    let newImage = {
      url,
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
}
