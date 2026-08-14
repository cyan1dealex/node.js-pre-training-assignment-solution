import { TodoService } from './todo-service';
import { TodoApi } from './todo-api';
import { Todo } from './types';

export class ToDoManager {
  private service = new TodoService(new TodoApi());

  async init(): Promise<void> {
    await this.service.create('Task 1', 'Some description for Task 1...')
    await this.service.create('Task 2', 'Some description for Task 2...')
    await this.service.create('Task 3', 'Some description for Task 3...')
  }

  async add(title: string, description = ''): Promise<void> {
    await this.service.create(title, description)
  }

  async complete(id: number): Promise<void> {
    await this.service.toggleStatus(id)
  }

  async list(): Promise<Todo[]> {
    return this.service.search('')
  }
}
