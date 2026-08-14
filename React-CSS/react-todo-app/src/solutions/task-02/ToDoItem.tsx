import React from 'react';
import { TodoItemProps } from '../../types';

  // TODO: Implement the ToDoItem component
  // 
  // Requirements:
  // 1. Display the todo title
  // 2. Show completion status using conditional rendering
  // 3. Use different styling for completed vs active todos
  // 4. Make the component reusable for any todo object
  // 
  // Example usage:
  // <ToDoItem todo={{ id: 1, title: 'Learn React', completed: true }} />

export const ToDoItem: React.FC<TodoItemProps> = ({ todo }) => {
	const { title, completed } = todo

	return (
		<div>
			<span>{title}</span>
			-
			<span>{completed ? 'completed' : 'not completed'}</span>
		</div>
	);
}; 