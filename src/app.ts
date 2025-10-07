import compression from "compression";
import cors from "cors";
import express, { NextFunction, Request, Response } from "express";
import { globalErrorHandler } from "./middlewares/globalErrorHandler";
import notFound from "./middlewares/notFound";
import cookieParser from "cookie-parser";
import { router } from "./routers";

const app = express();

app.use(
  cors({
    origin: process.env.FRONTEND_URL,
    credentials: true,
    methods: ["GET", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);
app.use(compression());
app.use(express.json());
app.use(cookieParser());
app.set("trust proxy", 1);

app.use("/api/v1", router);

app.get("/", (req: Request, res: Response) => {
  res.send("Obidy Hasan Naim Server Is Running.");
});

// Global Error Handler
app.use(globalErrorHandler);
app.use(notFound);

export default app;
