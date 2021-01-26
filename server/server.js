const express = require("express");
const morgan = require("morgan");
const app = express();
const port = 3100;

app.use(express.json());
app.use(morgan("dev"));

app.get("/", (req,res) => {
  console.log("Welcome to the API server.")
})

app.listen(port,() => {
  console.log(`server started in port ${port}.`);
});