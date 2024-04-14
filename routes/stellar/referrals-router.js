const referralsRouter = require("express").Router();

const {
  getReferral,
  getAllReferrals,
  createReferral,
  removeReferral,
} = require("../../controllers/stellar/referrals-controller");

referralsRouter.route("/").post(createReferral).get(getAllReferrals);
referralsRouter.route("/:id").get(getReferral).delete(removeReferral);

module.exports = referralsRouter;
