import CommentInfo from "../models/comment.js";

// a controller for handling commenting and voting on Boo
export const addCommentAndVote = (req, res) => {
  const commentInfo = new CommentInfo(req.body);

  commentInfo
    .save()
    .then((result) => {
      res.redirect("/");
    })
    .catch((err) => {
      console.log(err);
    });
};
