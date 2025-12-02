const path = require("path");

const filePath = path.join("folder", "student", "student.txt");

const base = path.basename(filePath);
const dir = path.dirname(filePath);
const resolve = path.resolve(filePath);
// console.log({ base, dir, resolve });
