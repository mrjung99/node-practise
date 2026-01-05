export const products = (req, res) => {
  res.send(
    `Product id is ${req.params.id} \n This will redirect from route and controller`
  );
};
