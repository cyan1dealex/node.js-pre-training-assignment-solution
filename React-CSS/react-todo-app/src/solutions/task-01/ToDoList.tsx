import React from 'react';
import { TodoListProps } from '../../types';

// TODO: Implement the ToDoList component
  // 
  // Requirements:
  // 1. Display a list of todos using the todos prop
  // 2. Each todo should show its title and completion status
  // 3. Use proper HTML semantics (ul, li elements)
  // 4. Handle empty todos array gracefully
  // 
  // Example usage:
  // <ToDoList todos={[
  //   { id: 1, title: 'Learn React', completed: false },
  //   { id: 2, title: 'Build Todo App', completed: true }
  // ]} />

export const ToDoList: React.FC<TodoListProps> = ({ todos }) => {
	const isEmpty = !todos || todos.length === 0 

	return (
		<div>
			<h3>Todo List</h3>
		
			{isEmpty ? (
				<p>Todo List is empty.</p>
			) : (
				<ul>
					{todos.map((todo) => (
						<li key={todo.id}>
							{todo.title} - {todo.completed ? 'completed' : 'not completed'}
						</li>
					))}
				</ul>
			)} 
		</div>
	);
}; 