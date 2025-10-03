import { generateToken } from "./jwt";

export const createUserTokens = (user: any) => {
  const jwtPayload = {
    userId: user.id,
    email: user.email,
    role: user.role,
  };

  const accessToken = generateToken(
    jwtPayload,
    process.env.JWT_ACCESS_SECRET as string,
    process.env.JWT_ACCESS_EXPIRES as string
  );

  return {
    accessToken,
  };
};
