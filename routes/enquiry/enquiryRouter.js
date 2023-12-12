const enquiryRouter = require("express").Router();
const { sendAWSEmail } = require("../../controllers/enquiry");

enquiryRouter.route("/email").post(sendAWSEmail);

module.exports = enquiryRouter;
