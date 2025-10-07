import { prisma } from "../../config/db";

const getSingleUser = async (email: string) => {
  return await prisma.profile.findUnique({
    where: { email: email },
  });
};

const updateUser = async (email: string, data: any) => {
  return await prisma.profile.update({
    where: { email: email },
    data: data,
  });
};

export const UserService = {
  getSingleUser,
  updateUser,
};
