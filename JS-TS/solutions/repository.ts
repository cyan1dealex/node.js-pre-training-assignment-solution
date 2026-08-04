export class InMemoryRepository<T extends { id: number }> {
  // private storage
  private items: T[] = [];

  add(entity: T): T {
    this.items.push(entity);
    return entity;
  }

  update(id: number, patch: Partial<T>): T {
    const index = this.items.findIndex((item) => item.id === id);
    
    if (index === -1) {
      throw new Error(`Item with id ${id} not found`);
    }

    const updatedItem = { 
      ...this.items[index], 
      ...patch 
    };
    
    this.items[index] = updatedItem;
    return updatedItem;
  }

  remove(id: number): void {
    this.items = this.items.filter((item) => item.id !== id);
  }

  findById(id: number): T | undefined {
    return this.items.find((item) => item.id === id);
  }

  findAll(): T[] {
    return [...this.items];
  }
}