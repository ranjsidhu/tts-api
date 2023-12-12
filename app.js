const express = require("express");
require("dotenv").config();

const app = express();
app.use(express.json());

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log("Server Listening on PORT:", process.env.PORT);
});

app.get("/status", (req, res, next) => {
  const status = {
    status: "Running",
  };
  res.send(status);
});
