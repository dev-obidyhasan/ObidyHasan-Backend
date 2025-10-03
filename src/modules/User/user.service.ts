import { prisma } from "../../config/db";

const getUser = async (email: string) => {
  return await prisma.profile.findUnique({
    where: { email: email },
  });
};

export const UserService = {
  getUser,
};
