import { getDB } from "./DBConnection";

import { ITodoDBManager, IUserDBManager, ITodo, IUser } from "../types/types";

import { ObjectId } from "mongodb";

export class DBManager implements ITodoDBManager, IUserDBManager {
  /** User DB manager implementation */
  /** This method creates a new user in the database */
  public async createNewUser(user: IUser): Promise<any> {
    const db = getDB();
    try {
      const result = await db?.collection("users").insertOne(user);
      return result;
    } catch (error) {
      throw error;
    }
  }
  public async fetchAllUser(): Promise<any> {
    const db = getDB();
    try {
      const result = await db?.collection("users").find().toArray();
      return result;
    } catch (error) {
      throw error;
    }
  }
  fetchUser(id: string): Promise<any> {
    throw new Error("Method not implemented.");
  }
  updateUser(id: string, user: IUser): Promise<any> {
    throw new Error("Method not implemented.");
  }
  deleteUser(id: string): Promise<any> {
    throw new Error("Method not implemented.");
  }

  /** Todo DB manager implentation */
  public async insertTodo(todo: ITodo): Promise<any> {
    const db = getDB();
    try {
      const result = await db?.collection("todos").insertOne(todo);
      return result;
    } catch (error) {
      throw error;
    }
  }
  public async fetchAllTodo(): Promise<any> {
    const db = getDB();
    const todos = await db?.collection("todos").count();
    console.log(`There are ${todos} todos in the database`);
    try {
      const todos = await db?.collection("todos").find().toArray();
      return todos;
    } catch (error) {
      throw error;
    }
  }
  public async fetchTodo(id: string): Promise<any> {
    const db = getDB();
    try {
      const todo = await db
        ?.collection("todos")
        .findOne({ _id: new ObjectId(id) });
      return todo;
    } catch (error) {
      throw error;
    }
  }

  public async updatedTodo(id: string, todo: ITodo): Promise<any> {
    const db = getDB();
    try {
      const result = await db
        ?.collection("todos")
        .updateOne({ _id: new ObjectId(id) }, { $set: todo });

      return result;
    } catch (error) {
      throw error;
    }
  }

  public async deleteData(id: string) {
    const db = getDB();
    try {
      const result = await db
        ?.collection("todos")
        .deleteOne({ _id: new ObjectId(id) });
      return result;
    } catch (error) {
      throw error;
    }
  }
}
