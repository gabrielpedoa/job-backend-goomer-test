import repositoryFactory from "../../config/repositoryFactory";
import { RestaurantEntity } from "../../domain/entities/restaurant.entity";
import { RestaurantService } from "../../domain/services/restaurant.service";
import { CreateController } from "../../presentational/controller/create";
import { restaurantSchema } from "../../presentational/dtos/restaurantDto";
import { SchemaValidator } from "../../presentational/helpers/schemaValidator";
import { MemoryRepository } from "../../repositories/MemoryRepository";

export function createRestaurantController() {
  const restaurantService = new RestaurantService(repositoryFactory());
  return new CreateController(
    restaurantService,
    new SchemaValidator(restaurantSchema)
  );
}
