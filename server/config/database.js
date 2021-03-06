const mysql = require("mysql");
const util = require("util");

//This will create multiple connections
const pool = mysql.createPool({
    connectionLimit: 10,
    host: "localhost",
    user: "postgres",
    password: "",
    database: "hacakton",
    port: 5432,
    timeout: 60 * 60 * 1000 * 1000
});

//All the database requests wil be JS promises
pool.query = util.promisify(pool.query);

module.exports = pool;