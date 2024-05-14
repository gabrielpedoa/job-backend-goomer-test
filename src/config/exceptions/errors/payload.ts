import { CustomHttpException } from "./custom";

export class PayloadException extends CustomHttpException {
  constructor(message: string) {
    super(message, 400, "PAYLOAD_VALIDATION_ERROR");
    this.name = "ValidatorException";
  }
}
