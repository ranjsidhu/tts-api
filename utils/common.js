const supabase = require("./db-client");

const create = async (tablename, values) => {
  try {
    const { data, error } = await supabase
      .from(tablename)
      .insert([values])
      .select();
    if (error) {
      throw new Error(error.message);
    }
    return data;
  } catch (error) {
    throw new Error(error.message);
  }
};

const remove = async (tablename, id) => {
  try {
    const { data, error } = await supabase
      .from(tablename)
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

const get = async (tablename) => {
  try {
    const { data, error } = await supabase.from(tablename).select();
    if (error) {
      throw new Error(error.message);
    }
    return data;
  } catch (error) {
    throw new Error(error.message);
  }
};

const getDetails = async (tablename, id) => {
  try {
    const { data, error } = await supabase
      .from(tablename)
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

const common = {
  create,
  remove,
  get,
  getDetails,
};

module.exports = common;
