import express from "express";
import { getUserInfo, postUserInfo } from "../controllers/userInfo.controller.js";
import { authMiddleware } from "../middlewares/auth.js";


const router = express.Router();

router.get("/" , authMiddleware, getUserInfo)
router.post("/:userId" , postUserInfo)

export default router;