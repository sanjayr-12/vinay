import express from "express"
import { protectRoutes } from "../middleware/protectRoutes"

const userRouter = express.Router()

userRouter.post("/upload-img", protectRoutes)

export default userRouter