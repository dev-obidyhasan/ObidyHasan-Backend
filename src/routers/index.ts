import { Router } from "express";
import { AuthRoute } from "../modules/Auth/auth.route";
import { UserRoute } from "../modules/User/user.route";
import { ProjectRoute } from "../modules/project/project.route";
import { BlogRoutes } from "../modules/blog/blog.route";

export const router = Router();

const moduleRoutes = [
  {
    path: "/auth",
    router: AuthRoute,
  },
  {
    path: "/user",
    router: UserRoute,
  },
  {
    path: "/project",
    router: ProjectRoute,
  },
  {
    path: "/blog",
    router: BlogRoutes,
  },
];

moduleRoutes.forEach((route) => {
  router.use(route.path, route.router);
});
