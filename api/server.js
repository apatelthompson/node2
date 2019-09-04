const express = require("express");

const server = express();

server.get("/", (res, req) => {
  res.status(200).json({ api: "up" });
});

server.get("/products", (res, req) => {});

server.get("/clients", (res, req) => {});

server.get("/suppliers", (res, req) => {});

module.exports = server;
