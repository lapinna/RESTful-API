import mongoose from "mongoose";

const patternShema = new mongoose.Schema(
  {
    patternName: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    reference: {
      type: String,
    },
    author: {
      type: String,
    },
    editor: {
      type: String,
    },
    password: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

export default mongoose.model("pattern", patternShema);
