const {
  getTestimonials,
  createTestimonial,
} = require("../../models/stellar/testimonials-model");

exports.fetchTestimonials = async (req, res) => {
  try {
    const data = await getTestimonials();
    res.status(200).send({ data });
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
};

exports.addTestimonial = async (req, res) => {
  try {
    const data = await createTestimonial(req.body);
    res.status(200).send({ data });
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
};
