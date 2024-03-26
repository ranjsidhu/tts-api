const { SESv2Client, SendEmailCommand } = require("@aws-sdk/client-sesv2");

const {
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
  const input = {
    FromEmailAddress: body.sender,
    Destination: {
      ToAddresses: body.to,
    },
    ReplyToAddresses: [ADMIN_DESTINATION_EMAIL],
    FeedbackForwardingEmailAddress: ADMIN_DESTINATION_EMAIL,
    Content: {
      Simple: {
        Subject: {
          Data: "New Enquiry",
        },
        Body: {
          Html: {
            Data: body.content,
          },
        },
      },
    },
  };

  const command = new SendEmailCommand(input);
  client.send(command).catch((err) => {
    console.error(err);
  });
};
