import { prisma } from "../../config/db";

const getSingleUser = async (email: string) => {
  return await prisma.profile.findUnique({
    where: { email: email },
  });
};

const updateUser = async (id: number, data: any) => {
  return await prisma.profile.update({
    where: { id },
    data: data,
  });
};

export const UserService = {
  getSingleUser,
  updateUser,
};
