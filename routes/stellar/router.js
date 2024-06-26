const stellarRouter = require("express").Router();
const jobsRouter = require("./jobs-router");
const authRouter = require("./auth-router");
const testimonialsRouter = require("./testimonials-router");
const referralsRouter = require("./referrals-router");

stellarRouter.use("/jobs", jobsRouter);
stellarRouter.use("/auth", authRouter);
stellarRouter.use("/testimonials", testimonialsRouter);
stellarRouter.use("/referrals", referralsRouter);

stellarRouter.route("/status").get((req, res) => {
  res.send({ status: "Running" });
});

module.exports = stellarRouter;
