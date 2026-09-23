import express from "express";
import healthController from "../controllers/health.controller.js";
const router = express.Router();

router.get("/database", healthController.checkHealth);
router.get("/api", healthController.checkApiHealth);

export default router;