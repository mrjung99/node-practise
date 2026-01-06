import express from "express";
import rateLimit from "express-rate-limit";
import { validateLogin } from "../middlewares/validateLogin.middleware.js";
import { loginController } from "../controllers/login.controller.js";

export const loginRoute = express.Router();

// rate limiter to stop bruteforce attack ,dos, ddos || the following ratelimiter stops more than 10 attempts within 15 min
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 10,
  message: { success: false, message: "To many attempt, try again later!" },
  standardHeaders: true,
  legacyHeaders: false,
});

loginRoute.post("/login", limiter, validateLogin, loginController);
