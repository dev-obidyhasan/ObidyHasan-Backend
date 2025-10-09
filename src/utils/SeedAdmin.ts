import { prisma } from "../config/db";
import bcryptjs from "bcryptjs";

export const SeedAdmin = async () => {
  const isAdminExist = await prisma.profile.findUnique({
    where: { email: process.env.ADMIN_EMAIL },
  });

  if (!isAdminExist) {
    const hashedPassword = await bcryptjs.hash(process.env.ADMIN_PASS!, 10);

    const result = await prisma.profile.create({
      data: {
        name: "",
        email: process.env.ADMIN_EMAIL!,
        password: hashedPassword,
        role: "ADMIN",
        imgUrl: "",
        about: "",
        facebookUrl: "",
        githubUrl: "",
        linkedinUrl: "",
        twitterUrl: "",
        instagramUrl: "",
        phoneNumber: "",
        address: "",
        title: "",
        company: "",
        website: "",
        resumeUrl: "",
      },
    });

    if (result) {
      console.log("✅ Admin user seeded successfully.");
    }
  } else {
    console.log("ℹ️ Admin user already exists. No action taken.");
  }
};
