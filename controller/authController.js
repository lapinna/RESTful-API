import bcrypt from "bcrypt";
import designPatternModel from "../models/designPatternModel.js"

export const createPattern = async (req, res) => {
  try {
    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(req.body.password, salt);
    const newPattern = new designPatternModel({
      ...req.body,
      password: hash,
    });
    await newPattern.save();
    res.status(201).send("New pattern is created!");
  } catch (error) {
    res.status(405).send(error);
    console.error(error);
  }
};