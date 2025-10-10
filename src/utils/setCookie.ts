import { Response } from "express";

export interface AuthToken {
  accessToken?: string;
}

export const setAuthCookie = (
  res: Response,
  tokenInfo: AuthToken,
  email: string
) => {
  const status = process.env.NODE_ENV === "production" ? true : false;
  const oneWeekInMs = 7 * 24 * 60 * 60 * 1000;

  if (tokenInfo.accessToken) {
    res.cookie("accessToken", tokenInfo.accessToken, {
      httpOnly: true,
      secure: status,
      sameSite: "none" as const,
      maxAge: oneWeekInMs,
    });
  }
  if (email) {
    const encodedEmail = Buffer.from(email).toString("base64");
    res.cookie("email", encodedEmail, {
      httpOnly: true,
      secure: status,
      sameSite: "none" as const,
      maxAge: oneWeekInMs,
    });
  }
};
