import { NextFunction, Request, Response } from "express";
import { TErrorSources } from "../interfaces/error.types";
import AppError from "../helper/AppError";

export const globalErrorHandler = async (
  err: any,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  if (process.env.NODE_ENV === "development") {
    console.log("Error from GlobalError Handler : ", err);
  }

  let errorSources: TErrorSources[] = [];
  let statusCode = 500;
  let message = "Something Went Wrong!";

  if (err instanceof AppError) {
    statusCode = err.statusCode;
    message = err.message;
  } else if (err instanceof Error) {
    statusCode = 500;
    message = err.message;
  }

  res.status(statusCode).json({
    success: false,
    message,
    errorSources,
    err: process.env.NODE_ENV === "development" ? err : null,
    stack: process.env.NODE_ENV === "development" ? err.stack : null,
  });
};
