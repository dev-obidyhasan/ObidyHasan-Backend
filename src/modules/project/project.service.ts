import { Prisma } from "@prisma/client";
import { prisma } from "../../config/db";

const createProject = async (projectData: Prisma.ProjectCreateInput) => {
  return await prisma.project.create({
    data: projectData,
  });
};

const getAllProjects = async () => {
  return await prisma.project.findMany();
};

const getSingleProject = async (projectId: number) => {
  return await prisma.$transaction(async (tx) => {
    await tx.project.update({
      where: { id: projectId },
      data: {
        viewCount: {
          increment: 1,
        },
      },
    });

    return await tx.project.findUnique({
      where: { id: projectId },
    });
  });
};

const updateProject = async (
  projectId: number,
  projectData: Prisma.ProjectUpdateInput
) => {
  return await prisma.project.update({
    where: { id: projectId },
    data: projectData,
  });
};

const deleteProject = async (projectId: number) => {
  return await prisma.project.delete({
    where: { id: projectId },
  });
};

export const ProjectService = {
  createProject,
  getAllProjects,
  getSingleProject,
  updateProject,
  deleteProject,
};
