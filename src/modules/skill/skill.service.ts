import { Prisma } from "@prisma/client";
import { prisma } from "../../config/db";

const createSkill = async (skillDate: Prisma.SkillCreateInput) => {
  return await prisma.skill.create({
    data: skillDate,
  });
};

const getSkills = async () => {
  return await prisma.skill.findMany();
};

const getSingleSkill = async (id: number) => {
  return await prisma.skill.findUnique({
    where: { id },
  });
};

const updateSkill = async (id: number, skillData: Prisma.SkillUpdateInput) => {
  return await prisma.skill.update({
    where: { id },
    data: skillData,
  });
};

const deleteSkill = async (id: number) => {
  return await prisma.skill.delete({
    where: { id },
  });
};

export const SkillService = {
  createSkill,
  getSkills,
  getSingleSkill,
  updateSkill,
  deleteSkill,
};
