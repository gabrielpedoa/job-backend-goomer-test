import { IController } from "../../config/utils/expressAdapter";
import { BadRequest, Created } from "../helpers/httpResponse";
import { ISchemaValidator } from "../helpers/schemaValidator";

export interface ICreateUsecase<In, Out> {
  create: (data: In) => Promise<Out>;
}

export class CreateController<In, Out> implements IController<In, unknown> {
  constructor(
    private readonly createUsecase: ICreateUsecase<In, Out>,
    private readonly schemaValidator: ISchemaValidator<In>
  ) {}

  public async handle(data: In) {
    const maybeMessage = this.schemaValidator.isValid(data);
    if (maybeMessage) return BadRequest(maybeMessage);
    const response = await this.createUsecase.create(data);
    return Created(response);
  }
}
