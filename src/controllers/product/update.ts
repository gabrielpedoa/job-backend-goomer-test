import productRepositoryFactory from "../../config/productRepositoryFactory";
import restaurantRepositoryFactory from "../../config/restaurantRepositoryFactory";
import { ProductService } from "../../domain/services/products.service";
import { UpdateController } from "../../presentational/controller/update";
import { productSchema } from "../../presentational/dtos/productDto";
import { SchemaValidator } from "../../presentational/helpers/schemaValidator";

export function updateProductController() {
  const product = new ProductService(
    productRepositoryFactory(),
    restaurantRepositoryFactory()
  );
  return new UpdateController(product, new SchemaValidator(productSchema));
}
