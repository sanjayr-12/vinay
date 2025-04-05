import { Response } from "express";
import jwt from "jsonwebtoken";

export const generateToken = (id: string, roles: string[], res: Response) => {
  if (!process.env.JWT_SECRET) {
    throw new Error("JWT_SECRET is not defined");
  }

  const token = jwt.sign({ id, roles }, process.env.JWT_SECRET, {
    expiresIn: "1d",
  });

  res.cookie("token", token, {
    maxAge: 1 * 24 * 60 * 60 * 1000,
    httpOnly: true,
    path: "/",
    sameSite: "none",
    secure: true,
  });
};
