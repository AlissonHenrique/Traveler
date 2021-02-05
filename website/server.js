const jsonServer = require("json-server");
const express = require("express");
const path = require("path");
const server = jsonServer.create();
const router = jsonServer.router("db.json");

const middlewares = jsonServer.defaults();
server.use(middlewares);
server.use(express.static(path.resolve(__dirname, "src", "assets", "images")));
server.use(router);

server.listen(4444, () => {
  console.log("JSON Server is running");
});
