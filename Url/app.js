import { readFile, writeFile } from "fs/promises"
import http from "http"
import path from "path"
import crypto from "crypto"
import { link } from "fs"

const port = 3000
const DATA_PATH = path.join("data", "links.json")

const serveFile = async (res, filePath, contentType) => {
    try {
        const data = await readFile(filePath)
        res.writeHead(200, { "Content-Type": contentType })
        res.end(data)
    } catch (error) {
        res.writeHead(404, { "Content-Type": contentType })
        res.end("404 page not found")
    }
}

const getLinks = async () => {
    try {
        const data = await readFile(DATA_PATH, "utf-8")
        return JSON.parse(data)
    } catch (error) {
        if (error.code === "ENOENT") {
            await writeFile(DATA_PATH, JSON.stringify({}))
            return {}
        }
        throw error
    }
}

const saveLinks = async (links) => {
    await writeFile(DATA_PATH, JSON.stringify(links))
}

const server = http.createServer(async (req, res) => {
    const links = await getLinks()

    if (req.method === "GET") {
        if (req.url === "/") {
            return serveFile(res, path.join("public", "index.html"), "text/html")
        } else if (req.url === "/style.css") {
            return serveFile(res, path.join("public", "style.css"), "text/css")
        } else if (req.url === "/links") {
            const links = await getLinks()
            res.writeHead(200, { "Content-Type": "application/json" })
            return res.end(JSON.stringify(links))
        } else {
            const links = await getLinks()
            const shortCode = req.url.slice(1)

            if (links[shortCode]) {
                res.writeHead(302, { location: links[shortCode] })
                return res.end()
            }

            res.writeHead(400, { "Content-Type": "text/plain" })
            res.end("Shortened url not found")
        }
    }

    if (req.method === "POST" && req.url === "/shortend") {
        let body = ""

        req.on("data", (chunk) => (body += chunk))

        req.on("end", async () => {
            const { url, shortKey } = JSON.parse(body)

            if (!url) {
                res.writeHead(400, { "Content-Type": "text/plain" })
                return res.end("URL is required")
            }

            const finalShortCode = shortKey || crypto.randomBytes(4).toString("hex")

            if (links[finalShortCode]) {
                res.writeHead(400, { "Content-Type": "text/plain" })
                return res.end("Short code is already taken type another one")
            }

            links[finalShortCode] = url;
            await saveLinks(links)

            res.writeHead(200, { "Content-Type": "application/json" })
            res.end(JSON.stringify({ success: true, shortCode: finalShortCode }))
        })
    }
})

server.listen(port, () => {
    console.log(`Server is running at port ${port}`);
})