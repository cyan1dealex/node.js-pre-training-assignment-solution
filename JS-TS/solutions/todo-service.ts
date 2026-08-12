import { TodoApi } from './todo-api';
import { Todo, TodoStatus } from './types';

export class TodoService {
  constructor(private readonly api: TodoApi) { }

  async create(title: string, description = ''): Promise<Todo> {
    if (!title || title.trim() === ''){
      throw new Error('Title cannot be empty')
    }

    return this.api.add({
      title: title.trim(),
      description: description.trim()
    })
  }

  async toggleStatus(id: number): Promise<Todo> {
    const allTodos = await this.api.getAll()
    const neededTodo = allTodos.find(element => element.id === id)

    if (!neededTodo) {
      throw new Error(`Todo with id ${id} is not found`)
    }

    return this.api.update(id, {
      status: neededTodo.status === TodoStatus.PENDING ? TodoStatus.COMPLETED : TodoStatus.PENDING
    })
  }

  async search(keyword: string): Promise<Todo[]> {
    const allTodos = await this.api.getAll()
    
    if (!keyword || keyword.trim() === '') {
      return allTodos
    }

    const keywordLowercase = keyword.toLowerCase().trim()

    return allTodos.filter(element => {
      const matchTitle = element.title.toLowerCase().includes(keywordLowercase)
      const matchDescription = element.description?.toLowerCase().includes(keywordLowercase)

      return matchTitle || matchDescription
    })
  }
}
