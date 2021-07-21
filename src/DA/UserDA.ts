import { IUser } from "../types/types";
import { DBManager } from "./DBManager";

export class UserDA extends DBManager {
  public async createUser(user: IUser) {
    try {
      const data = await this.createNewUser(user);
      return data;
    } catch (error) {
      throw error;
    }
  }

  public async getUsers() {
    try {
      const data = await this.fetchAllUser();
      return data;
    } catch (error) {
      throw error;
    }
  }
}
