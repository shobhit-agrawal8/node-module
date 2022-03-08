const EventEmitter = require("events");

const customEmitter = new EventEmitter();
customEmitter.on("response", (name, id) => {
  console.log(`Hello World from ${name} with id ${id}`);
});
customEmitter.on("response", () => {
  console.log("Hello World");
});
customEmitter.emit("response", "shobhit", "1");
