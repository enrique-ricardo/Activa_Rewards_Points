import express from "express";
import {createStudent} from "../../model/services/studentServices.js";
import {Student} from "../../model/types/student.js";
import jsonwebtoken from 'jsonwebtoken';
import { jwtToken } from '../../model/types/jwtToken'

async function insertStudent(req: express.Request, res: express.Response){
    const newStudent: Student = req.body;
    
    let userData:jwtToken;
    if(req.session.token == undefined) {
      return res.status(401).json("Ningun usuario encontrado!!!")
    } else {
      const tokenVerified = await jsonwebtoken.verify(req.session.token, process.env.SESSION_SECRET!)
      userData = <jwtToken>tokenVerified
    }
    
    createStudent(newStudent, userData, (err: Error, studentId: number) => {
      if (err) {
        return res.status(500).json({"message": err.message});
      }
  
      res.status(200).json({"orderId": studentId});
    });
};

export {insertStudent};