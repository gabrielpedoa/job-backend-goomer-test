import { NotFoundException } from "../../config/exceptions/errors/notFound";
import { MemoryRepository } from "../../repositories/MemoryRepository";
import { ProductMemoryRepository } from "../../repositories/ProductMemoryRepository";
import { ProductEntity } from "../entities/product.entity";
import { RestaurantEntity } from "../entities/restaurant.entity";

export class ProductService {
  constructor(
    private readonly productRepository: ProductMemoryRepository,
    private readonly restaurantRepository: MemoryRepository<RestaurantEntity>
  ) {}

  async create(data: Omit<ProductEntity, "id">) {
    const restaurant = await this.restaurantRepository.loadById(
      data.idRestaurant
    );
    if (!restaurant) throw new NotFoundException("Restaurante não encontrado");
    const product = new ProductEntity(data).getProduct;
    await this.productRepository.create(product);
    console.log(product);
    return product;
  }

  async loadRestaurantProducts(id: string) {
    const restaurantProducts = await this.productRepository.loadByRestaurant(
      id
    );
    return restaurantProducts;
  }

  async update(data: ProductEntity) {
    const product = await this.productRepository.loadById(data.id);
    if (!product) throw new NotFoundException("Produto não encontrado");
    return await this.productRepository.update(data);
  }

  async delete(data: ProductEntity) {
    const product = await this.productRepository.loadById(data.id);
    console.log("aq:  ",product)
    if (!product) throw new NotFoundException("Produto não encontrado");
    const del = await this.productRepository.delete(product);
    return {
      message: "O produto foi deletado",
      data: del,
    };
  }
}
