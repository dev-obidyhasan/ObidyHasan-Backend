import { Router } from "express";
import { AuthRoute } from "../modules/Auth/auth.route";
import { UserRoute } from "../modules/User/user.route";

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
];

moduleRoutes.forEach((route) => {
  router.use(route.path, route.router);
});
