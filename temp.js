let todos = []

executeTodo = (newTodo)=>{

	const command = newTodo.split(" ")[0].toLowerCase();
	console.log('COMMAND IS', command)
	const todoArray = newTodo.split(" ");
	todoArray.shift()
	const todo = todoArray.join(" ")
	console.log("TODO IS", todo)

	switch(command){
		case 'add': 
			todos.push(todo)
			console.log('Todo has been added')
			break
		case 'remove':
			todos.splice(Number(todo) - 1, 1)
			console.log('Todo has been removed')
			break
		case 'list':
			let todoList = "";

			todos.map((todo, i)=>{
				indexedTodo = `${i + 1}.  ${todo}\n`

				todoList += indexedTodo
			})

			console.log(todoList)
			break
		default: 
			console.log("Invalid todo command use either add, remove or list")
	}
}

executeTodo("Add Completed this objective")