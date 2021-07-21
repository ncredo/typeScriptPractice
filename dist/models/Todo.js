"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TodoModel = void 0;
var mongoose_1 = require("mongoose");
var TodoSchema = new mongoose_1.Schema({
    title: {
        type: String,
        required: true
    },
    content: {
        type: String,
        required: true
    },
    user: {
        type: mongoose_1.Schema.Types.ObjectId,
        ref: "User"
    }
});
exports.TodoModel = mongoose_1.model("Todo", TodoSchema);
