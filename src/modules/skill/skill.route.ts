import { Router } from "express";
import { SkillController } from "./skill.controller";
import { checkAuth } from "../../middlewares/checkAuth";
import { Role } from "@prisma/client";

const router = Router();

router.get("/", SkillController.getSkills);
router.post("/", checkAuth(Role.ADMIN), SkillController.createSkill);
router.get("/:id", SkillController.getSingleSkill);
router.patch("/:id", checkAuth(Role.ADMIN), SkillController.updateSkill);
router.delete("/:id", checkAuth(Role.ADMIN), SkillController.deleteSkill);

export const SkillRoutes = router;
