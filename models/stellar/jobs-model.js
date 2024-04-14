const common = require("../../utils/common");

exports.postJob = async (job) => {
  try {
    const data = await common.create("jobs", job);
    return data;
  } catch (error) {
    throw new Error(error.message);
  }
};

exports.getJobs = async () => {
  try {
    const data = await common.get("jobs");
    return data;
  } catch (error) {
    throw new Error(error.message);
  }
};

exports.getJobDetails = async (id) => {
  try {
    const data = await common.getDetails("jobs", id);
    return data;
  } catch (error) {
    throw new Error(error.message);
  }
};
