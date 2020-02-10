const mysql = require("mysql");

module.exports = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "Purwadhikamsig1",
  database: "ujian_backend",
  port: "3306"
});
