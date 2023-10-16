import {createPool} from 'mysql2/promise';
export const pool = createPool({
  connectionLimit: 100,
  host: "localhost",
  user: "root",
  password: "",
  database : 'productos',
  debug: false
});
