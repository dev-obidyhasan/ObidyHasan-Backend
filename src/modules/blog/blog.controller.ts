import { Request, Response } from "express";
import { catchAsync } from "../../utils/catchAsync";
import { BlogService } from "./blog.service";
import { sendResponse } from "../../utils/sendResponse";

const createBlog = catchAsync(async (req: Request, res: Response) => {
  const blog = await BlogService.createBlog(req.body);
  sendResponse(res, {
    statusCode: 201,
    success: true,
    message: "Blog created successfully",
    data: blog,
  });
});

const getAllBlogs = catchAsync(async (req: Request, res: Response) => {
  const blogs = await BlogService.getAllBlogs();
  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: "Blogs retrieved successfully",
    data: blogs,
  });
});

const getBlogById = catchAsync(async (req: Request, res: Response) => {
  const id = Number(req.params.id);
  const blog = await BlogService.getBlogById(id);
  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: "Blog retrieved successfully",
    data: blog,
  });
});

const updateBlog = catchAsync(async (req: Request, res: Response) => {
  const id = Number(req.params.id);
  const blog = await BlogService.updateBlog(id, req.body);
  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: "Blog updated successfully",
    data: blog,
  });
});

const deleteBlog = catchAsync(async (req: Request, res: Response) => {
  const id = Number(req.params.id);
  await BlogService.deleteBlog(id);
  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: "Blog deleted successfully",
    data: null,
  });
});

export const BlogController = {
  createBlog,
  getAllBlogs,
  getBlogById,
  updateBlog,
  deleteBlog,
};
