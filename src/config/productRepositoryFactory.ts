import { ProductMemoryRepository } from "../repositories/ProductMemoryRepository";

const repository = new ProductMemoryRepository();

export default <T>() => {
  return repository as T;
};
