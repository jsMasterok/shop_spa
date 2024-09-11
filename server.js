const express = require("express");
const next = require("next");
const http = require("http");

const dev = process.env.NODE_ENV !== "production";
const app = next({ dev });
const handle = app.getRequestHandler();

app.prepare().then(() => {
  const server = express();

  server.all("*", (req, res) => {
    return handle(req, res);
  });

  const httpServer = http.createServer(server);

  httpServer.listen(process.env.PORT, () => {
    console.log(`Server is running`);
  });
});

// const HTTP = require("http");
// const SERVER = HTTP.createServer((request, response) => {
//     response.writeHead(200, {
//         "Content-Type": "text/html; charset=utf-8",
//         "NodeApp": process.versions.node,
//     });
//     response.write("HELLO WORLD");

//     response.end();
// });
// SERVER.listen(process.env.PORT);
