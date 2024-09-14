const HTTP = require("http");
const SERVER = HTTP.createServer((request, response) => {
    response.writeHead(200, {
        "Content-Type": "text/html; charset=utf-8",
        "NodeApp": process.versions.node,
    });
    response.write("HELLO WORLD");

    response.end();
});
SERVER.listen(process.env.PORT);