import productRepositoryFactory from "../../config/productRepositoryFactory";
import restaurantRepositoryFactory from "../../config/restaurantRepositoryFactory";
import { ProductService } from "../../domain/services/products.service";
import { DeleteController } from "../../presentational/controller/delete";

export function deleteProductController() {
  const product = new ProductService(
    productRepositoryFactory(),
    restaurantRepositoryFactory()
  );
  return new DeleteController(product);
}
