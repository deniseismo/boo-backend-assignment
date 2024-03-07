import Profile from "../models/profile.js";
import CommentInfo from "../models/comment.js";
import fakeData from "./utils/fakeData.js";
import { validateNotEmpty, validateEquality } from "./utils/validators.js";
import { dbConnect, dbDisconnect } from "./utils/dbHandler.js";

before(async () => {
  await dbConnect();
});
after(async () => {
  await dbDisconnect();
});

// testing creating profiles
describe("Profile Model Test", () => {
  it("should validate saving/creating a new profile", async () => {
    const validProfileFull = new Profile(fakeData.fakeProfiles.fakeProfileFull);
    const savedProfileFull = await validProfileFull.save();

    validateNotEmpty(savedProfileFull);

    validateEquality(
      savedProfileFull.name,
      fakeData.fakeProfiles.fakeProfileFull.name
    );
    validateEquality(
      savedProfileFull.description,
      fakeData.fakeProfiles.fakeProfileFull.description
    );
    validateEquality(
      savedProfileFull.mbti,
      fakeData.fakeProfiles.fakeProfileFull.mbti
    );
    validateEquality(
      savedProfileFull.enneagram,
      fakeData.fakeProfiles.fakeProfileFull.enneagram
    );
    validateEquality(
      savedProfileFull.variant,
      fakeData.fakeProfiles.fakeProfileFull.variant
    );
    validateEquality(
      savedProfileFull.tritype,
      fakeData.fakeProfiles.fakeProfileFull.tritype
    );
    validateEquality(
      savedProfileFull.socionics,
      fakeData.fakeProfiles.fakeProfileFull.socionics
    );
    validateEquality(
      savedProfileFull.sloan,
      fakeData.fakeProfiles.fakeProfileFull.sloan
    );
    validateEquality(
      savedProfileFull.psyche,
      fakeData.fakeProfiles.fakeProfileFull.psyche
    );
    validateEquality(
      savedProfileFull.image,
      fakeData.fakeProfiles.fakeProfileFull.image
    );

    const validProfileNameOnly = new Profile(
      fakeData.fakeProfiles.fakeProfileNameOnly
    );
    const savedProfileNameOnly = await validProfileNameOnly.save();

    validateNotEmpty(savedProfileNameOnly);

    validateEquality(
      savedProfileNameOnly.name,
      fakeData.fakeProfiles.fakeProfileNameOnly.name
    );
  });
});

// testing leaving comments, voting
describe("Comment and Vote Test", () => {
  it("should validate leaving a comment, and/or voting", async () => {
    const validCommentAndFullVote = new CommentInfo(
      fakeData.fakeComments.fakeCommentAndFullVote
    );
    const savedCommentAndFullVote = await validCommentAndFullVote.save();

    validateNotEmpty(savedCommentAndFullVote);

    validateEquality(
      savedCommentAndFullVote.body,
      fakeData.fakeComments.fakeCommentAndFullVote.body
    );
    validateEquality(
      savedCommentAndFullVote.vote.mbti,
      fakeData.fakeComments.fakeCommentAndFullVote.vote.mbti
    );
    validateEquality(
      savedCommentAndFullVote.vote.enneagram,
      fakeData.fakeComments.fakeCommentAndFullVote.vote.enneagram
    );
    validateEquality(
      savedCommentAndFullVote.vote.zodiac,
      fakeData.fakeComments.fakeCommentAndFullVote.vote.zodiac
    );

    const validCommentTextOnly = new CommentInfo(
      fakeData.fakeComments.fakeCommentTextOnly
    );
    const savedCommentTextOnly = await validCommentTextOnly.save();

    validateNotEmpty(savedCommentTextOnly);

    validateEquality(
      savedCommentTextOnly.body,
      fakeData.fakeComments.fakeCommentTextOnly.body
    );

    const validCommentAndPartialVote = new CommentInfo(
      fakeData.fakeComments.fakeCommentAndPartialVote
    );
    const savedCommentAndPartialVote = await validCommentAndPartialVote.save();

    validateNotEmpty(savedCommentAndPartialVote);

    validateEquality(
      savedCommentAndPartialVote.vote.zodiac,
      fakeData.fakeComments.fakeCommentAndPartialVote.vote.zodiac
    );
  });
});
