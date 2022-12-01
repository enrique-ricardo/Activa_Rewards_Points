import mysql from "mysql2";
import path from 'path';
import * as dotenv from 'dotenv';

dotenv.config({ path: path.join(__dirname, "..", ".env") });

const connectionData = {
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PWD,
  database: process.env.DB_NAME
}

const db = mysql.createConnection(connectionData);

export {db, connectionData};