const supabase = require("../../utils/db-client");
const { auth } = supabase;

exports.signUp = async (user) => {
  const { firstName, lastName, email, phoneNumber } = user;
  try {
    const { data, error } = await auth.signUp(user);
    if (error) throw error;

    const { data: userData, error: insertError } = await supabase
      .from("users")
      .insert([
        { firstName, lastName, email, phoneNumber, updatedAt: new Date() },
      ]);

    if (insertError) throw insertError;

    return { user: data, userData };
  } catch (error) {
    throw new Error(error.message);
  }
};

exports.signIn = async (user) => {
  try {
    const { data, error } = await auth.signInWithPassword(user);
    if (error) {
      throw new Error(error.message);
    }
    return data;
  } catch (error) {
    throw new Error(error.message);
  }
};

exports.signOut = async () => {
  try {
    const { error } = await auth.signOut();
    if (error) {
      throw new Error(error.message);
    }
    return { message: "Successfully logged out" };
  } catch (error) {
    throw new Error(error.message);
  }
};
