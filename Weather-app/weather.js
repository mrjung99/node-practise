import readline from "readline/promises"

const API_KEY = "2573c6cab7a21bba77d2ff9e5abe7e4c"
const BASEURL = "https://api.openweathermap.org/data/2.5/weather"

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

const getWeatherInfo = async (city) => {

    // const url = "https://api.openweathermap.org/data/2.5/weather?q=kathmandu&appid=2573c6cab7a21bba77d2ff9e5abe7e4c"
    const url = `${BASEURL}?q=${city}&appid=${API_KEY}&units=metric`;

    try {
        const response = await fetch(url)
        if (!response.ok) {
            throw new Error("Invalid city name try again!!")
        }

        const weatherData = await response.json()
        console.log("\nWeather Information");
        console.log(`\nTemperature: ${weatherData.main.temp}`);
        console.log(`Humidity: ${weatherData.main.humidity}`);
        console.log(`Description: ${weatherData.weather[0].description}`);
    } catch (error) {
        console.log(error.message);
    }
}

const city = await rl.question("Enter the city to check weather: ")
await getWeatherInfo(city)
rl.close()