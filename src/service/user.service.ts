import { UserDA } from "../DA/UserDA";
import { IUser } from "../types/types";

export class UserService {
  constructor(private userDA: UserDA) {}

  public async createUser(user: IUser) {
    try {
      const data = await this.userDA.createUser(user);
      return data;
    } catch (error) {
      throw error;
    }
  }

  public async getUsers() {
    try {
      const data = await this.userDA.getUsers();
      return data;
    } catch (error) {
      throw error;
    }
  }
}
