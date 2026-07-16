import express from "express";

import {
  createGoal,
  getGoals,
  getGoalById,
} from "../controllers/goalController.js";

import protect from "../middlewares/authMiddleware.js";

const router = express.Router();

router.use(protect);

router.route("/")
      .post(createGoal)
      .get(getGoals);
router.route("/:id").get(getGoalById);

export default router;