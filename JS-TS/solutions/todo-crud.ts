import { Todo } from './types';

export function addTodo(state: Todo[], todo: Todo): Todo[] {
  throw new Error('addTodo: not implemented');
}

export function updateTodo(state: Todo[], id: number, update: Partial<Omit<Todo, 'id' | 'createdAt'>>): Todo[] {
  throw new Error('updateTodo: not implemented');
}

export function removeTodo(state: Todo[], id: number): Todo[] {
  throw new Error('removeTodo: not implemented');
}

export function getTodo(state: Todo[], id: number): Todo | undefined {
  throw new Error('getTodo: not implemented');
}
