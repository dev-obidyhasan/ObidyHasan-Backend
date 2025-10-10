import { Response } from "express";

export function setAuthCookie(
  res: Response,
  tokenInfo: { accessToken?: string },
  email: string
) {
  const isProduction = process.env.NODE_ENV === "production";
  const cookieDomain = isProduction ? process.env.FRONTEND_URL : undefined;

  if (tokenInfo.accessToken) {
    res.cookie("accessToken", tokenInfo.accessToken, {
      httpOnly: true,
      secure: isProduction,
      sameSite: isProduction ? "none" : "lax",
      domain: cookieDomain,
      path: "/",
    });
  }

  if (email) {
    res.cookie("email", email, {
      httpOnly: true,
      secure: isProduction,
      sameSite: isProduction ? "none" : "lax",
      domain: cookieDomain,
      path: "/",
    });
  }
}
