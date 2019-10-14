var twilio = require('twilio');
var client = new twilio(process.env.twilioAccountSID, process.env.twilioAuthToken);

client.messages.create({
    body: 'Hello from Node',
    to: '+16478549393',  // Text this number
    from: process.env.twilioPhoneNumber // From a valid Twilio number
})
.then((message) => console.log(message.sid));
