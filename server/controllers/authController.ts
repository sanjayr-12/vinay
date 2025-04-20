import { Request, Response } from "express";
import Joi from "joi";
import { AuthService } from "../service/authService";
import { generateToken } from "../utils/jwt";
import { verifyJWT } from "../utils/verify.jwt";

const authService = new AuthService();

export const authController = async (req: Request, res: Response) => {
  try {
    const requestSchema = Joi.object({
      token: Joi.string().min(1).required(),
      roles: Joi.array().items(Joi.string().min(1).required()).required(),
    });
    let { error } = requestSchema.validate(req.body);
    if (error) {
      res.status(406).json({ status: "error", error: error.message });
      return;
    }
    const [status, data] = await authService.authUp(
      req.body.token,
      req.body.roles
    );
    if (!status) {
      res.status(406).json({ status: "error", message: data });
      return;
    }
    if (typeof data === "object") {
      generateToken(data?._id.toString(), data?.roles, res);
    }
    res.status(200).send({ message: "ok", userData: data });
    return;
  } catch (error: any) {
    res.status(503).json({ status: "error", message: error.message });
    return;
  }
};

export const verifyAuthController = async (req: Request, res: Response) => {
  try {
    const token = req.cookies.token;
    const [verify, payload] = await verifyJWT(token);
    if (!verify) {
      res.status(406).json({ status: "error", payload });
      return;
    }
    const [status, data] = await authService.verifyUser(payload);
    if (!status) {
      res.status(406).json({ status: "error", data });
      return;
    }
    res.status(200).json({ status: "ok", userData: data });
    return;
  } catch (error: any) {
    res.status(503).json({ status: "error", message: error.message });
    return;
  }
};

export const logoutController = async (req: Request, res: Response) => {
  try {
    await authService.logout(res);
    res.status(200).json({ status: "ok", message: "Logged out" });
    return;
  } catch (error: any) {
    res
      .status(503)
      .json({ status: "error", message: "server error " + error.message });
    return;
  }
};
