import { Schema, model } from "mongoose";

import { ITodo } from "../types/types";

const TodoSchema = new Schema<ITodo>({
  title: {
    type: String,
    required: true
  },
  content: {
    type: String,
    required: true
  },

  user: {
    type: Schema.Types.ObjectId,
    ref: "User"
  }
});

export const TodoModel = model<ITodo>("Todo", TodoSchema);
