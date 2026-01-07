import express from "express";
import { getMovies, postMovie } from "../controllers/movies.controller.js";
export const movieRoute = express.Router();

movieRoute.get("/", getMovies);
movieRoute.post("/", postMovie);
