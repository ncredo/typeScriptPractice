"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DBManager = void 0;
var DBConnection_1 = require("./DBConnection");
var mongodb_1 = require("mongodb");
var DBManager = /** @class */ (function () {
    function DBManager() {
    }
    /** User DB manager implementation */
    /** This method creates a new user in the database */
    DBManager.prototype.createNewUser = function (user) {
        return __awaiter(this, void 0, void 0, function () {
            var db, result, error_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        db = DBConnection_1.getDB();
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, (db === null || db === void 0 ? void 0 : db.collection("users").insertOne(user))];
                    case 2:
                        result = _a.sent();
                        return [2 /*return*/, result];
                    case 3:
                        error_1 = _a.sent();
                        throw error_1;
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    DBManager.prototype.fetchAllUser = function () {
        return __awaiter(this, void 0, void 0, function () {
            var db, result, error_2;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        db = DBConnection_1.getDB();
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, (db === null || db === void 0 ? void 0 : db.collection("users").find().toArray())];
                    case 2:
                        result = _a.sent();
                        return [2 /*return*/, result];
                    case 3:
                        error_2 = _a.sent();
                        throw error_2;
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    DBManager.prototype.fetchUser = function (id) {
        throw new Error("Method not implemented.");
    };
    DBManager.prototype.updateUser = function (id, user) {
        throw new Error("Method not implemented.");
    };
    DBManager.prototype.deleteUser = function (id) {
        throw new Error("Method not implemented.");
    };
    /** Todo DB manager implentation */
    DBManager.prototype.insertTodo = function (todo) {
        return __awaiter(this, void 0, void 0, function () {
            var db, result, error_3;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        db = DBConnection_1.getDB();
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, (db === null || db === void 0 ? void 0 : db.collection("todos").insertOne(todo))];
                    case 2:
                        result = _a.sent();
                        return [2 /*return*/, result];
                    case 3:
                        error_3 = _a.sent();
                        throw error_3;
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    DBManager.prototype.fetchAllTodo = function () {
        return __awaiter(this, void 0, void 0, function () {
            var db, todos, error_4;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        db = DBConnection_1.getDB();
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, (db === null || db === void 0 ? void 0 : db.collection("todos").find().toArray())];
                    case 2:
                        todos = _a.sent();
                        return [2 /*return*/, todos];
                    case 3:
                        error_4 = _a.sent();
                        throw error_4;
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    DBManager.prototype.fetchTodo = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            var db, todo, error_5;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        db = DBConnection_1.getDB();
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, (db === null || db === void 0 ? void 0 : db.collection("todos").findOne({ _id: new mongodb_1.ObjectId(id) }))];
                    case 2:
                        todo = _a.sent();
                        return [2 /*return*/, todo];
                    case 3:
                        error_5 = _a.sent();
                        throw error_5;
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    DBManager.prototype.updatedTodo = function (id, todo) {
        return __awaiter(this, void 0, void 0, function () {
            var db, result, error_6;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        db = DBConnection_1.getDB();
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, (db === null || db === void 0 ? void 0 : db.collection("todos").updateOne({ _id: new mongodb_1.ObjectId(id) }, { $set: todo }))];
                    case 2:
                        result = _a.sent();
                        return [2 /*return*/, result];
                    case 3:
                        error_6 = _a.sent();
                        throw error_6;
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    DBManager.prototype.deleteData = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            var db, result, error_7;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        db = DBConnection_1.getDB();
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, (db === null || db === void 0 ? void 0 : db.collection("todos").deleteOne({ _id: new mongodb_1.ObjectId(id) }))];
                    case 2:
                        result = _a.sent();
                        return [2 /*return*/, result];
                    case 3:
                        error_7 = _a.sent();
                        throw error_7;
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    return DBManager;
}());
exports.DBManager = DBManager;
