const twilio = require('twilio');
const moment = require('moment');
const accountSid = "AC0a9ce95f8bb6515424d02f71c866f129";
const authToken = "35c623b2a66bba261a54a71ac2c8888e";

const client = twilio(accountSid, authToken);
const currentTime = moment().format('HH:mm');

client.messages.create({
	body: `Complete this objective`,
	to: '+16168779019',
	from: '+16168779019'
}).then((message)=>{
	console.log(message)
})
