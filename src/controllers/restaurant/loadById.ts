import repositoryFactory from "../../config/repositoryFactory";
import { RestaurantService } from "../../domain/services/restaurant.service";
import { LoadByIdController } from "../../presentational/controller/loadById";

export function loadByIdRestaurantController() {
  const restaurantService = new RestaurantService(repositoryFactory());
  return new LoadByIdController(restaurantService);
}
