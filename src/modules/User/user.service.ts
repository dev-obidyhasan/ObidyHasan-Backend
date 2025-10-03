import { prisma } from "../../config/db";

const getSingleUser = async (email: string) => {
  return await prisma.profile.findUnique({
    where: { email: email },
  });
};

export const UserService = {
  getSingleUser,
};
