const CommentInfo = require("../models/profile");

// a controller for handling commenting and voting on Boo
const addCommentAndVote = (req, res) => {
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

module.exports = {
  addCommentAndVote,
};
