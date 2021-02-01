const app = require("express").Router();
const user = require("./user");
const note = require("./note");

app.get("/",(req,res) => {
  res.json("Welcome to /api")
});
app.use("/user",user);
app.use("/note",note);

module.exports = app;