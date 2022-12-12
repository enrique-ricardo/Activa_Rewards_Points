import express from "express";
import {createStudent} from "../../model/services/studentServices.js";
import {Student} from "../../model/types/student.js";
import { jwtToken } from "../../model/types/jwtToken.js";
import jsonwebtoken from 'jsonwebtoken';

async function insertStudent(req: express.Request, res: express.Response){
    
  const newStudent: Student = req.body;
  if (req.session.token != undefined){ 
    const tokenVerified = await jsonwebtoken.verify(req.session.token, process.env.SESSION_SECRET!);
    const myTokenVerified: jwtToken = <jwtToken>tokenVerified;
    const idUser = myTokenVerified.id;
    const emailUser = myTokenVerified.email;
    createStudent(newStudent, idUser, emailUser, (err: Error, studentId: number) => {
      if (err) {
        res.status(500).json({"message": err.message});
      } else {
       
        res.render("pages/index");
      }
     });
  } else {
    res.status(401).json({"message": "Es obligatorio autenticarse antes de realizar esta operación"});
  }
};

export {insertStudent};