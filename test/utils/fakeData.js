const fakeProfiles = {
  fakeProfileNameOnly: {
    name: "John",
  },
  fakeProfileInvalidNameType: {
    name: 1,
  },
  fakeProfileNoNameProvided: {
    description: "Adolph Larrue Martinez III.",
  },
  fakeProfileFull: {
    name: "A Martinez",
    description: "Adolph Larrue Martinez III.",
    mbti: "ISFJ",
    enneagram: "9w3",
    variant: "sp/so",
    tritype: 725,
    socionics: "SEE",
    sloan: "RCOEN",
    psyche: "FEVL",
    image: "https://soulverse.boo.world/images/1.png",
  },
};

const fakeComments = {
  fakeCommentTextOnly: {
    body: "A comment about celebrity's personality",
  },
  fakeCommentNoTextProvided: {},
  fakeCommentAndFullVote: {
    body: "A comment about celebrity's personality",
    vote: {
      mbti: "ISFJ",
      enneagram: "9w3",
      zodiac: "libra",
    },
  },
  fakeCommentAndPartialVote: {
    body: "A comment about celebrity's personality",
    vote: {
      zodiac: "libra",
    },
  },
};

export default {
  fakeProfiles,
  fakeComments,
};
