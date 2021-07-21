"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var DBConnection_1 = require("./DA/DBConnection");
var DA_1 = require("./DA");
var service_1 = require("./service");
var todo_routes_1 = require("./routes/todo.routes");
var user_routes_1 = require("./routes/user.routes");
var app = express_1.default();
var router = express_1.default.Router();
require("dotenv").config();
app.use(express_1.default.json());
app.use(express_1.default.urlencoded());
app.use(router);
todo_routes_1.TodoRouter(router, new service_1.TodoService(new DA_1.TodoDA()));
user_routes_1.UserRouter(router, new service_1.UserService(new DA_1.UserDA()));
DBConnection_1.mongoConnect(function () {
    app.listen(process.env.PORT, function () {
        console.log("App listening on port " + process.env.PORT);
    });
});
