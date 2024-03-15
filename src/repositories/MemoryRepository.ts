export type Entity = {
  id: number;
};

type CanBeNull<T> = T | null;

export class MemoryRepository<T extends Entity> {
  private items: CanBeNull<T>[] = [];

  public async create(data: Omit<T, "id">) {
    const created = {
      ...data,
      id: this.items.length + 1,
    } as T;
    this.items.push(created);
    return created as T;
  }

  public async loadById(data: string | number) {
    const id = this.items.find((e) => e?.id === Number(data));
    return id;
  }

  public async loadAll() {
    return this.items;
  }

  public async update(data: T) {
    const index = this.items.findIndex((e) => e?.id === data.id);
    if (index === -1) throw new Error("O Id informado não existe!");
    this.items[index] = data;
    return data;
  }

  public async delete(data: T) {
    for (let i = 0; i < this.items.length; i++) {
      if (this.items[i]?.id === data.id) {
        this.items[i] = null;
      }
    }
    throw new Error("item não encontrado");
  }
}
