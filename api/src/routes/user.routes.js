import userController from "../controllers/user.controller.js";
import hashPassword from "../middlewares/hashPassword.js";
import express from "express";

const router = express.Router();

router.post("/", hashPassword, userController.createUser);

export default router;