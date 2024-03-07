import mongoose from "mongoose";
const Schema = mongoose.Schema;

// profile schema
const profileSchema = new Schema(
  {
    // only name is required
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
      type: Number,
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

const Profile = mongoose.model("Profile", profileSchema);
export default Profile;
