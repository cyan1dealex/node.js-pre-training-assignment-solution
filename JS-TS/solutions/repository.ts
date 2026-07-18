export class InMemoryRepository<T extends { id: number }> {
  // private storage
  private items: T[] = [];

  add(entity: T): T {
    throw new Error('add: not implemented');
  }

  update(id: number, patch: Partial<T>): T {
    throw new Error('update: not implemented');
  }

  remove(id: number): void {
    throw new Error('remove: not implemented');
  }

  findById(id: number): T | undefined {
    throw new Error('findById: not implemented');
  }

  findAll(): T[] {
    throw new Error('findAll: not implemented');
  }
}
