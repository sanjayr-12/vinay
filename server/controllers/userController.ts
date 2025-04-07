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
  } catch (error) {
    res.status(503).json({ status: "error", message: "server error" });
    return;
  }
};
