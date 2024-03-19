import restaurantRepositoryFactory from "../../config/restaurantRepositoryFactory";
import { RestaurantService } from "../../domain/services/restaurant.service";
import { UpdateController } from "../../presentational/controller/update";
import { restaurantSchema } from "../../presentational/dtos/restaurantDto";
import { SchemaValidator } from "../../presentational/helpers/schemaValidator";

export function updateRestaurantController() {
  const restaurant = new RestaurantService(restaurantRepositoryFactory());
  return new UpdateController(
    restaurant,
    new SchemaValidator(restaurantSchema)
  );
}
