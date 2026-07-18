import { InMemoryRepository } from './repository';
import { Todo, NewTodo } from './types';

export class TodoApi {
  private repo = new InMemoryRepository<Todo>();

  async getAll(): Promise<Todo[]> {
    throw new Error('getAll: not implemented');
  }

  async add(newTodo: NewTodo): Promise<Todo> {
    throw new Error('add: not implemented');
  }

  async update(id: number, update: Partial<Omit<Todo, 'id' | 'createdAt'>>): Promise<Todo> {
    throw new Error('update: not implemented');
  }

  async remove(id: number): Promise<void> {
    throw new Error('remove: not implemented');
  }
}
