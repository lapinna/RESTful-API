import designPatternModel from "../models/designPatternModel.js";

export const getAllPatterns = async (req, res) => {
  try {
    const allPatterns = await designPatternModel.find({}, { password: 0 });
    res.status(202).json(allPatterns);
  } catch (error) {
    console.error(error);
  }
};

export const getPatternById = async (req, res) => {
  try {
    const pattern = await designPatternModel.findById(req.params.id);
    const { password, ...remainingPatternData } = pattern._doc;
    res.status(200).json(remainingPatternData);
  } catch (error) {
    console.error(error);
  }
};

export const deletePatternById = async (req, res) => {
  try {
    await designPatternModel.findByIdAndDelete(req.params.id);
    res.status(200).send(`Pattern was deleted`);
  } catch (error) {
    console.error(error);
  }
};

export const updatePatternById = async (req, res) => {
  try {
    const updatedPattern = await designPatternModel.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      { new: true }
    );
    const { password, ...remainingPatternData } = updatedPattern._doc;
    res.status(200).json(remainingPatternData);
  } catch (error) {
    console.error(error);
  }
};

export const deleteMultiplePatterns = async (req, res) => {
  try {
    await designPatternModel.collection.deleteMany(req.body);
    res.status(200).send(`Patterns were deleted`);
  } catch (error) {
    console.error(error);
  }
};
