const express = require("express");

const app = express();
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Welcome to the server 1");
});

app.listen(8080, () => {
  console.log("App is listening on http://localhost:8080");
});
