const supabase = require("../../utils/db-client");

exports.getReferrals = async () => {
  try {
    const { data, error } = await supabase.from("referrals").select();
    if (error) {
      throw new Error(error.message);
    }
    return data;
  } catch (error) {
    throw new Error(error.message);
  }
};

exports.getReferralDetails = async (id) => {
  try {
    const { data, error } = await supabase
      .from("referrals")
      .select()
      .eq("id", id);
    if (error) {
      throw new Error(error.message);
    }
    return data;
  } catch (error) {
    throw new Error(error.message);
  }
};

exports.postReferral = async (referral) => {
  try {
    const { data, error } = await supabase.from("referrals").insert([referral]);
    //   TODO - send email to user and admin
    if (error) {
      throw new Error(error.message);
    }
    return data;
  } catch (error) {
    throw new Error(error.message);
  }
};

exports.deleteReferral = async (id) => {
  try {
    const { data, error } = await supabase
      .from("referrals")
      .delete()
      .eq("id", id);
    if (error) {
      throw new Error(error.message);
    }
    return data;
  } catch (error) {
    throw new Error(error.message);
  }
};
