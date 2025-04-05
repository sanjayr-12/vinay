import { Request, Response } from "express";
import Joi from "joi";
import { AuthService } from "../service/authService";

const authService = new AuthService();

export const authController = async (req: Request, res: Response) => {
  try {
    const requestSchema = Joi.object({
      token: Joi.string().min(1).required(),
    });
    let { error } = requestSchema.validate(req.body);
    if (error) {
      res.status(406).json({ status: "error", error: error.message });
      return;
    }
    const data = await authService.authUp(req.body.token);
    res.status(200).send({ message: "success" });
    return;
  } catch (error: any) {
    res.status(503).json({ status: "error", message: error.message });
    return;
  }
};
