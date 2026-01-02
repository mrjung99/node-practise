//!what we will learn
//* to create a server
//* to create and setup .env file

import express from "express";
import { PORT } from "./env.js";
import path from "path";
// import path from "path";

const app = express();

//this will send the html,css and js file
// const absolutePath = path.join(import.meta.dirname, "public");
// app.use(express.static(absolutePath)) or

app.use(express.static("public"));

app.use(express.urlencoded());
app.post("/contact", (req, res) => {
  console.log(req.body);
  res.redirect("/");
});

app.use((req, res) => {
  return res
    .status(404)
    .sendFile(path.join(import.meta.dirname, "views", "error.html"));
});

app.get("/", (req, res) => {
  const { name, message } = req.body;
  res.status(200).send({ name, message });
});

// app.get("/", (req, res) => {
// console.log(import.meta.dirname);
// console.log(import.meta.filename);

//     const pagePath = path.join(import.meta.dirname, "public", "index.html")
//     res.sendFile(pagePath)
// res.send("Hello express js")
// })

// const PORT = PORT || 3000
app.listen(PORT, () => {
  console.log(`Listening at port no ${PORT}`);
});
