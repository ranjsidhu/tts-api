require("dotenv").config();
const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const enquiryRouter = require("./routes/enquiry/enquiryRouter");
const stellarRouter = require("./routes/stellar/router");
const { subscribe } = require("./utils/stellarSubscribe");

const app = express();
app.use(express.json());
app.use(morgan("dev"));
app.use(cors());
app.use("/enquiry", enquiryRouter);
app.use("/api/stellar", stellarRouter);
// subscribe();

const PORT = process.env.PORT || 5000;

app.get("/status", (req, res) => {
  const status = {
    status: "Running",
  };
  res.send(status);
});

app.all("/*", (req, res, next) => {
  res.status(404).send({ message: "Path not found" });
});

app.listen(PORT, () => {
  console.log("Server listening on port:", process.env.PORT);
});
