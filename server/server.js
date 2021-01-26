const express = require("express");
const morgan = require("morgan");
const api = require("./route/api");
const app = express();
const port = 3100;

app.use(express.json());
app.use(morgan("dev"));

app.get("/", (req,res) => {
  res.json("Welcome to the API server.");
});
app.use("/api",api);

app.listen(port,() => {
  console.log(`server started in port ${port}.`);
});