const readline = require('node:readline');

const rl = readline.createInterface({ input: process.stdin, output: process.stdout });
const tasks = []

const showMenu = () => {
    console.log("\n1. Add Task")
    console.log("2. View Tasks")
    console.log("3. Exit")
    rl.question("Choose an option: ", handleQuestion)
}

const handleQuestion = (option) => {
    if (option === "1") {
        rl.question("Enter task: ", (task) => {
            tasks.push(task)
            console.log("Task added successfully");
            showMenu()
        })
    } else if (option === "2") {
        if (tasks.length <= 0) {
            console.log("No tasks to show, add first!!");
        } else {
            tasks.forEach((task, index) => {
                console.log("Your task List");
                console.log(`${index + 1}. ${task}`);
            })
        }
        showMenu()
    } else if (option === "3") {
        console.log("Exitting....");
        rl.close()
    } else {
        console.log("Invalid input enter again.")
        showMenu()
    }
}
showMenu()