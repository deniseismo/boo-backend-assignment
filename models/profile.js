const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const profileSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: false,
    },
    mbti: {
      type: String,
      required: false,
    },
    enneagram: {
      type: String,
      required: false,
    },
    variant: {
      type: String,
      required: false,
    },
    tritype: {
      type: String,
      required: false,
    },
    socionics: {
      type: String,
      required: false,
    },
    sloan: {
      type: String,
      required: false,
    },
    psyche: {
      type: String,
      required: false,
    },
    image: {
      type: String,
      required: false,
      default:
        "https://boo.world/personalities/blogs/enfp-personality/enfp-compatibility-chart.svg",
    },
  },
  { timestamps: true }
);

const Profile = mongoose.model("Blog", profileSchema);
module.exports = Profile;
