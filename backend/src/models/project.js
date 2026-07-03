import mongoose from "mongoose";

const projectSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },

    description: {
      type: String,
      required: true,
    },

    imageUrl: {
      type: String,
      required: true,
    },

    techStack: [
      {
        type: String,
      },
    ],

    websiteUrl: String,

    githubUrl: String,

    featured: {
      type: Boolean,
      default: false,
    },

    aosDelay: Number,
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("Project", projectSchema);