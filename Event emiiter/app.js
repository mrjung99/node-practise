// import NewEmitter from "events";

// const emitter = new NewEmitter();

// emitter.on("user", (username) => {
//   console.log(`${username} logged in`);
// });

// emitter.emit("user", "daulat");

import { Buffer } from "buffer";
import fs from "fs";

const buffer = Buffer.alloc(5, "a");
console.log(buffer.toString());

fs.readFile("app.js", "utf-8", (err, data) => {
  if (err) {
    console.log(`Error occured: ${err}`);
  } else {
    console.log(data);
  }
});
