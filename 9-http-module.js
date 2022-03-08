const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.end("This is the home page of the website");
  }
  if (req.url === "/about") {
    res.end("This is the about page of the website ");
  }
  res.end(`
  <p>Opps the page is not found</p>
  <a href="/">Back home</a>
  `);
});

server.listen(3000, () => console.log("Server is running at port 3000"));
