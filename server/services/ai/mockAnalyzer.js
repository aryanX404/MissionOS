export const mockMissionAnalysis = async (goal) => {
  return {
    goalType: "Learning",

    currentLevel: "Beginner",

    targetLevel: "Professional",

    requiredSkills: [
      "Programming Fundamentals",
      "Problem Solving",
      "Projects"
    ],

    existingSkills: [],

    strengths: [],

    weaknesses: [],

    constraints: [
      `${goal.estimatedDailyHours} hours/day`
    ],

    recommendedResources: [],

    estimatedDifficulty: "Medium",

    estimatedCompletionDays: 180,

    confidenceScore: 90,
  };
};