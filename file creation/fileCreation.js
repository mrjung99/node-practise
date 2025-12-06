const readline = require("readline")
const fs = require("fs")

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

const createFile = () => {
    rl.question("Enter file name: ", (fileName) => {
        rl.question("Enter contet: ", (content) => {
            fs.writeFile(`${fileName}.txt`, content, err => {
                if (err) {
                    console.error(`Error writing the file: ${err.message}`)
                } else {
                    console.log("File created successfully");
                }
            })
        })
    })
}

createFile()