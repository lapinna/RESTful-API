import express from "express";
import { createPattern, loginPattern } from "../controller/authController.js";

const router = express.Router();

router.post("/register", createPattern);

router.post("/login", loginPattern);

export default router;