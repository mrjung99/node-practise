import express from "express";
import {
  checkId,
  deleteMovie,
  getMovie,
  getMovies,
  postMovie,
  updateMovie,
} from "../controllers/movies.controller.js";

export const movieRoute = express.Router();

// this middleware check the param with the name id and call the function checkeId
movieRoute.param("id", checkId);

movieRoute.route("/").get(getMovies).post(postMovie);

movieRoute.route("/:id").get(getMovie).patch(updateMovie).delete(deleteMovie);
