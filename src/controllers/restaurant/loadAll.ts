import repositoryFactory from "../../config/repositoryFactory";
import { RestaurantService } from "../../domain/services/restaurant.service";
import { LoadController } from "../../presentational/controller/loadAll";

export function loadAllRestaurantController() {
  const restaurant = new RestaurantService(repositoryFactory());
  return new LoadController(restaurant);
}
