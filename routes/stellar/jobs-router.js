const jobsRouter = require("express").Router();

const {
  createJob,
  getAllJobs,
  getJob,
} = require("../../controllers/stellar/jobs-controller");

jobsRouter.route("/").post(createJob).get(getAllJobs);
jobsRouter.route("/:id").get(getJob);

module.exports = jobsRouter;
