//!what we will learn
//* to create a server
//* to create and setup .env file

import express from "express"

const app = express()

app.get("/", (req, res) => {
    res.send("Hello express js")
})

app.get("/about", (req, res) => {
    res.send(`<h1>Hello from about page</h1>`)
})

const PORT = process.env.PORT || 3000
app.listen(PORT, () => {
    console.log(`Listening at port no ${PORT}`);
})