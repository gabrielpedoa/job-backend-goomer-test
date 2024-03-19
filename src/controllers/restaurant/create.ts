import restaurantRepositoryFactory from "../../config/restaurantRepositoryFactory";
import { RestaurantService } from "../../domain/services/restaurant.service";
import { CreateController } from "../../presentational/controller/create";
import { restaurantSchema } from "../../presentational/dtos/restaurantDto";
import { SchemaValidator } from "../../presentational/helpers/schemaValidator";

export function createRestaurantController() {
  const restaurantService = new RestaurantService(
    restaurantRepositoryFactory()
  );
  return new CreateController(
    restaurantService,
    new SchemaValidator(restaurantSchema)
  );
}
