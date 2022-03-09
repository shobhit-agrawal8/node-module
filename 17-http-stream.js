const fs = require("fs");
const http = require("http");

const server = http.createServer();

// using normal async method

// server.on("request", (req, res) => {
//   fs.readFile("./content/bigfile.txt", "utf8", (err, result) => {
//     if (err) {
//       console.log(err);
//     } else {
//       res.end(result);
//     }
//   });
// });

// using readStream method

server.on("request", (req, res) => {
  const readStream = fs.createReadStream("./content/bigfile.txt", "utf8");
  // using pipe data is transfered using chunk form
  readStream.on("open", () => {
    readStream.pipe(res);
  });
  readStream.on("err", (err) => console.log(err));
});
server.listen(3000, console.log("Server is running at port 3000"));

// readStream.on("data",(data) => {            line-22 to 24 can be write as this also
//     res.end(data);
// });
