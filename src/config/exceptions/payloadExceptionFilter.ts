import { PayloadException } from "./errors/payload";

class PayloadExceptionFilter {
  catch(exception: PayloadException, request: Request, response: Response) {
    const status = 400;

    console.error(exception);

    let errorDetails: { [key: string]: string[] } | undefined;
    if (Array.isArray(exception.error_message)) {
      errorDetails = {};
      exception.error_message.forEach((error: { [key: string]: string[] }) => {
        const field = Object.keys(error)[0];
        errorDetails![field] = error[field];
      });
    }

    const errorObj = {
      error_type: "ValidationError",
      error_code: "PAYLOAD_VALIDATION_ERROR",
      error_message: "Invalid payload",
      error_details: errorDetails || exception.error_message,
      status_code: status,
      timestamp: new Date().toISOString(),
      path: request.url,
    };

  }
}
