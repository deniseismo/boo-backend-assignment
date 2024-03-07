import mongoose from "mongoose";
const Schema = mongoose.Schema;

// vote schema, no field is required
export const voteSchema = new Schema(
  {
    mbti: {
      type: String,
      required: false,
    },
    enneagram: {
      type: String,
      required: false,
    },
    zodiac: {
      type: String,
      required: false,
    },
  },
  { timestamps: true }
);

export const Vote = mongoose.model("Vote", voteSchema);
