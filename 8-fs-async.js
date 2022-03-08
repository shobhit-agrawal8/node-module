const fs = require("fs");

console.log("start");
fs.readFile("./content/first.txt", "utf8", (err, result) => {
  if (err) {
    console.log(err);
  }
  const first = result;
  fs.readFile("./content/second.txt", "utf8", (error, result1) => {
    if (error) {
      console.log(error);
    }
    const second = result1;
    fs.writeFile("./content/third.txt", `here is result ${first}  ${second}`, (err, result) => {
      if (err) {
        console.log(err);
      }
      console.log("ongoing");
    });
  });
});
console.log("New task"); //  this is async way it will not wait for the ongoing task it will
// execute if some task is taking time.
