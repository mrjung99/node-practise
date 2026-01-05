import express from "express";
import { homeroute } from "./routes/home.route.js";
import { productRoute } from "./routes/product.route.js";
import { productMiddleware } from "./middlewares/products.middlewares.js";
const app = express();
const port = 3000;

/* const fun0 = (req, res, next) => {
  console.log("Hello from fun0");
  res.send("Hello from fun0");
  next();
};

const fun1 = (req, res, next) => {
  console.log("Hello from fun1");
  next();
};

const fun2 = (req, res, next) => {
  console.log("Hello from fun2");
};
//* we also pass array of handler method to the rote 0r multiple func with array
app.get("/", [fun0, fun1, fun2]); */

//! industry standard routes
app.use("/api/v1/home", homeroute);
app.use("/api/v1/products", productRoute);

app.listen(port, () => {
  console.log(`Server is running at port ${port}`);
});
