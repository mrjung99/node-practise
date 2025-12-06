const http = require("http")

const server = http.createServer((req, res) => {
  if (req.url == "/") {
    res.write("Welcome to node js")
    res.end()
  }
})
const port = 3000

server.listen(port, () => {
  console.log(`Server is running at prot ${port}`);

})
