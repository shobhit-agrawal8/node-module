const { writeFileSync } = require("fs");

for (let i = 0; i < 1000; i++) {
  writeFileSync("./content/bigfile.txt", `Hello World ${i}\n`, { flag: "a" });
}
