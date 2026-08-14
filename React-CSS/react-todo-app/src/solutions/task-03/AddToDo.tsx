import React, { useState } from 'react';
import { Todo } from '../../types';
import { ToDoList } from '../task-01/ToDoList';

  // TODO: Implement the AddToDo component
  // 
  // Requirements:
  // 1. Create a controlled input field for todo title
  // 2. Add a button to submit the new todo
  // 3. Handle form submission (prevent default behavior)
  // 4. Clear the input after adding a todo
  // 5. Don't add empty todos
  // 
  // Example implementation:
  // const [inputValue, setInputValue] = useState('');
  // const [todos, setTodos] = useState<Todo[]>([]);

export const AddToDo: React.FC = () => {
	const [inputValue, setInputValue] = useState('');
	const [todos, setTodos] = useState<Todo[]>([]);

	const handleAddTodo = (e: React.FormEvent) => {
		e.preventDefault()

		const trimmedValue = inputValue.trim()

		if (!trimmedValue) return;

		const newTodo: Todo = {
			id: Date.now(), // crypto.randomUUID()
			title: trimmedValue,
			completed: false
		}

		setTodos(prev => [...prev, newTodo])
		setInputValue('')
	}

	return (
		<div>
				<form onSubmit={handleAddTodo}>
					<input 
						type="text" 
						placeholder='Add todo'
						onChange={e => setInputValue(e.target.value)} 
						value={inputValue}
					/>
					<button type='submit'>Add</button>
				</form>

				<ToDoList todos={todos}/>
			</div>
		);
	}; 