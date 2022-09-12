import express from "express";
import {verifySessionToken} from "../authorized/authCheck.js"
import {
  getAllPatterns,
  getPatternById,
  deletePatternById,
  updatePatternById,
  deleteMultiplePatterns
} from "../controller/designPatternController.js";

const router = express.Router();

router.get("/get", getAllPatterns);

router.get("/get/:id", verifySessionToken, getPatternById);

router.delete("/delete/:id", verifySessionToken, deletePatternById);

router.put("/update/:id", verifySessionToken, updatePatternById);

router.delete("/deleteMulti", deleteMultiplePatterns);

export default router;
