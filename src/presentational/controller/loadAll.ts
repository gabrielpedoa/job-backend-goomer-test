import { IController } from "../../config/expressAdapter";
import { Ok } from "../helpers/httpResponse";

export interface LoadAllUsecase<Out> {
  loadAll: () => Promise<Out[]>;
}

export class LoadController <Out> implements IController<null, unknown> {
  constructor(
    private readonly loadAllUsecase: LoadAllUsecase<Out>
  ) {}

  public async handle() {
    const response = await this.loadAllUsecase.loadAll();
    return Ok(response);
  }
}
