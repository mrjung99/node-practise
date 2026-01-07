import express from "express";
import {
  deleteMovie,
  getMovie,
  getMovies,
  postMovie,
  updateMovie,
} from "../controllers/movies.controller.js";

export const movieRoute = express.Router();

movieRoute.route("/").get(getMovies).post(postMovie);

movieRoute.route("/:id").get(getMovie).patch(updateMovie).delete(deleteMovie);
