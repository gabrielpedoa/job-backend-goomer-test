export class ValidatorException extends Error {
  constructor(message: string) {
    super(message);
    this.name = "ValidatorException";
  }
}
