import app from "../src/app";
import { prisma } from "../src/config/db";
import { SeedAdmin } from "../src/utils/SeedAdmin";

export default async function handler(req: any, res: any) {
  try {
    await prisma.$connect();
    console.log("✅ Database connected");

    await SeedAdmin();

    return app(req, res);
  } catch (err: any) {
    console.error("💥 Serverless Function Error:", err);
    res.status(500).json({
      message: "Internal Server Error",
      error: err?.message || "Unknown Error",
    });
  }
}
