import Goal from "../models/Goal.js";

export const createGoal = async (req, res) => {
  try {
    const goal = await Goal.create({
      ...req.body,
      user: req.user.id,
    });

    res.status(201).json(goal);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

export const getGoals = async (req, res) => {
  try {
    const { category } = req.query;

    const goals = await Goal.find({
      user: req.user.id,
      category,
    }).sort({
      createdAt: -1,
    });

    res.json(goals);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

export const getGoalById = async (req, res) => {
  try {
    const goal = await Goal.findOne({
      _id: req.params.id,

      user: req.user.id,
    });

    if (!goal) {
      return res.status(404).json({
        message: "Goal not found.",
      });
    }

    res.json(goal);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};
