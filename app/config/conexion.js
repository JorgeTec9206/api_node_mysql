const mysql = require('mysql');

const conexion = mysql.createPool({
  connectionLimit: 100,
  host: "153.92.215.15",
  user: "kaanmktc_bicilopez",
  password: "8tx$]zEStLn8",
  database : 'kaanmktc_inventariobicilopez',
  debug: false
});

module.exports = conexion;