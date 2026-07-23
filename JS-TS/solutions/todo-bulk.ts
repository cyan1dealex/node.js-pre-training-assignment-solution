import { Todo, TodoStatus } from './types';

export function toggleAll(state: Todo[], completed: boolean): Todo[] {
  const newStatus = completed ? TodoStatus.COMPLETED : TodoStatus.PENDING

  return state.map(todo => ({
    ...todo,
    status: newStatus
  }))
}

export function clearCompleted(state: Todo[]): Todo[] {
  return state.filter(todo => todo.status !== TodoStatus.COMPLETED)
}

export function countByStatus(state: Todo[], status: TodoStatus): number {
  const resultArray: Todo[] = state.filter(todo => todo.status === status)
  return resultArray.length
}
