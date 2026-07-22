import Goal from "../models/Goal.js";
import MissionAnalysis from "../models/MissionAnalysis.js";
import { analyzeMission as buildPrompt } from "../services/ai/analyzer.js";

export const analyzeMission = async (goalId) => {
  try {
    // Fetch Goal
    const goal = await Goal.findById(goalId);

    if (!goal) {
      throw new Error("Goal not found");
    }

    // Build AI Prompt
    const prompt = await buildPrompt(goal);

    return prompt;

  } catch (error) {
    throw error;
  }
};