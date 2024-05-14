import { NotFoundException } from "../../config/exceptions/errors/notFound";
import { MemoryRepository } from "../../repositories/MemoryRepository";
import { RestaurantEntity } from "../entities/restaurant.entity";

export class RestaurantService {
  constructor(
    private readonly repository: MemoryRepository<RestaurantEntity>
  ) {}

  async create(data: Omit<RestaurantEntity, "id">): Promise<RestaurantEntity> {
    return await this.repository.create(data);
  }

  async update(data: RestaurantEntity): Promise<RestaurantEntity> {
    const restaurant = await this.repository.loadById(data.id);
    if (!restaurant) throw new NotFoundException("Restaurante não encontrado!");
    return await this.repository.update(data);
  }

  async loadAll() {
    const items = await this.repository.loadAll();
    return items;
  }

  async loadById(data: RestaurantEntity): Promise<RestaurantEntity> {
    const restaurant = await this.repository.loadById(data.id);
    if (!restaurant) throw new NotFoundException("Restaurante não encontrado!");
    return restaurant;
  }

  async delete(
    data: RestaurantEntity
  ): Promise<{ message: string; data: RestaurantEntity }> {
    const restaurant = await this.repository.loadById(data.id);
    if (!restaurant) throw new NotFoundException("Restaurante não encontrado!");
    const del = await this.repository.delete(restaurant);
    return {
      message: "Restaurante foi deletado",
      data: del,
    };
  }
}
