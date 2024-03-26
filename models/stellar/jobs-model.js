const { createClient } = require("@supabase/supabase-js");

const { DB_URL, DB_API_ANON_KEY } = process.env;
const supabase = createClient(DB_URL, DB_API_ANON_KEY);

exports.postJob = async (job) => {
  try {
    const { data, error } = await supabase.from("jobs").insert([job]).select();
    if (error) {
      throw new Error(error.message);
    }
    return data;
  } catch (error) {
    throw new Error(error.message);
  }
};

exports.getJobs = async () => {
  try {
    const { data, error } = await supabase.from("jobs").select();
    if (error) {
      throw new Error(error.message);
    }
    return data;
  } catch (error) {
    throw new Error(error.message);
  }
};

exports.getJobDetails = async (id) => {
  try {
    const { data, error } = await supabase.from("jobs").select().eq("id", id);
    if (error) {
      throw new Error(error.message);
    }
    return data;
  } catch (error) {
    throw new Error(error.message);
  }
};
