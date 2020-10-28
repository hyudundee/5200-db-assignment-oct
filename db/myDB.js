const sqlite3 = require("sqlite3").verbose();
const util = require("util");

function myDB() {
    const myDB = {};
    const getDB = () => new sqlite3.Database("./db/Connection.db");
}