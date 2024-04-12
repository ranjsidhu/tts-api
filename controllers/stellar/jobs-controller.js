const {
  postJob,
  getJobDetails,
  getJobs,
} = require("../../models/stellar/jobs-model");

exports.createJob = async (req, res) => {
  await postJob(req.body)
    .then((data) => {
      res.status(200).send({ message: "Successfully created job", data });
    })
    .catch((err) => {
      res.status(500).send({ message: "some error" + err });
    });
};

exports.getAllJobs = async (req, res) => {
  await getJobs()
    .then((data) => {
      res.status(200).send({ message: "Successfully fetched jobs", data });
    })
    .catch((err) => {
      res.status(500).send({ message: "some error" + err });
    });
};

exports.getJob = async (req, res) => {
  await getJobDetails(req.params.id)
    .then((data) => {
      res.status(200).send({ message: "Successfully fetched job", data });
    })
    .catch((err) => {
      res.status(500).send({ message: "some error" + err });
    });
};
