export type Entity = {
  id: number | string;
};

type CanBeNull<T> = T | null;

export class MemoryRepository<T extends Entity> {
  protected items: CanBeNull<T>[] = [];

  public async create(data: Omit<T, "id">) {
    const created = {
      id: this.items.length + 1,
      ...data,
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
    const index = this.items.findIndex((e) => e?.id === Number(data.id));
    console.log("items: ", this.items);
    console.log("id: ", data.id);
    if (index === -1) throw new Error("O Id informado não existe!");
    const updatedObj = {
      ...data,
      id: Number(data.id),
    };
    this.items[index] = updatedObj;
    return updatedObj;
  }

  public async delete(data: T) {
    let index = this.items.indexOf(data);
    if (index !== -1) this.items.splice(index, 1);
    return data;
  }
}
