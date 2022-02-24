const mysql = require('mysql');

const conexion = mysql.createPool({
  connectionLimit: 100,
  host: "localhost",
  user: "root",
  password: "",
  database : 'productos',
  debug: false
});

module.exports = conexion;