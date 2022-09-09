import express from "express";
import {
  createPattern,
  getAllPatterns,
  getPatternById,
  deletePatternById,
  updatePatternById
} from "../controller/designPatternController.js";

const router = express.Router();

router.post("/create", createPattern);

router.get("/get", getAllPatterns);

router.get("/get/:id", getPatternById);

router.delete("/delete/:id", deletePatternById);

router.put("/update/:id", updatePatternById);

export default router;
