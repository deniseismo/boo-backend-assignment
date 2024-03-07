const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const { voteSchema } = require("./vote");

const commentInfoSchema = new Schema(
  {
    body: {
      type: String,
      required: true,
    },
    vote: {
      type: voteSchema,
      required: false,
    },
  },
  { timestamps: true }
);

const CommentInfo = mongoose.model("Comment", commentInfoSchema);
module.exports = CommentInfo;
