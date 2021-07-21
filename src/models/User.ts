import { Schema, model } from "mongoose";

import { IUser } from "../types/types";

const UserSchema = new Schema<IUser>({
  firtsname: {
    type: String,
    required: true
  },
  lastname: {
    type: String,
    required: true
  },
  username: {
    type: String,
    required: true
  },
  // todos: [
  //   {
  //     type: Schema.Types.ObjectId,
  //     ref: "todo"
  //   }
  // ]
});

export const UserModel = model<IUser>("User", UserSchema);
