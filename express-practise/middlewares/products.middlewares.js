export const productMiddleware = (req, res, next) => {
  console.log("Hello from product middleware!!");
  next();
};
