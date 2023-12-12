const dotenv = require("dotenv");
const path = require("path");
dotenv.config({ path: path.resolve(__dirname, "../.env") });
const { SESv2Client, SendEmailCommand } = require("@aws-sdk/client-sesv2");

const {
  SENDER_EMAIL,
  ADMIN_DESTINATION_EMAIL,
  AWS_REGION,
  AWS_ACCESS_KEY,
  AWS_SECRET_ACCESS_KEY,
} = process.env;

const client = new SESv2Client({
  region: AWS_REGION,
  credentials: {
    accessKeyId: AWS_ACCESS_KEY,
    secretAccessKey: AWS_SECRET_ACCESS_KEY,
  },
});

exports.sendEmail = async (body) => {
  console.log("🚀 ~ file: enquiry.js:23 ~ exports.sendEmail= ~ body:", body);
  const input = {
    FromEmailAddress: SENDER_EMAIL,
    Destination: {
      // ToAddresses: [ADMIN_DESTINATION_EMAIL],
      ToAddresses: ["ranjeetsidhu7433@gmail.com"],
    },
    ReplyToAddresses: [ADMIN_DESTINATION_EMAIL],
    FeedbackForwardingEmailAddress: ADMIN_DESTINATION_EMAIL,
    Content: {
      Simple: {
        Subject: {
          Data: "New Booking",
        },
        Body: {
          Html: {
            Data: "<h1>This is a test html email</h1>",
          },
        },
      },
    },
  };

  //   const command = new SendEmailCommand(input);
  //   client.send(command);
  // .then((response) => console.log(response));
};
