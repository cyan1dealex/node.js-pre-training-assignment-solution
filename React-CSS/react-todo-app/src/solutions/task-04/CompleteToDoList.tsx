import React, { useState } from 'react';
import { Todo } from '../../types';

// TODO: Implement the CompleteToDoList component
  // 
  // Requirements:
  // 1. Display a list of todos with add functionality
  // 2. Add a "Complete" button for each todo
  // 3. When clicked, mark the todo as completed
  // 4. Use immutable state updates
  // 5. Show completion status for each todo
  // 
  // Example state structure:
  // const [todos, setTodos] = useState<Todo[]>([]);
  // 
  // Example update function:
  // const markCompleted = (id: number) => {
  //   setTodos(todos.map(todo => 
  //     todo.id === id ? {...todo, completed: true} : todo
  //   ));
  // };

export const CompleteToDoList: React.FC = () => {
	const [inputValue, setInputValue] = useState('');
	const [todos, setTodos] = useState<Todo[]>([]);

	const isEmpty = !todos || todos.length === 0 
	
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

	const handleToggleComplete = (id: number) => {
		setTodos(prev =>
			prev.map(todo =>
				todo.id === id ? { ...todo, completed: !todo.completed } : todo
			)
		);
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
	
			<div>
				<h3>Todo List</h3>
			
				{isEmpty ? (
					<p>Todo List is empty.</p>
				) : (
					<ul>
						{todos.map((todo) => (
							<li key={todo.id}>
								<span 
									style={{
										textDecoration: todo.completed ? 'line-through' : 'none',
									}}
								>
									{todo.title} - {todo.completed ? 'completed' : 'not completed'}
								</span>

								<button type='button' onClick={() => handleToggleComplete(todo.id)}>
									{todo.completed ? 'Undo' : 'Complete'}
								</button>
							</li>
						))}
					</ul>
				)} 
			</div>
		</div>
	);
}; 