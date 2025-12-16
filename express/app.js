//!what we will learn
//* to create a server
//* to create and setup .env file

import express from "express"
import { PORT } from "./env.js"
import path from "path"

const app = express()

//this will send the html,css and js file
const absolutePath = path.join(import.meta.dirname, "public")
// app.use(express.static(absolutePath)) or
app.use(express.static("public"))

// app.get("/", (req, res) => {
//     // console.log(import.meta.dirname);
//     // console.log(import.meta.filename);

//     const pagePath = path.join(import.meta.dirname, "public", "index.html")
//     res.sendFile(pagePath)
//     // res.send("Hello express js")
// })

// const PORT = PORT || 3000
app.listen(PORT, () => {
    console.log(`Listening at port no ${PORT}`);
})