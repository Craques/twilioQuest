const MessagingResponse = require('twilio').twiml.MessagingResponse;
const bodyParser = require('body-parser');
const express = require('express');

const app = express();
app.use(bodyParser.urlencoded({extended: true}));

let todos = [];

app.post('/sms', (req, res)=>{
	const twiml = new MessagingResponse();
	/*console.log(req.body.FromCountry);
	twiml.message(`Hi! It looks like your phone number was born in ${req.body.FromCountry}`);
*/
	const newTodo = req.body.Body;

	const command = newTodo.split(" ")[0].toLowerCase();
	const todoArray = newTodo.split(" ");
	todoArray.shift()
	const todo = todoArray.join(" ")

	switch(command){
		case 'add': 
			todos.push(todo);
			twiml.message('Todo has been added');
			break
		case 'remove':
			todos.splice(Number(todo) - 1, 1);
			twiml.message('Todo has been removed');
			break
		case 'list':
			let todoList = "";

			todos.map((todo, i)=>{
				indexedTodo = `${i + 1}.  ${todo}\n`

				todoList += indexedTodo
			})

			twiml.message(todoList)
			break
		default: 
			twiml.message("Invalid todo command use either add, remove or list")
	}


	res.writeHead(200, {'Content-Type': 'text/xml'})
  	res.end(twiml.toString())
});

app.listen(80, ()=>{
	'We are open for business'
});