import { Request, Response } from "express";
import errorHandler from "./errorHandler";
import { PayloadException } from "../exceptions/errors/payload";

type httpResponse<T> = {
  statusCode: number;
  data: T;
};

export interface IController<In, Out> {
  handle: (data: In) => Promise<httpResponse<Out>>;
}

export default <In>(controller: IController<In, unknown>) => {
  return async (req: Request, res: Response) => {
    try {
      const { data, statusCode } = await controller.handle({
        ...req.body,
        ...req.params,
        ...req.query,
      });
      return res.status(statusCode).json(data);
    } catch (error) {
      console.log(error);
      if (error instanceof PayloadException) {
        const status = 400;

        let errorDetails: { [key: string]: string[] } | undefined;
        if (Array.isArray(error.error_message)) {
          errorDetails = {};
          error.error_message.forEach(
            (errorItem: { [key: string]: string[] }) => {
              const field = Object.keys(errorItem)[0];
              errorDetails![field] = errorItem[field];
            }
          );
        }

        const errorObj = {
          error_type: "ValidationError",
          error_code: "PAYLOAD_VALIDATION_ERROR",
          error_message: "Invalid payload",
          error_details: errorDetails || error.error_message,
          status_code: status,
          timestamp: new Date().toISOString(),
          path: req.url,
        };

        return res.status(status).json(errorObj);
      } else {
        return errorHandler(error as Error);
      }
    }
  };
};
