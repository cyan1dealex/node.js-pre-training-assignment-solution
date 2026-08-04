import { InMemoryRepository } from './repository';
import { Todo, NewTodo, TodoStatus } from './types';

export class TodoNotFoundError extends Error {
  constructor(id: number) {
    super(`Task with id ${id} not found.`)
    this.name = 'TodoNotFoundError'
  }
}

export class TodoApi {
  private repo = new InMemoryRepository<Todo>();

  private nextId = 1

  private delay(): Promise<void> {
    const ms = 450
    return new Promise((resolve) => setTimeout(resolve, ms))
  }

  async getAll(): Promise<Todo[]> {
    await this.delay()

    return this.repo.findAll()
  }

  async add(newTodo: NewTodo): Promise<Todo> {
    await this.delay();

    const todo: Todo = {
      ...newTodo,
      id: this.nextId++,
      status: newTodo.status ?? TodoStatus.PENDING,
      createdAt: new Date(),
    };

    return this.repo.add(todo);
  }

  async update(id: number, update: Partial<Omit<Todo, 'id' | 'createdAt'>>): Promise<Todo> {
    await this.delay();

    const isExist = this.repo.findById(id);
    if (!isExist) throw new TodoNotFoundError(id)

    return this.repo.update(id, update)
  }

  async remove(id: number): Promise<void> {
    await this.delay();

    const isExist = this.repo.findById(id);
    if (!isExist) throw new TodoNotFoundError(id)

    return this.repo.remove(id)
  }
}
