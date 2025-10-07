import { Router } from "express";
import { ProjectController } from "./project.controller";
import { checkAuth } from "../../middlewares/checkAuth";
import { Role } from "@prisma/client";

const router = Router();

router.get("/", ProjectController.getAllProjects);
router.post("/", checkAuth(Role.ADMIN), ProjectController.createProject);
router.get("/:id", ProjectController.getSingleProject);
router.patch("/:id", checkAuth(Role.ADMIN), ProjectController.updateProject);
router.delete("/:id", checkAuth(Role.ADMIN), ProjectController.deleteProject);

export const ProjectRoute = router;
