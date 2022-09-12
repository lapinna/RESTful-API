import express from "express";
import {verifySessionTokenPattern, verifySessionTokenAdmin} from "../authorized/authCheck.js"
import {
  getAllPatterns,
  getPatternById,
  deletePatternById,
  updatePatternById,
  deleteMultiplePatterns
} from "../controller/designPatternController.js";

const router = express.Router();

router.get("/get", verifySessionTokenAdmin, getAllPatterns);

router.get("/get/:id", verifySessionTokenPattern, getPatternById);

router.delete("/delete/:id", verifySessionTokenPattern, deletePatternById);

router.put("/update/:id", verifySessionTokenPattern, updatePatternById);

router.delete("/deleteMulti", verifySessionTokenAdmin, deleteMultiplePatterns);

export default router;
