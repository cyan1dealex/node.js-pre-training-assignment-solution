import { TodoService } from './todo-service';
import { TodoApi } from './todo-api';
import { Todo } from './types';

export class ToDoManager {
  private service = new TodoService(new TodoApi());

  async init(): Promise<void> {
    throw new Error('init: not implemented');
  }

  async add(title: string, description = ''): Promise<void> {
    throw new Error('add: not implemented');
  }

  async complete(id: number): Promise<void> {
    throw new Error('complete: not implemented');
  }

  async list(): Promise<Todo[]> {
    throw new Error('list: not implemented');
  }
}
