import httpStatus from "http-status-codes";
import { Request, Response } from "express";
import { UserService } from "./user.service";
import { catchAsync } from "../../utils/catchAsync";
import { sendResponse } from "../../utils/sendResponse";

const getSingleUser = catchAsync(async (req: Request, res: Response) => {
  const result = await UserService.getSingleUser(req?.query?.email as string);
  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: "Get user in successfully",
    data: result,
  });
});

export const UserController = {
  getSingleUser,
};
