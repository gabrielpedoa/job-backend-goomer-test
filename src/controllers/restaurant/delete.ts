import repositoryFactory from "../../config/repositoryFactory";
import { RestaurantService } from "../../domain/services/restaurant.service";
import { DeleteController } from "../../presentational/controller/delete";

export function deleteRestaurantController() {
  const restaurant = new RestaurantService(repositoryFactory());
  return new DeleteController(restaurant);
}
