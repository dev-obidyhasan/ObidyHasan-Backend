import { Request, Response } from "express";
import { catchAsync } from "../../utils/catchAsync";
import { sendResponse } from "../../utils/sendResponse";
import { SkillService } from "./skill.service";

const createSkill = catchAsync(async (req: Request, res: Response) => {
  const result = await SkillService.createSkill(req.body);
  sendResponse(res, {
    statusCode: 201,
    success: true,
    message: "Skill created successfully",
    data: result,
  });
});

const getSkills = catchAsync(async (req: Request, res: Response) => {
  const result = await SkillService.getSkills();
  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: "Skills retrieved successfully",
    data: result,
  });
});

const updateSkill = catchAsync(async (req: Request, res: Response) => {
  const skillId = parseInt(req.params.id, 10);
  const result = await SkillService.updateSkill(skillId, req.body);
  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: "Skill updated successfully",
    data: result,
  });
});

const deleteSkill = catchAsync(async (req: Request, res: Response) => {
  const skillId = parseInt(req.params.id, 10);
  const result = await SkillService.deleteSkill(skillId);
  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: "Skill deleted successfully",
    data: result,
  });
});

export const SkillController = {
  createSkill,
  getSkills,
  updateSkill,
  deleteSkill,
};
