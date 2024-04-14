const common = require("../../utils/common");

exports.getTestimonials = async () => {
  try {
    const data = await common.get("testimonials");
    return data;
  } catch (error) {
    throw new Error(error.message);
  }
};

exports.createTestimonial = async (testimonial) => {
  try {
    const data = await common.create("testimonials", testimonial);
    return data;
  } catch (error) {
    throw new Error(error.message);
  }
};
