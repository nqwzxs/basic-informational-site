const http = require("http");
const fs = require("fs");

const server = http.createServer(function (req, res) {
  switch (req.url) {
    case "/":
      res.writeHead(200, { "Content-Type": "text/html" });
      const index = fs.readFileSync("index.html");
      res.end(index);
      break;
    case "/about":
      res.writeHead(200, { "Content-Type": "text/html" });
      const about = fs.readFileSync("about.html");
      res.end(about);
      break;
    case "/contact-me":
      res.writeHead(200, { "Content-Type": "text/html" });
      const contactMe = fs.readFileSync("contact-me.html");
      res.end(contactMe);
      break;
    default:
      res.writeHead(404, { "Content-Type": "text/html" });
      const error = fs.readFileSync("404.html");
      res.end(error);
      break;
  }
});

server.listen(8080);
