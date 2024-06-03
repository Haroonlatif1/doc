import mysql from 'mysql2/promise';
import dotenv from 'dotenv';

dotenv.config(); // Load environment variables from .env file


const pool = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "hellohello",
  database:"docdb",
});

export default pool;
