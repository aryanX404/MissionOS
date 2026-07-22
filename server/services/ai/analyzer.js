import { SYSTEM_PROMPT } from "./plannerPrompt.js";

export const analyzeMission = async (goal) => {
  const prompt = `
Goal Title:
${goal.title}

Description:
${goal.description}

Priority:
${goal.priority}

Deadline:
${goal.deadline}

Daily Hours:
${goal.estimatedDailyHours}
`;

  return {
    systemPrompt: SYSTEM_PROMPT,
    userPrompt: prompt,
  };
};