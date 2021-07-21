import { DBManager } from "./DBManager";

import { ITodo } from "../types/types";

export class TodoDA extends DBManager {
  public async createTodo(todo: ITodo) {
    try {
      const data = await this.insertTodo(todo);
      return data;
    } catch (error) {
      throw error;
    }
  }

  public async getTodos() {
    try {
      const data = await this.fetchAllTodo();
      return data;
    } catch (error) {
      throw error;
    }
  }

  public async getTodo(id: string) {
    try {
      const data = await this.fetchTodo(id);
      return data;
    } catch (error) {
      throw error;
    }
  }

  public async updateTodo(id: string, todo: ITodo) {
    try {
      const data = await this.updatedTodo(id, todo);
      return data;
    } catch (error) {
      throw error;
    }
  }

  public async deleteTodo(id: string) {
    try {
      const data = await this.deleteData(id);
      return data;
    } catch (error) {
      throw error;
    }
  }
}
