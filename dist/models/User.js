"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserModel = void 0;
var mongoose_1 = require("mongoose");
var UserSchema = new mongoose_1.Schema({
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
exports.UserModel = mongoose_1.model("User", UserSchema);
