import { Router } from "express";
import { UserController } from "./user.controller";
import { checkAuth } from "../../middlewares/checkAuth";
import { Role } from "@prisma/client";

const router = Router();
router.get("/", UserController.getSingleUser);
router.patch("/:id", checkAuth(Role.ADMIN), UserController.updateUser);
export const UserRoute = router;
