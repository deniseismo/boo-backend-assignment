const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const voteSchema = new Schema(
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

const Vote = mongoose.model("Vote", voteSchema);
module.exports = {
  voteSchema,
  vote: Vote,
};
