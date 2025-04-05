import { NextFunction, Request, Response } from "express";
import jwt, { JwtPayload } from "jsonwebtoken";

export const protectRoutes = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const token = req.cookies.token;
  if (!token) {
    return res
      .status(401)
      .json({ status: "error", error: "No token provided" });
  }
  if (!process.env.JWT_SECRET) {
    return res
      .status(503)
      .json({ status: "error", error: "Server error: JWT_SECRET not set" });
  }
  try {
    const verify = jwt.verify(token, process.env.JWT_SECRET) as JwtPayload;
    (req as Request & { userId?: string }).userId = verify.id;
    (req as Request & { roles?: string[] }).roles = verify.roles;
    next();
  } catch (error) {
    return res.status(403).json({ status: "error", error: "Invalid token" });
  }
};
