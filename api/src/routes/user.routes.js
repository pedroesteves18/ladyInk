import userController from "../controllers/user.controller.js";
import hashPassword from "../middlewares/hashPassword.js";
import hasPermission from "../middlewares/hasPermission.js";
import express from "express";

const router = express.Router();

router.post("/", hasPermission, hashPassword, userController.createUser);

export default router;