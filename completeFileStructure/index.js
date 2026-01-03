import http from "http";
import { handleGetRequest } from "./controller/handleGetRequest.js";
import { handlePostRequest } from "./controller/handlePostRequest.js";
import { handlePatchRequest } from "./controller/handlePatchRequest.js";
import { handlePutRequest } from "./controller/handlePutRequest.js";

const server = http.createServer((req, res) => {
  const { method } = req;

  switch (method) {
    case "GET":
      return handleGetRequest(req, res);
    case "POST":
      return handlePostRequest(req, res);
    case "PATCH":
      return handlePatchRequest(req, res);
    case "PUT":
      return handlePutRequest(req, res);
    default:
      res.statusCode = 405;
      res.end(`Method ${method} not allowed.`);
  }
});

const PORT = 3000;

server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
