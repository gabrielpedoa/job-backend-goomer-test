import restaurantRepositoryFactory from "../../config/restaurantRepositoryFactory";
import { RestaurantService } from "../../domain/services/restaurant.service";
import { LoadController } from "../../presentational/controller/loadAll";

export function loadAllRestaurantController() {
  const restaurant = new RestaurantService(restaurantRepositoryFactory());
  return new LoadController(restaurant);
}
