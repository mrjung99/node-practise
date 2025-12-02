const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.setHeader("Content-Type", "text/html");
    res.write("<h1>Welcome to the Node.js server</h1>");
    res.end();
  }

  if (req.url === "/contact") {
    res.setHeader("Content-Type", "text/plain");
    res.write("Welcome to contact page");
    res.end();
  }
});

const PORT = 3000;
server.listen(PORT, () => {
  console.log(`Listening on port ${PORT} 😊`);
});
