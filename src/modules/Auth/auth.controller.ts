import { NextFunction, Request, Response } from "express";
import { AuthService } from "./auth.service";
import { catchAsync } from "../../utils/catchAsync";
import { sendResponse } from "../../utils/sendResponse";
import httpStatus from "http-status-codes";
import { setAuthCookie } from "../../utils/setCookie";

const loginWithEmailAndPassword = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    const { email, password } = req.body;
    const result = await AuthService.loginWithEmailAndPassword({
      email,
      password,
    });

    setAuthCookie(res, result, email);

    sendResponse(res, {
      success: true,
      statusCode: httpStatus.OK,
      message: "Logged in successfully",
      data: { accessToken: result.accessToken },
    });
  }
);

const logout = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    res.clearCookie("accessToken", {
      httpOnly: true,
      secure: true,
      sameSite: "none",
    });
    res.clearCookie("email", {
      httpOnly: true,
      secure: true,
      sameSite: "none",
    });

    sendResponse(res, {
      success: true,
      statusCode: httpStatus.OK,
      message: "User logged out successfully",
      data: null,
    });
  }
);

export const AuthController = {
  loginWithEmailAndPassword,
  logout,
};
