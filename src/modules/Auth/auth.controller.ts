import { Request, Response } from "express";
import { AuthService } from "./auth.service";
import { catchAsync } from "../../utils/catchAsync";
import { sendResponse } from "../../utils/sendResponse";
import httpStatus from "http-status-codes";

const loginWithEmailAndPassword = catchAsync(
  async (req: Request, res: Response) => {
    const { email, password } = req.body;
    const result = await AuthService.loginWithEmailAndPassword({
      email,
      password,
    });
    sendResponse(res, {
      success: true,
      statusCode: httpStatus.OK,
      message: "Logged in successfully",
      data: result,
    });
  }
);

export const AuthController = {
  loginWithEmailAndPassword,
};
