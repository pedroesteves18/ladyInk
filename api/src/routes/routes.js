import health from "./health.routes.js";
import userRoutes from "./user.routes.js";
import authRoutes from "./auth.routes.js";
import express from "express";

const router = express.Router();

router.use("/auth", authRoutes);
router.use("/health", health);
router.use("/users", userRoutes);

export default router;