export interface ITodo {
  title: string;
  content: string;
  user: IUser;
}

export interface IUser {
  firstname: string;
  lastname: string;
  username: string;
  email: string;
}

export interface ITodoDBManager {
  insertTodo(todo: ITodo): Promise<any>;

  fetchAllTodo(): Promise<any>;

  fetchTodo(id: string): Promise<any>;

  updatedTodo(id: string, todo: ITodo): Promise<any>;

  deleteData(id: string): Promise<any>;
}

export interface IUserDBManager {
  createNewUser(user: IUser): Promise<any>;

  fetchAllUser(): Promise<any>;

  fetchUser(id: string): Promise<any>;

  updateUser(id: string, user: IUser): Promise<any>;

  deleteUser(id: string): Promise<any>;
}
