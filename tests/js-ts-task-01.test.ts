import { TodoStatus, Todo } from '../JS-TS/solutions/types';

describe('Task 01: Core Types', () => {
  it('TodoStatus enum should contain expected members', () => {
    expect(TodoStatus).toHaveProperty('PENDING');
    expect(TodoStatus).toHaveProperty('IN_PROGRESS');
    expect(TodoStatus).toHaveProperty('COMPLETED');
  });

  it('New Todo instance should satisfy Todo interface structure', () => {
    const sample: Todo = {
      id: 1,
      title: 'Sample',
      description: 'desc',
      status: TodoStatus.PENDING,
      createdAt: new Date(),
    };
    expect(sample.id).toBe(1);
  });
});
