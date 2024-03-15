import { DatabaseException } from "./exceptions/databaseException";
import { DomainException } from "./exceptions/domainException";
import { NotFoundException } from "./exceptions/notFoundException";
import { ValidatorException } from "./exceptions/validationException";
import { BadRequest } from "../presentational/helpers/httpResponse";

export default (error: Error) => {
  if (error instanceof NotFoundException) return BadRequest(error.message);
  if (error instanceof DomainException) return BadRequest(error.message);
  if (error instanceof ValidatorException) return BadRequest(error.message);
  if (error instanceof DatabaseException)
    return {
      status: 500,
      message: error.message,
    };
  return {
    status: 500,
    message: "Internal Server error!",
  };
};
