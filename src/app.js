const express = require("express");

const app = express();
require("dotenv").config();

//Twilio environment variables
const accountSid = process.env.ACCOUNT_SID;
const authToken = process.env.AUTH_TOKEN;
const client = require("twilio")(accountSid, authToken);

//Send message to Twilio
client.messages
  .create({
    body: "Hey, We are hiring!", //your message
    from: process.env.TWILIO_NUMBER, //your twilio number
    to: "it should be the number you want to send a message to",
  })
  .then((message) => console.log(message))
  .catch((err) => console.log(err));

app.listen(process.env.PORT, () => {
  console.log(`Server is running on port ${process.env.PORT}`);
});
