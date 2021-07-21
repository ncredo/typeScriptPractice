
import { TodoDA } from "../DA";

import { ITodo } from "../types/types";

export class TodoService {
  constructor(private todoDA: TodoDA) {}

  public async createTodo(todo: ITodo) {
    try {
      const data = await this.todoDA.createTodo(todo);
      return data;
    } catch (error) {
      throw error;
    }
  }

  public async getTodos() {
    try {
      const data = await this.todoDA.getTodos();
      return data;
    } catch (error) {
      throw error;
    }
  }

  public async getTodo(id: string) {
    try {
      const data = await this.todoDA.getTodo(id);
      return data;
    } catch (error) {
      throw error;
    }
  }

  public async updateTodo(id: string, todo: ITodo) {
    try {
      const data = await this.todoDA.updateTodo(id, todo);
      return data;
    } catch (error) {
      throw error;
    }
  }

  public async deleteTodo(id: string) {
    try {
      const data = this.todoDA.deleteTodo(id);
      return data;
    } catch (error) {
      throw error;
    }
  }
}
