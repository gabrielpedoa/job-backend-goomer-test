type Entity = {
  id: number;
};

type CanBeNull<T> = T | null;

export class MemoryRepository<T extends Entity> {
  private items: CanBeNull<T>[] = [];

  public create(data: Omit<T, "id">) {
    const created = {
      ...data,
      id: this.items.length + 1,
    } as T;
    this.items.push(created);
    return created;
  }

  public loadById(data: string | number) {
    const id = this.items.find((e) => e?.id === Number(data));
    return id;
  }

  public loadAll() {
    return this.items;
  }

  public update(data: T) {
    const index = this.items.findIndex((e) => e?.id === data.id);
    if (index === -1) throw new Error("O Id informado não existe!");
    this.items[index] = data;
    return data;
  }

  public delete(data: T) {
    for (let i = 0; i < this.items.length; i++) {
      if (this.items[i]?.id === data.id) {
        this.items[i] = null;
      }
    }
    throw new Error("item não encontrado");
  }
}
