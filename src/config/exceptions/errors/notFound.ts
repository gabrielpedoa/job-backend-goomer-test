import { CustomHttpException } from "./custom"

export class NotFoundException extends CustomHttpException {
  constructor(message: string) {
    super(message, 404, "NOT_FOUND")
    this.name = "NotFoundException"
  }
}
