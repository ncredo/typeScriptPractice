"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getDB = exports.mongoConnect = void 0;
var mongodb_1 = require("mongodb");
require("dotenv").config();
var _db;
var mongoConnect = function (cb) {
    mongodb_1.MongoClient.connect("mongodb+srv://" + process.env.DB_USERNAME + ":" + process.env.DB_PASSWORD + "@dedatabase.rlva5.mongodb.net/testTypescriptDB?retryWrites=true&w=majority")
        .then(function (client) {
        _db = client.db();
        console.log("successfuly connected to the database");
        cb();
    })
        .catch(function (err) {
        console.log(err);
    });
};
exports.mongoConnect = mongoConnect;
var getDB = function () {
    if (_db) {
        return _db;
    }
};
exports.getDB = getDB;
