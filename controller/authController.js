import bcrypt from "bcrypt";
import designPatternModel from "../models/designPatternModel.js";
import jwt from "jsonwebtoken";

export const createPattern = async (req, res) => {
  try {
    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(req.body.password, salt);
    const newPattern = new designPatternModel({
      ...req.body,
      password: hash,
      isAdmin: false,
    });
    await newPattern.save();
    res.status(201).send("New pattern is created!");
  } catch (error) {
    res.status(405).send(error);
    console.error(error);
  }
};

export const loginPattern = async (req, res) => {
  try {
    const pattern = await designPatternModel.findOne({
      patternName: req.body.patternName,
    });
    if (!pattern) {
      return res.status(405).send("Wrong user or password!");
    }

    const isPasswordCorrect = await bcrypt.compare(
      req.body.password,
      pattern.password
    );

    if (!isPasswordCorrect) {
      return res.status(405).send("Wrong user or password!");
    }

    const token = jwt.sign(
      { id: pattern._id, isAdmin: pattern.isAdmin },
      process.env.JWT_SECRET,
      {
        expiresIn: "1 day",
      }
    );

    return res
      .cookie("session_token", token, {
        httpOnly: true,
      })
      .status(201)
      .send("Successfully LOGGED in!");
  } catch (error) {
    console.error(error);
  }
};
