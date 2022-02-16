const route = require("express").Router();
const fs = require("fs");

route.post("/", (req, res) => {
  fs.writeFile(
    "./src/storage.json",
    JSON.stringify(req.body),
    "utf-8",
    (err) => {
      if (err) console.log(err);
    }
  );
});

module.exports = route;
