interface Todo {
    id: number,
    title: string,
    description?: string,
    status: TodoStatus,
    readonly createdAt: Date
}

enum TodoStatus {
    PENDING = 'PENDING',
    IN_PROGRESS = 'IN_PROGRESS',
    COMPLETED = 'COMPLETED'
}

type NewTodo = Omit<Todo, 'id' | 'createdAt'>

export { Todo, TodoStatus, NewTodo };