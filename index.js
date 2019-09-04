const server = require("./api/server.js");

const port = 8000;

server.lister(port, () => console.log("Running here)"));
