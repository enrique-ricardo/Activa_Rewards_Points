import express from 'express';
import { Student } from '../../model/types/student.js';
import {getActivaPointsReward} from '../../model/services/studentServices.js';
import { jwtToken } from "../../model/types/jwtToken.js";
import jsonwebtoken from 'jsonwebtoken';

async function getActivaReward(req: express.Request, res: express.Response){
  const studentId = req.params.id_student;
  if (req.session.token != undefined){ 
    const tokenVerified = await jsonwebtoken.verify(req.session.token, process.env.SESSION_SECRET!);
    const myTokenVerified: jwtToken = <jwtToken>tokenVerified;
    const id_user = `${myTokenVerified.id}`

  getActivaPointsReward(id_user, (err: Error, result:Student)=>{
      if(err){
          res.status(404).json({"message": err.message});
      }
      res.status(200).json(result);
  })
  }
}

export {getActivaReward};