import express from "express";
import { loginRoute } from "./routes/login.route.js";
import { movieRoute } from "./routes/movie.route.js";

export const app = express();

app.use(express.json());
// app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));

//routes
app.use("/api/movies", movieRoute);
app.use("/api/auth", loginRoute);

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ success: false, message: "Internal server error " });
});
