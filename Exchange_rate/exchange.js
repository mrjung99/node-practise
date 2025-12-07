
import https from "https"
import readline from "readline"

const url = "https://v6.exchangerate-api.com/v6/4dc4574448a249bf1891ca63/latest/USD"

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

const convertRate = (amount, rate) => {
    return (amount * rate).toFixed(2)
}

https.get(url, (response) => {
    let curriencies = ""
    response.on("data", (chunk) => {
        curriencies += chunk
    })

    response.on("end", () => {
        const rates = JSON.parse(curriencies).conversion_rates
        rl.question("Enter amount in USD: ", (amount) => {
            rl.question("Enter currency to convert (eg, INR, NPR): ", (curr) => {
                const rate = rates[curr.toUpperCase()]
                console.log(`${amount} NPR is equal to ${convertRate(Number(amount), rate)} ${curr.toUpperCase()}`);
            })
        })
    })
})