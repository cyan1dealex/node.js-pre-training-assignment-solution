import { TodoApi } from "../JS-TS/solutions/todo-api";
import { TodoService } from "../JS-TS/solutions/todo-service";
import { TodoStatus, Todo } from "../JS-TS/solutions/types";

describe("Task 09: Unit Tests for TodoService", () => {
  let service: TodoService;
  let initialTodo: Todo;

  beforeEach(async () => {
    jest.useFakeTimers();
    const api = new TodoApi();
    service = new TodoService(api);

    const promise = service.create("title", "description");
    await jest.runAllTimersAsync();
    initialTodo = await promise;
  });

  afterEach(() => {
    jest.useRealTimers();
  });

  it("Should create a new Todo", async () => {
    const title = "Buy bread";
    const description = "We run out of bread, so we need to buy a loaf";

    const promise = service.create(title, description);
    await jest.runAllTimersAsync();
    const todo = await promise;

    expect(todo).toHaveProperty("id");
    expect(todo.title).toBe(title);
    expect(todo.status).toBe(TodoStatus.PENDING);
  });

  it("Should throw an error when creating todo with empty title", async () => {
    const emptyPromise = service.create("");
    const spacesPromise = service.create("   ");

    await Promise.all([
      jest.runAllTimersAsync(),
      expect(emptyPromise).rejects.toThrow("Title cannot be empty"),
      expect(spacesPromise).rejects.toThrow("Title cannot be empty"),
    ]);
  });

  it("Should toggle status", async () => {
    const initialStatus = initialTodo.status;
    const promise = service.toggleStatus(initialTodo.id);
    await jest.runAllTimersAsync();
    const toggled = await promise;

    expect(toggled.status).not.toBe(initialStatus);
  });

  it("Search should return matching items", async () => {
    const p1 = service.create("Buy milk", "Go to the grocery store");
    const p2 = service.create("Clean room", "Vacuum the milk stain");
    const p3 = service.create("Do homework", "Math assignments");
    await jest.runAllTimersAsync();
    await Promise.all([p1, p2, p3]);

    const searchPromise = service.search("milk");
    await jest.runAllTimersAsync();
    const results = await searchPromise;

    expect(results).toHaveLength(2);
    expect(results).toEqual(
      expect.arrayContaining([
        expect.objectContaining({ title: "Buy milk" }),
        expect.objectContaining({ description: "Vacuum the milk stain" }),
      ]),
    );
  });

  it("Should throw an error when updating non-existing id", async () => {
    const id = -99;
    const promise = service.toggleStatus(id);
    await Promise.all([
      jest.runAllTimersAsync(),
      expect(promise).rejects.toThrow(`Todo with id ${id} is not found`),
    ]);
  });
});