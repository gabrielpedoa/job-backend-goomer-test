import repositoryFactory from "../../config/repositoryFactory";
import { RestaurantService } from "../../domain/services/restaurant.service";
import { UpdateController } from "../../presentational/controller/update";
import { restaurantSchema } from "../../presentational/dtos/restaurantDto";
import { SchemaValidator } from "../../presentational/helpers/schemaValidator";

export function updateRestaurantController() {
  const restaurant = new RestaurantService(repositoryFactory());
  return new UpdateController(
    restaurant,
    new SchemaValidator(restaurantSchema)
  );
}
