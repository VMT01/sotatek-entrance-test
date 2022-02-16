const route = require("express").Router();
const todoList = require("../storage.json");

route.get("/", (req, res) => res.send(todoList));

module.exports = route;