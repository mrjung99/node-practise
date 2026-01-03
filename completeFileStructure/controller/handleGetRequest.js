import { getProjects } from "../store/getProjects.js";

export async function handleGetRequest(req, res) {
  const { pathname } = new URL(req.url, `http://${req.headers.host}`);

  switch (pathname) {
    case "/":
      return res.end("<h1>Hello from home page</h1>");

    case "/projects":
      try {
        let data = await getProjects();

        res.statusCode = 200;
        res.setHeader("Content-Type", "text/html");

        return res.end(data);
      } catch (error) {
        console.log(error);
        res.statusCode = 405;
        return res.end(error);
      }

    default:
      return res.end("Requested resource does not exist.");
  }
}
