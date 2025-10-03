import { Router } from "express";
import { UserController } from "./user.controller";
import { checkAuth } from "../../middlewares/checkAuth";
import { Role } from "@prisma/client";

const router = Router();
router.get("/", checkAuth(Role.ADMIN), UserController.getSingleUser);

export const UserRoute = router;
