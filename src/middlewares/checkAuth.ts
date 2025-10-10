import httpStatus from "http-status-codes";
import { NextFunction, Request, Response } from "express";
import AppError from "../helper/AppError";
import { verifyToken } from "../utils/jwt";
import { JwtPayload } from "jsonwebtoken";
import { prisma } from "../config/db";

export const checkAuth =
  (...authRoles: string[]) =>
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const accessToken = req.headers.authorization || req.cookies.accessToken;
      if (!accessToken)
        throw new AppError(httpStatus.FORBIDDEN, "No token receive");

      const verifiedToken = verifyToken(
        accessToken,
        process.env.JWT_ACCESS_SECRET!
      ) as JwtPayload;

      const isUserExist = await prisma.profile.findUnique({
        where: { email: verifiedToken.email },
      });

      if (!isUserExist)
        throw new AppError(httpStatus.NOT_FOUND, "User does not exist");

      if (!authRoles.includes(verifiedToken.role)) {
        throw new AppError(
          httpStatus.FORBIDDEN,
          "You are not permitted to view this route!"
        );
      }

      req.user = verifiedToken;
      next();
    } catch (error) {
      next(error);
    }
  };
