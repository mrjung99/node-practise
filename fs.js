const fs = require("fs");

const path = require("path");
const filename = "newfile.txt";

const filePath = path.join(__dirname, filename);

const writeFile = fs.writeFileSync(
  filePath,
  "This the new file update",
  "utf-8"
);

console.log(writeFile);
