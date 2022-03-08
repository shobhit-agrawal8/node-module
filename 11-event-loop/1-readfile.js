const fs = require("fs");

console.log("First Task");
const read = fs.readFile("../content/first.txt", "utf8", (error, result) => {
  if (error) {
    console.log(error);
  }
  console.log(result);
  console.log("Done");
});
console.log("New Task");
