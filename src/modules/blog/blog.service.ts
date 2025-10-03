import { Prisma } from "@prisma/client";
import { prisma } from "../../config/db";

const createBlog = async (blogContent: Prisma.BlogCreateInput) => {
  return await prisma.blog.create({
    data: blogContent,
  });
};

const getAllBlogs = async () => {
  return await prisma.blog.findMany();
};

const getBlogById = async (id: number) => {
  return await prisma.blog.findUnique({
    where: { id },
  });
};

const updateBlog = async (id: number, blogContent: Prisma.BlogUpdateInput) => {
  return await prisma.blog.update({
    where: { id },
    data: blogContent,
  });
};

const deleteBlog = async (id: number) => {
  return await prisma.blog.delete({
    where: { id },
  });
};

export const BlogService = {
  createBlog,
  getAllBlogs,
  getBlogById,
  updateBlog,
  deleteBlog,
};
