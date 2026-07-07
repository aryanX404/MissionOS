import express from "express";
import { signup, login, completeSetup } from "../controllers/authController.js";
import protect from "../middlewares/authMiddleware.js";

const router = express.Router();

router.patch("/complete-setup", protect, completeSetup);
router.post("/signup", signup);
router.post("/login", login);

export default router;
