import { CustomHttpException } from "./custom";

export class DomainException extends CustomHttpException {
  constructor(message: string) {
    super(message, 400, "DOMAIN_VALIDATION_ERROR");
    this.name = "DomainException";
  }
}
