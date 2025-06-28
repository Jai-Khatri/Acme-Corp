import express from "express";
import { createUser, getUser, VerifyUser } from "../controllers/user.controller.js";

const router = express.Router();

router.post("/" , createUser)
router.get("/:id" , getUser)
router.post("/login", VerifyUser)

export default router;