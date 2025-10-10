import { Response } from "express";

export interface AuthToken {
  accessToken?: string;
}

export const setAuthCookie = (
  res: Response,
  tokenInfo: AuthToken,
  email: string
) => {
  if (tokenInfo.accessToken) {
    res.cookie("accessToken", tokenInfo.accessToken, {
      httpOnly: true,
      secure: true,
      sameSite: "none",
    });
  }
  if (email) {
    const encodedEmail = Buffer.from(email).toString("base64");
    res.cookie("email", encodedEmail, {
      httpOnly: true,
      secure: true,
      sameSite: "none",
    });
  }
};
