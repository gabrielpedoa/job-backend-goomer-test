import { DomainException } from "../exceptions/errors/unauthorized";
import { NotFoundException } from "../exceptions/errors/notFound";
import { PayloadException } from "../exceptions/errors/payload";
import { BadRequest } from "../../presentational/helpers/httpResponse";

export default (error: Error) => {
  if (error instanceof NotFoundException) return BadRequest(error.message);
  if (error instanceof DomainException) return BadRequest(error.message);
  if (error instanceof PayloadException) return BadRequest(error.message);
  return {
    status: 500,
    message: error.message,
  };
  return {
    status: 500,
    message: "Internal Server error!",
  };
};
