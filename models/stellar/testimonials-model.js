const supabase = require("../../utils/db-client");
const { from } = supabase;

exports.getTestimonials = async () => {
  try {
    const { data, error } = await supabase.from("testimonials").select();
    if (error) throw error;
    return data;
  } catch (error) {
    throw new Error(error.message);
  }
};

exports.createTestimonial = async (testimonial) => {
  try {
    const { data, error } = await supabase
      .from("testimonials")
      .insert([testimonial]);
    if (error) throw error;
    return data;
  } catch (error) {
    throw new Error(error.message);
  }
};
