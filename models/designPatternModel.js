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
      type: String
    },
    author: {
      type: String
    },
    editor: {
      type: String
    },
  },
  { timestamps: true }
);

export default mongoose.model("pattern", patternShema)