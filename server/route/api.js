const app = require("express").Router();

app.get("/",(req,res) => {
  console.log("Welcome to /api")
});

module.exports = app;