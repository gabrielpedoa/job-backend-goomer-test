import { IController } from "../../config/expressAdapter";
import { Ok } from "../helpers/httpResponse";

export interface IDeleteUseCase<In, Out> {
  delete: (data: In) => Promise<Out>;
}

export class DeleteController<In, Out> implements IController<In, Out> {
  constructor(private readonly deleteUseCase: IDeleteUseCase<In, Out>) {}

  public async handle(data: In) {
    const del = await this.deleteUseCase.delete(data);
    return Ok(del);
  }
}
