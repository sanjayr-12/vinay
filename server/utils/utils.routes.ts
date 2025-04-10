import express from "express";
import { selfRequestController } from "./utils.controller";

const utilRouter = express.Router();

utilRouter.get("/self", selfRequestController);

export default utilRouter;
