import express from "express";
import {
  getAllPatterns,
  getPatternById,
  deletePatternById,
  updatePatternById,
  deleteMultiplePatterns
} from "../controller/designPatternController.js";

const router = express.Router();

router.get("/get", getAllPatterns);

router.get("/get/:id", getPatternById);

router.delete("/delete/:id", deletePatternById);

router.put("/update/:id", updatePatternById);

router.delete("/deleteMulti", deleteMultiplePatterns);

export default router;