import { Request, Response } from "express";

export const selfRequestController = async (req: Request, res: Response) => {
  try {
    res.status(200).json({ message: "server restarted" });
    return;
  } catch (error: any) {
    res.status(503).json({ message: "server error " + error.message });
    return;
  }
};
