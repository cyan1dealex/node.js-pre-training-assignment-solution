import { Todo, NewTodo, TodoStatus } from './types';

let nextId = 1;

export function createTodo(input: NewTodo): Todo {
  const todoCard: Todo = {
    id: nextId++,
    title: input.title,
    status: TodoStatus.PENDING,
    description: input.description,
    createdAt: new Date()
  }
  return todoCard
}
