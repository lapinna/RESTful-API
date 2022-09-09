import express from "express";
import {
  createPattern,
  getAllPatterns,
} from "../controller/designPatternController.js";

const router = express.Router();

router.post("/create", createPattern);

router.get("/get", getAllPatterns);

export default router;
