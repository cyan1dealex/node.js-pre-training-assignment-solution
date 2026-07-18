import { Todo, TodoStatus } from './types';

export function toggleAll(state: Todo[], completed: boolean): Todo[] {
  throw new Error('toggleAll: not implemented');
}

export function clearCompleted(state: Todo[]): Todo[] {
  throw new Error('clearCompleted: not implemented');
}

export function countByStatus(state: Todo[], status: TodoStatus): number {
  throw new Error('countByStatus: not implemented');
}
