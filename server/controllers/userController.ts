import { Request, Response } from "express";
import { UserService } from "../service/userService";
import Joi from "joi";

interface CustomRequest extends Request {
  userId?: string;
}

const userService = new UserService();

export const imageUploadController = async (
  req: CustomRequest,
  res: Response
) => {
  //   if (!req.roles.includes("ADMIN")) {
  //     res.status(401).json({
  //       status: "error",
  //       message: "You are not authorized to upload image",
  //     });
  //     return;
  //   }
  try {
    let requestSchema = Joi.object({
      imageBase64: Joi.string().min(1).required(),
      imageName: Joi.string().min(1).required(),
    });

    let { error } = requestSchema.validate(req.body);
    if (error) {
      res.status(406).json({ status: "error", message: error.message });
    }
    await userService.imageUpload(
      req.body.imageBase64,
      req.body.imageName,
      String(req.userId)
    );
    res.status(200).json({ status: "ok", message: "image uploaded" });
    return;
  } catch (error: any) {
    res
      .status(503)
      .json({ status: "error", message: "server error " + error.message });
    return;
  }
};

export const getImageController = async (req: CustomRequest, res: Response) => {
  try {
    const result = await userService.getImages();
    res.status(200).json({ status: "ok", images: result });
    return;
  } catch (error) {
    res.status(503).json({ status: "error", message: "server error" });
    return;
  }
};

export const deleteImageController = async (
  req: CustomRequest,
  res: Response
) => {
  try {
    let requestSchema = Joi.object({
      docId: Joi.string().min(1).required(),
      public_id: Joi.string().min(1).required(),
    });
    let { error } = requestSchema.validate(req.body);
    if (error) {
      res.status(406).json({ status: "error", message: error.message });
      return;
    }
    const result = await userService.deleteImage(
      req.body.docId,
      req.body.public_id
    );
    if (!result) {
      res
        .status(406)
        .json({ status: "error", message: "could not delete the image" });
      return;
    }
    res.status(200).json({ status: "ok", message: "image deleted" });
    return;
  } catch (error) {
    res.status(503).json({ status: "error", message: "server error" });
    return;
  }
};
