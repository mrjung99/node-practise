import https from "https"
import chalk from "chalk"

const url = "https://api.api-ninjas.com/v1/jokes"
https.get(url, (response) => {
    let data = ""

    response.on("data", (chunk) => {
        data += chunk
    })

    response.on("end", () => {
        console.log(chalk.red(`${data}`))
    })

    response.on("error", (err) => {
        console.log(`Here is the error:${err.message}`);
    })

})