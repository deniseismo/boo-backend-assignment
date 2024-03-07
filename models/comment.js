import mongoose from "mongoose";
import { voteSchema } from "./vote.js";

const Schema = mongoose.Schema;

// comment schema (with an embedded vote)
const commentInfoSchema = new Schema(
  {
    body: {
      type: String,
      required: true,
    },
    // vote is optional
    vote: {
      type: voteSchema,
      required: false,
    },
  },
  { timestamps: true }
);

const CommentInfo = mongoose.model("Comment", commentInfoSchema);
export default CommentInfo;
