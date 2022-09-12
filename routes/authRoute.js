import express from "express";
import { createPattern } from "../controller/authController.js";

const router = express.Router();

router.post("/register", createPattern);

export default router;