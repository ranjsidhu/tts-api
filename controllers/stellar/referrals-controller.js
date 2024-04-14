const {
  getReferrals,
  getReferralDetails,
  postReferral,
  deleteReferral,
} = require("../../models/stellar/referrals-model");

exports.getAllReferrals = async (req, res) => {
  await getReferrals()
    .then((data) => {
      res.status(200).send({ message: "Successfully fetched referrals", data });
    })
    .catch((err) => {
      res.status(500).send({ message: "some error" + err });
    });
};

exports.getReferral = async (req, res) => {
  await getReferralDetails(req.params.id)
    .then((data) => {
      res.status(200).send({ message: "Successfully fetched referral", data });
    })
    .catch((err) => {
      res.status(500).send({ message: "some error" + err });
    });
};

exports.createReferral = async (req, res) => {
  await postReferral(req.body)
    .then((data) => {
      res.status(200).send({ message: "Successfully created referral", data });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).send({ message: "some error" + err });
    });
};

exports.removeReferral = async (req, res) => {
  await deleteReferral(req.params.id)
    .then((data) => {
      res.status(200).send({ message: "Successfully deleted referral", data });
    })
    .catch((err) => {
      res.status(500).send({ message: "some error" + err });
    });
};
