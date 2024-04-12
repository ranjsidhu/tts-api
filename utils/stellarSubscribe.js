const supabase = require("./db-client");
const { sendEmail } = require("../utils/sendEmail");

const subscribe = () => {
  supabase
    .channel("schema-db-changes")
    .on(
      "postgres_changes",
      {
        event: "*",
        schema: "public",
      },
      async (payload) => {
        await sendEmail({
          from: "no-reply@stellar-recruitment.co.uk",
          to: ["ranjeetsidhu7433@gmail.com"],
          content: `
            New change detected in the database
            <br/>
            <br/>
            <p>Table: ${payload.table}</p>
            <p>Operation: ${payload.eventType}</p>
            `,
        });
      }
    )
    .subscribe();
  return;
};

module.exports = { subscribe };
