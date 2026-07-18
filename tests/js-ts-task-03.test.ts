import { createTodo } from '../JS-TS/solutions/todo-factory';
import { TodoStatus } from '../JS-TS/solutions/types';

describe('Task 03: Todo Factory', () => {
  it('should create todo with unique id and defaults', () => {
    const a = createTodo({ title: 'A', description: '' });
    const b = createTodo({ title: 'B' });
    expect(a.id).toBe(1);
    expect(b.id).toBe(2);
    expect(a.status).toBe(TodoStatus.PENDING);
    expect(b.status).toBe(TodoStatus.PENDING);
    expect(a.createdAt instanceof Date).toBe(true);
  });
});
