import express from "express";
export const homeroute = express.Router();

homeroute.get("/", (req, res) => {
  console.log("hello from homepage");
  res.send("Hello from home page");
});
