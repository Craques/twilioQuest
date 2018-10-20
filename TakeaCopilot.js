const twilio = require('twilio');
const moment = require('moment');
const accountSid = "AC0a9ce95f8bb6515424d02f71c866f129";
const authToken = "35c623b2a66bba261a54a71ac2c8888e";

const client = twilio(accountSid, authToken);

client.messages.create({
	body: 'Hello there from CoPilot',
	messagingServiceSid: 'MG766f96132c3468cbb4a74d1fa84e0db6',
	to: '+18638374160'
}).then((message)=>{
	console.log(message.sid)
}).done()