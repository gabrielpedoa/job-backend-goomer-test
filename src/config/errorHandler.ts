import { DatabaseException } from "../exceptions/databaseException";
import { DomainException } from "../exceptions/domainException";
import { NotFoundException } from "../exceptions/notFoundException";
import { ValidatorException } from "../exceptions/validationException";

export default (error: Error) => {
  if (error instanceof NotFoundException)
    return {
      status: 404,
      message: error.message,
    };
  if (error instanceof DomainException)
    return {
      status: 400,
      message: error.message,
    };
  if (error instanceof ValidatorException)
    return {
      status: 400,
      message: error.message,
    };
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
