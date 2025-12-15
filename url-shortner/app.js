import { readFile, writeFile } from "fs/promises"
import http from "http"
import path from "path"
import crypto from "crypto"

const PORT = 3000
const DATA_PATH = path.join("data", "links.json")

const serveFile = async (res, filePath, contentType) => {
    try {
        const data = await readFile(filePath)
        res.writeHead(200, { "Content-Type": contentType })
        res.end(data)
    } catch (error) {
        res.writeHead(404, { "Content-Type": "text/plain" })
        res.end("page not found")
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

const saveLInks = async (links) => {
    return await writeFile(DATA_PATH, JSON.stringify(links))
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
            res.writeHead(200, { "Content-Type": "aaplication/json" })
            return res.end(JSON.stringify(links))
        } else {
            const links = await getLinks()
            const shortCode = req.url.slice(1)
            if (links[shortCode]) {
                res.writeHead(302, { location: links[shortCode] })
                return res.end()
            }

            res.writeHead(400, { "Content-Type": "text/plain" })
            res.end("Shortend url not found!!")
        }
    }

    if (req.method === "POST" && req.url === "/shortend") {
        let body = ""
        req.on("data", (chunk) => {
            body += chunk
        })

        req.on("end", async () => {
            const { url, shortCode } = JSON.parse(body)

            if (!url) {
                res.writeHead(404, { "Content-Type": "text/plain" })
                res.end("URL is required")
            }

            const finalShortCode = shortCode || crypto.randomBytes(4).toString("hex")

            if (links[finalShortCode]) {
                res.writeHead(404, { "Content-Type": "text/plain" })
                res.end("Short code is already taken type another!!")
            }

            links[finalShortCode] = url
            await saveLInks(links)

            res.writeHead(200, { "Content-Type": "application/json" })
            res.end(JSON.stringify({ success: true, shortCode: finalShortCode }))
        })


    }
})

server.listen(PORT, () => {
    console.log(`Server is running at port ${PORT}`);

})