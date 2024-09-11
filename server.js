const express = require("express");
const http = require("http");
const { Server } = require("socket.io");

const app = express();
const server = http.createServer(app);
const io = new Server(server);

const socketPath = "/var/www/ch1bf2ce25/.system/nodejs/bw73.com.ua/socket";

app.get(socketPath, (req, res) => {
  res.send("Socket server is running");
});

io.on("connection", (socket) => {
  console.log("A user connected");
});

server.listen(3000, () => {
  console.log("Server is running on port 3000");
});
