import express from 'express';
import {router} from './routes/router.js';
import path from 'path';
import * as dotenv from 'dotenv';
const methodOverride = require('method-override');//to-do with import
const  session = require('express-session'); //to-do with import
import MySQLSessionStore from 'express-mysql-session';

dotenv.config({ path: path.join(__dirname, "..", ".env") });

const optionsStore = {
  connectionLimit: 10,
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PWD,
  database: process.env.DB_NAME,
  createDatabaseTable: true,
  schema: {
    tableName: 'sessiontbl',
    columnNames: {
      session_id: 'session_id',
      expires: 'expires',
      data: 'data',
    } 
  }
}

const sqlStore = new (MySQLSessionStore as any)(session);

const  sessionStore = new sqlStore(optionsStore);

const app = express();


app.set("view engine", "ejs");

app.use(session({
    name: "probando_sesiones",
    resave: false,
    saveUninitialized: false,
    store: sessionStore,
    secret: process.env.SESSION_SECRET,
    cookie: {
        maxAge: 24*60*60*1000,
        sameSite: true
    }
}))

const path_static_files = path.join(__dirname, "..", "public");
app.use(express.static(path_static_files));
app.use(express.urlencoded({extended:false}));
app.use(methodOverride((req: express.Request, res: express.Response)=>{
    if (req.body && typeof req.body === 'object' && "_method" in req.body){
        const method = req.body._method;
        delete req.body._method;
        return method;
    }
}));

app.use("/", router);
app.listen(process.env.PORT, ()=>{
    console.log(`Escuchando en el puerto ${process.env.PORT}`);
})
