// Download the helper library from https://www.twilio.com/docs/node/install
// Your Account Sid and Auth Token from twilio.com/console
// and set the environment variables. See http://twil.io/secure

require('dotenv').config();
const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const client = require('twilio')(accountSid, authToken);


client.messages
  .create({
     body: 'Rachel is sharing her location with you',
     from: process.env.TWILIO_PHONE_NUMBER,
     to: process.env.USER_PHONE_NUMUSER_PHONE_NUM
   })
  .then(message => console.log(message.sid));

