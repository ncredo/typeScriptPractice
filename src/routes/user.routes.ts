import { NextFunction, Request, Response, Router } from "express";
import { UserService } from "../service/user.service";

export const UserRouter = (router: Router, service: UserService) => {
  router.post(
    "/user",
    async (req: Request, res: Response, next: NextFunction) => {
      const { firstname, lastname, username, email } = req.body;
      try {
        const user = await service.createUser({
          firstname,
          lastname,
          username,
          email
        });
        return res.status(201).json(user);
      } catch (error) {
        throw error;
      }
    }
  );

  router.get(
    "/users",
    async (req: Request, res: Response, next: NextFunction) => {
      try {
        const data = await service.getUsers();
        return res.status(200).json(data);
      } catch (error) {
        throw error;
      }
    }
  );
};
