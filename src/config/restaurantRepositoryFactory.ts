import { MemoryRepository } from "../repositories/MemoryRepository";

const repository = new MemoryRepository();

export default <T>() => {
  return repository  as T;
};
