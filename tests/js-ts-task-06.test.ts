import { TodoApi } from '../JS-TS/solutions/todo-api';
import { TodoStatus } from '../JS-TS/solutions/types';

describe('Task 06: Simulated API', () => {
  jest.setTimeout(10000);
  const api = new TodoApi();

  it('add then getAll should return newly added item', async () => {
    await api.add({ title: 'Remote' });
    const all = await api.getAll();
    expect(all.length).toBe(1);
    expect(all[0].title).toBe('Remote');
  });

  it('update should change status', async () => {
    const [item] = await api.getAll();
    const updated = await api.update(item.id, { status: TodoStatus.COMPLETED });
    expect(updated.status).toBe(TodoStatus.COMPLETED);
  });

  it('remove should delete item', async () => {
    const [item] = await api.getAll();
    await api.remove(item.id);
    const all = await api.getAll();
    expect(all.length).toBe(0);
  });
});
