import mongoose from "mongoose";

const taskSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
    },

    completed: {
      type: Boolean,
      default: false,
    },

    completedAt: {
      type: Date,
      default: null,
    },
  },
  {
    _id: true,
  }
);

const dailyMissionSchema = new mongoose.Schema(
  {
    goal: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Goal",
      required: true,
    },

    date: {
      type: Date,
      required: true,
    },

    tasks: [taskSchema],

    estimatedTime: {
      type: Number,
      default: 2, // hours
    },

    completionPercentage: {
      type: Number,
      default: 0,
    },

    status: {
      type: String,
      enum: ["pending", "inProgress", "completed", "missed"],
      default: "pending",
    },

    aiGenerated: {
      type: Boolean,
      default: true,
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("DailyMission", dailyMissionSchema);