const { SESv2Client, SendEmailCommand } = require("@aws-sdk/client-sesv2");

const {
  SENDER_EMAIL,
  ADMIN_DESTINATION_EMAIL,
  AWS_REGION,
  AWS_ACCESS_KEY,
  AWS_SECRET_ACCESS_KEY,
  PERSONAL_EMAIL,
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
    FromEmailAddress: SENDER_EMAIL,
    Destination: {
      ToAddresses: [ADMIN_DESTINATION_EMAIL, PERSONAL_EMAIL],
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
            Data: `
            
            <h4>You have recieved a new enquiry</h4>
            <br/><br/>
            <p>Name: ${body.first_name} ${body.last_name}</p>
            <p>Message: ${body.message}</p>
            <p>Email: ${body.email}</p>
            <p>Phone: ${body.phone}</p>
            <br/>

            Date: ${new Date().toDateString()}
            
            `,
          },
        },
      },
    },
  };

  const command = new SendEmailCommand(input);
  client.send(command);
};
