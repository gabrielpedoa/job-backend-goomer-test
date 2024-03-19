import restaurantRepositoryFactory from "../../config/restaurantRepositoryFactory";
import { RestaurantService } from "../../domain/services/restaurant.service";
import { DeleteController } from "../../presentational/controller/delete";

export function deleteRestaurantController() {
  const restaurant = new RestaurantService(restaurantRepositoryFactory());
  return new DeleteController(restaurant);
}
