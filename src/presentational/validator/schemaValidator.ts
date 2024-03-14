import { ZodObject } from "zod";

export class SchemaValidator<T> {
  private schema: ZodObject<any>;
  constructor(schema: ZodObject<any>) {
    this.schema = schema;
  }

  public isValid(data: T) {
    console.log(data);
    const isSchemaValid = this.schema.safeParse(data);
    if (isSchemaValid.success) return null;
    console.log(isSchemaValid.error.errors);
    return isSchemaValid.error.errors[0].message;
  }
}
