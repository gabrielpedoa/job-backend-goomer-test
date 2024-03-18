import { IController } from "../../config/expressAdapter";
import { BadRequest, Ok } from "../helpers/httpResponse";
import { ISchemaValidator } from "../helpers/schemaValidator";

export interface IUpdateUseCase<In, Out> {
  update: (data: In) => Promise<Out>;
}

export class UpdateController<In, Out> implements IController<In, unknown> {
  constructor(
    private readonly updateUseCase: IUpdateUseCase<In, Out>,
    private readonly schemaValidator: ISchemaValidator<In>
  ) {}

  public async handle(data: In) {
    const maybeMessage = this.schemaValidator.isValid(data);
    if (maybeMessage) return BadRequest(maybeMessage);
    const response = await this.updateUseCase.update(data);
    return Ok(response);
  }
}
