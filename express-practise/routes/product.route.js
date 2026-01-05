import express from "express";
import { products } from "../controllers/products.controller.js";
import { productMiddleware } from "../middlewares/products.middlewares.js";
export const productRoute = express.Router();

productRoute.get("/", (req, res) => {
  console.log("hello from homepage");
  res.send("Hello from home page");
});

productRoute.get("/:id", productMiddleware, products);
