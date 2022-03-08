const fs = require("fs");

// filesystem sync
console.log("start");
const read = fs.readFileSync("./content/first.txt", "utf8");
console.log(read);
console.log("ongoing");
const write = fs.writeFileSync("./content/second.txt", `this is second file mixed with ${read}`);
console.log(fs.readFileSync("./content/second.txt", "utf8"));
// console.log(write);
console.log("done");// this will exwcute after every task finished it will wait till that
