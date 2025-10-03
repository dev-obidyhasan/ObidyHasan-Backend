import { Request, Response } from "express";
import { UserService } from "./user.service";

const getUser = async (req: Request, res: Response) => {
  try {
    const result = await UserService.getUser(req?.query?.email as string);
    res.status(200).send(result);
  } catch (error) {
    res.status(500).send(error);
  }
};

export const UserController = {
  getUser,
};
