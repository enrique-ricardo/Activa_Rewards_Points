<<<<<<< HEAD
import { User } from "../types/User.js";
import {RowDataPacket} from "mysql2";
import { db } from "../../config";
import { OkPacket } from "mysql2";
import bcrypt from 'bcrypt';

function findOneUser(user_email: string, callback: Function){
 
    const queryString = "SELECT id, email, password, role, isFirstLogin FROM user WHERE email = ?";
    db.query(queryString, [user_email], (err, result)=>{
      if(err){ 
        callback(err, null);
      };
      const userFound: User = (<RowDataPacket>result)[0];
      callback(null, userFound);
    })
  };
 const updateUserIsFirstLogin =async (user_email:string)=>{
  const queryString = "UPDATE user SET isFirstLogin=? WHERE email=?";
  
  db.query(queryString, [false, user_email],
    (err, result)=>{
      if(err) return console.log(err, null);
      console.log(null, "update succesfull");

    })

};
 
  async function insertOneUser(user: User, callback: Function){
    const queryString = "INSERT INTO user(email, password, role, createdAt) VALUES(?, ?, ?, NOW())";
    const hashPassword = await bcrypt.hash(user.password, 10);
    db.query(queryString, [user.email, hashPassword, user.role], (err, result)=>{
      if (err) {
        callback(err, null);
      }
      const userId = (<OkPacket> result).insertId;
      callback(null, userId);
    });
}

export {findOneUser, insertOneUser,updateUserIsFirstLogin};
=======
import { User } from "../types/User.js";
import {RowDataPacket} from "mysql2";
import { db } from "../../config";
import { OkPacket } from "mysql2";
import bcrypt from 'bcrypt';

function findOneUser(user_email: string, callback: Function){
 
    const queryString = "SELECT id, email, password, role, isFirstLogin FROM user WHERE email = ?";
    db.query(queryString, [user_email], (err, result)=>{
      if(err){ 
        callback(err, null);
      };
      const userFound: User = (<RowDataPacket>result)[0];
      callback(null, userFound);
    })
  };
 const updateUserIsFirstLogin =async (user_email:string)=>{
  const queryString = "UPDATE user SET isFirstLogin=? WHERE email=?";

  db.query(queryString, [false, user_email],
    (err, result)=>{
      if(err) return console.log(err, null);
      console.log(null, "update succesfull");

    })

};
 
  async function insertOneUser(user: User, callback: Function){
    const queryString = "INSERT INTO user(email, password, role, createdAt) VALUES(?, ?, ?, NOW())";
    const hashPassword = await bcrypt.hash(user.password, 10);
    db.query(queryString, [user.email, hashPassword, user.role], (err, result)=>{
      if (err) {
        callback(err, null);
      }
      const userId = (<OkPacket> result).insertId;
      callback(null, userId);
    });
}

export {findOneUser, insertOneUser,updateUserIsFirstLogin};
>>>>>>> f8c4147ca2a43ce8e08ba3ce40f26800c3b833aa
