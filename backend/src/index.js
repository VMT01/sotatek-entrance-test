require("dotenv").config();
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();

app.use(cors());
app.use(bodyParser.json());

const getTodoList = require("./getTodoList");
const updateTodoList = require("./updateTodoList");

app.use("/get", getTodoList);
app.use("/update", updateTodoList);

app.listen(process.env.PORT || 5000, () =>
  console.log(`Listening on port ${process.env.PORT || 5000}`)
);
