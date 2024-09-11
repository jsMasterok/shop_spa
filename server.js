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

  const SOCKET_PATH = "/var/www/ch1bf2ce25/.system/nodejs/bw73.com.ua/socket";

  const httpServer = http.createServer(server);

  httpServer.listen(SOCKET_PATH, () => {
    console.log(`Server is running on socket: ${SOCKET_PATH}`);
  });
});
