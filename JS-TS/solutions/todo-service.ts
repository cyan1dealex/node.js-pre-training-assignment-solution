import { TodoApi } from './todo-api';
import { Todo } from './types';

export class TodoService {
  constructor(private readonly api: TodoApi) { }

  async create(title: string, description = ''): Promise<Todo> {
    throw new Error('create: not implemented');
  }

  async toggleStatus(id: number): Promise<Todo> {
    throw new Error('toggleStatus: not implemented');
  }

  async search(keyword: string): Promise<Todo[]> {
    throw new Error('search: not implemented');
  }
}
