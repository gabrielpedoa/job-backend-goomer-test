import { NotFoundException } from "../../config/exceptions/notFoundException";
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
    console.log(items)
    return items
  }

  async loadById(data: RestaurantEntity): Promise<RestaurantEntity> {
    const restaurant = await this.repository.loadById(data.id);
    if (!restaurant) throw new NotFoundException("Restaurante não encontrado!");
    return restaurant;
  }

  async delete(data: RestaurantEntity): Promise<null> {
    const restaurant = await this.repository.loadById(data.id);
    if (!restaurant) throw new NotFoundException("Restaurante não encontrado!");
    return null;
  }
}

