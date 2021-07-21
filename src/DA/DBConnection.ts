import { Db, MongoClient } from "mongodb";

require("dotenv").config();

let _db: Db;

export const mongoConnect = (cb: any) => {
  MongoClient.connect(
    `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@dedatabase.rlva5.mongodb.net/testTypescriptDB?retryWrites=true&w=majority`
  )
    .then((client) => {
      _db = client.db();
      console.log("successfuly connected to the database");
      cb();
    })
    .catch((err) => {
      console.log(err);
    });
};

export const getDB = () => {
  if (_db) {
    return _db;
  }
};
