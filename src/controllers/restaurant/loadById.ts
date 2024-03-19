import restaurantRepositoryFactory from "../../config/restaurantRepositoryFactory";
import { RestaurantService } from "../../domain/services/restaurant.service";
import { LoadByIdController } from "../../presentational/controller/loadById";

export function loadByIdRestaurantController() {
  const restaurantService = new RestaurantService(restaurantRepositoryFactory());
  return new LoadByIdController(restaurantService);
}
