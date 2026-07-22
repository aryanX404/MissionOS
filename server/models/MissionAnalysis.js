import mongoose from "mongoose";

const missionAnalysisSchema = new mongoose.Schema(
  {
    goal: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Goal",
      required: true,
      unique: true,
    },

    goalType: {
      type: String,
      default: "",
    },

    currentLevel: {
      type: String,
      default: "",
    },

    targetLevel: {
      type: String,
      default: "",
    },

    requiredSkills: [
      {
        type: String,
      },
    ],

    existingSkills: [
      {
        type: String,
      },
    ],

    strengths: [
      {
        type: String,
      },
    ],

    weaknesses: [
      {
        type: String,
      },
    ],

    constraints: [
      {
        type: String,
      },
    ],

    recommendedResources: [
      {
        type: String,
      },
    ],

    estimatedDifficulty: {
      type: String,
      enum: ["Easy", "Medium", "Hard", "Expert"],
      default: "Medium",
    },

    estimatedCompletionDays: {
      type: Number,
      default: 0,
    },

    confidenceScore: {
      type: Number,
      default: 0,
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model(
  "MissionAnalysis",
  missionAnalysisSchema
);