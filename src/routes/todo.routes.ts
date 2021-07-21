import { TodoService } from "../service";

import { Router, Response, Request, NextFunction } from "express";
import { ObjectId } from "mongodb";
import { ITodo } from "../types/types";

export const TodoRouter = (router: Router, service: TodoService): void => {
  router.post(
    "/todo",
    async (req: Request, res: Response, next: NextFunction) => {
      try {
        const { title, content, user } = req.body;
        const newTodo: ITodo = {
          title,
          content,
          user: new ObjectId(user)
        };
        const data = await service.createTodo(newTodo);
        return res.status(201).json(data);
      } catch (error) {
        res.status(500).send({ error: error });
        throw error;
      }
    }
  );

  router.get(
    "/todos",
    async (req: Request, res: Response, next: NextFunction) => {
      try {
        const data = await service.getTodos();
        return res.status(200).json(data);
      } catch (error) {
        throw error;
      }
    }
  );

  router.get(
    "/todo/:id",
    async (req: Request, res: Response, next: NextFunction) => {
      const id = req.params.id;
      try {
        const data = await service.getTodo(id);
        return res.status(200).json(data);
      } catch (error) {
        throw error;
      }
    }
  );

  router.put(
    "/todo/:id",
    async (req: Request, res: Response, next: NextFunction) => {
      const id = req.params.id;
      const { title, content, user } = req.body;
      const updatedTodo: ITodo = {
        title,
        content,
        user: new ObjectId(user)
      };
      try {
        const data = await service.updateTodo(id, updatedTodo);
        return res.status(204).json(data);
      } catch (error) {
        throw error;
      }
    }
  );

  router.delete(
    "/deleteTodo/:id",
    async (req: Request, res: Response, next: NextFunction) => {
      const id = req.params.id;

      try {
        const data = await service.deleteTodo(id);
        return res.status(200).json(data);
      } catch (error) {
        throw error;
      }
    }
  );
};
