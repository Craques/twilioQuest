const twilio = require('twilio');
const moment = require('moment');
const accountSid = "ACXXXXXXXXXXXXXXXXXXXXXXXXXXXXX";
const authToken = "XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX";

const client = twilio(accountSid, authToken);

client.messages.create({
	body: 'Hello there from CoPilot',
	messagingServiceSid: 'MG766f96132c3468cbb4a74d1fa84e0db6',
	to: '+18638374160'
}).then((message)=>{
	console.log(message.sid)
}).done()