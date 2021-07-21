import express from "express";

import { mongoConnect } from "./DA/DBConnection";

import { TodoDA, UserDA } from "./DA";

import { TodoService, UserService } from "./service";

import { TodoRouter } from "./routes/todo.routes";

import { UserRouter } from "./routes/user.routes";

const app = express();

const router = express.Router();

require("dotenv").config();

app.use(express.json());
app.use(express.urlencoded());

app.use(router);

TodoRouter(router, new TodoService(new TodoDA()));

UserRouter(router, new UserService(new UserDA()));

mongoConnect(() => {
  app.listen(process.env.PORT, () => {
    console.log(`App listening on port ${process.env.PORT}`);
  });
});
