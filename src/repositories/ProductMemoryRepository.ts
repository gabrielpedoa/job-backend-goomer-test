import { MemoryRepository } from "./MemoryRepository";

export class ProductMemoryRepository extends MemoryRepository<IProduct> {
  async loadByRestaurant(id: string | number) {
    const product = this.items.filter((e) => e?.idRestaurant == id);
    return product as IProduct[];
  }
}
