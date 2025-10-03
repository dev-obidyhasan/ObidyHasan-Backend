import bcryptjs from "bcryptjs";
import httpStatus from "http-status-codes";
import { prisma } from "../../config/db";
import AppError from "../../helper/AppError";
import { createUserTokens } from "../../utils/userTokens";
import { access } from "fs";

const loginWithEmailAndPassword = async ({
  email,
  password,
}: {
  email: string;
  password: string;
}) => {
  const isUserExist = await prisma.profile.findUnique({
    where: { email },
  });

  if (!isUserExist) {
    throw new AppError(httpStatus.BAD_REQUEST, "User does not exist");
  }

  const isPasswordMatched = await bcryptjs.compare(
    password,
    isUserExist.password
  );

  if (!isPasswordMatched) {
    throw new AppError(httpStatus.UNAUTHORIZED, "Password is incorrect");
  }

  const userToken = createUserTokens(isUserExist);

  return {
    accessToken: userToken.accessToken,
  };
};

export const AuthService = {
  loginWithEmailAndPassword,
};
