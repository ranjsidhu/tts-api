const common = require("../../utils/common");

exports.getReferrals = async () => {
  try {
    const referrals = await common.get("referrals");
    return referrals;
  } catch (error) {
    throw new Error(error.message);
  }
};

exports.getReferralDetails = async (id) => {
  try {
    const referral = await common.getDetails("referrals", id);
    return referral;
  } catch (error) {
    throw new Error(error.message);
  }
};

exports.postReferral = async (referral) => {
  try {
    const data = await common.create("referrals", referral);
    //   TODO - send email to user and admin
    return data;
  } catch (error) {
    throw new Error(error.message);
  }
};

exports.deleteReferral = async (id) => {
  try {
    await common.remove("referrals", id);
  } catch (error) {
    throw new Error(error.message);
  }
};
