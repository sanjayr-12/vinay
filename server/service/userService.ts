import { feedBackModel, imageModel } from "../models/models";
import { deleteImage, imageUpload } from "../utils/handle.img";
import { textToImage } from "../utils/TextToImage";

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

  async generateAIImage(prompt: string) {
    const result = await textToImage(prompt);
    // console.log(result)
  }

  async addFeedBack(content: string, userId: string) {
    const newFeedBack = {
      content,
      user: userId,
    };
    await new feedBackModel(newFeedBack).save();
    return true;
  }

  async allFeedBack() {
    const data = await feedBackModel
      .find({ isAddressed: false })
      .populate("user", "name")
      .populate("addressedBy", "name");
    return data;
  }

  async userFeedBack(userId: string) {
    const data = await feedBackModel
      .find({ user: userId })
      .populate("user", "name")
      .populate("addressedBy", "name");
    return data;
  }

  async feedBackAction(userId: string, id: string) {
    await feedBackModel.findByIdAndUpdate(id, {
      addressedBy: userId,
      isAddressed: true,
    });
    return true;
  }
}
