import { IController } from "../../config/expressAdapter";
import { Ok } from "../helpers/httpResponse";

export interface ILoadProductByRestaurantId {
  loadRestaurantProducts: (id: string) => Promise<IProduct[]>;
}

export class LoadProductByRestaurantId
  implements IController<{ id: string }, unknown>
{
  constructor(
    private readonly loadRestaurantProductsUseCase: ILoadProductByRestaurantId
  ) {}
  public async handle(data: { id: string }) {
    const product =
      await this.loadRestaurantProductsUseCase.loadRestaurantProducts(data.id);
    return Ok(product);
  }
}
