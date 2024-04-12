const testimonialsRouter = require("express").Router();

const {
  fetchTestimonials,
  addTestimonial,
} = require("../../controllers/stellar/testimonials-controller");

testimonialsRouter.route("/").get(fetchTestimonials);
testimonialsRouter.route("/").post(addTestimonial);

module.exports = testimonialsRouter;
