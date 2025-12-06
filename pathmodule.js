const { log } = require("console");
const path = require("path");

const filePath = path.join("folder", "student", "student.txt");

const base = path.basename(filePath);
const dir = path.dirname(filePath);
const resolve = path.resolve(filePath);
console.log({ base, dir, resolve });

const path2 = "/tmp/myfile.html"
const modeule =
    path.basename('/foo/bar/baz/asdf/quux.html', '.html');

console.log(modeule);

