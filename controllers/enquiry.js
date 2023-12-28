const { sendEmail } = require("../models/enquiry");

exports.sendAWSEmail = async (req, res) => {
  await sendEmail({ ...req.body })
    .then(() => {
      res.status(200).send({ message: "Successfully sent email" });
    })
    .catch((err) => {
      res.status(500).send({ message: "some error" + err });
    });
};
