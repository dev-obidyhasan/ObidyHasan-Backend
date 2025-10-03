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
        name: "Obidy Hasan Naim",
        email: process.env.ADMIN_EMAIL!,
        password: hashedPassword,
        role: "ADMIN",
        imgUrl: process.env.ADMIN_IMG_URL || "",
        about: process.env.ADMIN_ABOUT || "",
        facebookUrl: process.env.ADMIN_FACEBOOK_URL || "",
        githubUrl: process.env.ADMIN_GITHUB_URL || "",
        linkedinUrl: process.env.ADMIN_LINKEDIN_URL || "",
        twitterUrl: process.env.ADMIN_TWITTER_URL || "",
        instagramUrl: process.env.ADMIN_INSTAGRAM_URL || "",
        phoneNumber: process.env.ADMIN_PHONE || "",
        address: process.env.ADMIN_ADDRESS || "",
        title: process.env.ADMIN_TITLE || "",
        company: process.env.ADMIN_COMPANY || "",
        website: process.env.ADMIN_WEBSITE || "",
        resumeUrl: process.env.ADMIN_RESUME_URL || "",
      },
    });

    if (result) {
      console.log("✅ Admin user seeded successfully.");
    }
  } else {
    console.log("ℹ️ Admin user already exists. No action taken.");
  }
};
