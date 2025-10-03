import compression from "compression";
import cors from "cors";
import express, { NextFunction, Request, Response } from "express";
import { UserRoute } from "./modules/User/user.route";
import { AuthRoute } from "./modules/Auth/auth.route";
import { globalErrorHandler } from "./middlewares/globalErrorHandler";
import notFound from "./middlewares/notFound";

const app = express();

app.use(cors());
app.use(compression());
app.use(express.json());

app.use("/api/v1/auth", AuthRoute);
app.use("/api/v1/user", UserRoute);

app.use(
  cors({
    origin: process.env.FRONTEND_URL,
    credentials: true,
  })
);

app.get("/", (req: Request, res: Response) => {
  res.send("Obidy Hasan Naim Server Is Running.");
});

// Global Error Handler
app.use(globalErrorHandler);
app.use(notFound);

export default app;
