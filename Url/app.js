import { log } from "console"
import { readFile } from "fs/promises"
import http from "http"
import path from "path"

const port = 3000

const serveFile = async (res, filePath, contentType) => {
    try {
        const data = await readFile(filePath)
        res.writeHead(200, { "Content-Type": contentType })
        res.end(data)
    } catch (error) {
        res.readableEnded("404 page not found")
        res.end("404 page not found")
    }
}

const server = http.createServer(async (req, res) => {
    if (req.method === "GET") {
        if (req.url === "/") {
            return serveFile(res, path.join("public", "index.html"), "text/html")
        }
        else if (req.method === "GET") {
            if (req.url === "/style.css") {
                return serveFile(res, path.join("public", "style.css"), "text/css")
            }
        }
    }
})

server.listen(port, () => {
    console.log(`Server is running at port ${port}`);

})