import { Router } from "express";
import { checkAuth } from "../../middlewares/checkAuth";
import { BlogController } from "./blog.controller";
import { Role } from "@prisma/client";

const router = Router();

router.get("/", BlogController.getAllBlogs);
router.post("/", checkAuth(Role.ADMIN), BlogController.createBlog);
router.get("/:id", BlogController.getBlogById);
router.patch("/:id", checkAuth(Role.ADMIN), BlogController.updateBlog);
router.delete("/:id", checkAuth(Role.ADMIN), BlogController.deleteBlog);

export const BlogRoutes = router;
