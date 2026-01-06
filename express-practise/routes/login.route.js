import express from "express";
import { validateLogin } from "../middlewares/validateLogin.middleware.js";
import { loginController } from "../controllers/login.controller.js";

export const loginRoute = express.Router();

loginRoute.post("/login", validateLogin, loginController);
