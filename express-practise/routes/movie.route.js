import express from "express";
import {
  deleteMovie,
  getMovie,
  getMovies,
  postMovie,
  updateMovie,
} from "../controllers/movies.controller.js";

export const movieRoute = express.Router();

movieRoute.get("/", getMovies);
movieRoute.get("/:id", getMovie);
movieRoute.post("/", postMovie);
movieRoute.patch("/:id", updateMovie);
movieRoute.delete("/:id", deleteMovie);
