const fs = require("fs");

const readStream = fs.createReadStream("./content/bigfile.txt", "utf8");
readStream.on("data", (data) => {
  console.log(data);
});
readStream.on("err", (err) => console.log(err));
