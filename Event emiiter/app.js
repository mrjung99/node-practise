const EventEmitter = require("events");

const emitter = new EventEmitter();

// emitter.on("greet", (username) => {
//   console.log(`Hello world, ${username}`);
// });

// // emitter.emit("greet");
// //*we can also pass arguments
// emitter.emit("greet", "iam daulat");

//? listens for multiple type of user events (eg. login,logout, purchase, and profile update)
//? tracks how many times each event is emitted.
//? logs a summary of all events occurrences when a special summary event is triggered
//! requirements
//? create at least four custom events (eg. user-login, user-logout, suer-purchase, profile-update)
//? emit these events multiple times with different arguments (eg. username, item purchased)
//? track and store the count of each event type.
//? define a summary event that logs a detailed report of how many times each event was triggered

const emitCount = {
  "login-count": 0,
  "logout-count": 0,
  "purchase-count": 0,
  "update-count": 0,
};

emitter.on("login", (arg) => {
  console.log(`User ${arg} logged in`);
  emitCount["login-count"]++;
});

emitter.on("logout", (arg) => {
  console.log(`User ${arg} logged out`);
  emitCount["logout-count"]++;
});

emitter.on("update", (arg) => {
  console.log(`Your ${arg} updated`);
  emitCount["update-count"]++;
});

emitter.on("purchase", (arg) => {
  console.log(`You purchase ${arg} successfully`);
  emitCount["purchase-count"]++;
});

emitter.emit("login", "Daulat");
emitter.emit("logout", "Daulat");
emitter.emit("purchase", "laptop");
emitter.emit("update", "profile");
console.log(emitCount);
