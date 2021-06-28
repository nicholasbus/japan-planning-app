const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.json({
    message: "Hello! happy trip planning!",
  });
});

app.listen(8080, () => {
  console.log("app listening");
});
