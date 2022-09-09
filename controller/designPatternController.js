import designPatternModel from "../models/designPatternModel.js";
import bcrypt from 'bcrypt';

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

  export const getAllPatterns = async (req, res) => {
    try {
      const allPatterns = await designPatternModel.find({}, { password: 0 });
      res.status(202).json(allPatterns);
    } catch (error) {
      console.error(error);
    }
  };

