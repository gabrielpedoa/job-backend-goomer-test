import productRepositoryFactory from "../../config/productRepositoryFactory";
import restaurantRepositoryFactory from "../../config/restaurantRepositoryFactory";
import { ProductService } from "../../domain/services/products.service";
import { CreateController } from "../../presentational/controller/create";
import { productSchema } from "../../presentational/dtos/productDto";
import { SchemaValidator } from "../../presentational/helpers/schemaValidator";

export function createProductController() {
  const product = new ProductService(
    productRepositoryFactory(),
    restaurantRepositoryFactory()
  );
  return new CreateController(product, new SchemaValidator(productSchema));
}
