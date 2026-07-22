import mongoose from "mongoose";

const goalSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },

    title: {
      type: String,
      required: true,
      trim: true,
    },

    description: {
      type: String,
      default: "",
    },

    category: {
      type: String,
      required: true,
      enum: [
        "longTerm",
        "academics",
        "career",
        "projects",
        "sports",
        "health",
        "personal",
      ],
    },

    priority: {
      type: String,
      enum: ["Low", "Medium", "High"],
      default: "Medium",
    },

    deadline: Date,

    progress: {
      type: Number,
      default: 0,
    },

    status: {
      type: String,
      enum: ["active", "paused", "completed", "archived"],
      default: "active",
    },

    roadmapGenerated: {
      type: Boolean,
      default: false,
    },

    currentPhase: {
      type: Number,
      default: 1,
    },

    estimatedDailyHours: {
      type: Number,
      default: 2,
    },

    lastAIGeneratedAt: {
      type: Date,
      default: null,
    },

    completed: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  },
);

export default mongoose.model("Goal", goalSchema);
