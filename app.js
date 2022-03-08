const http = require("http");

// const server = http.createServer((req, res) => {
//   res.end("This is the server");
// });
// using event emitter api
const server = http.createServer();

server.on("request", (req, res) => {
  res.end("Hello World");
});

server.listen(5000);
// https has method of event emitter like on
