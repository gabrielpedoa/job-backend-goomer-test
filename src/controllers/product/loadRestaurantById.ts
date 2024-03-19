import productRepositoryFactory from "../../config/productRepositoryFactory";
import restaurantRepositoryFactory from "../../config/restaurantRepositoryFactory";
import { ProductService } from "../../domain/services/products.service";
import { LoadProductByRestaurantId } from "../../presentational/controller/loadProductByRestaurantId";

export function loadProductsByRestaurantIdController() {
  const product = new ProductService(
    productRepositoryFactory(),
    restaurantRepositoryFactory()
  );
  return new LoadProductByRestaurantId(product)
}
