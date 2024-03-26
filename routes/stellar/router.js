const stellarRouter = require("express").Router();
const jobsRouter = require("./jobs-router");

stellarRouter.use("/jobs", jobsRouter);
module.exports = stellarRouter;
