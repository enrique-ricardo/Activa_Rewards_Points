import express from "express";
import {createStudent} from "../model/services/studentServices.js";
import {Student} from "../model/types/student.js";
import { jwtToken } from "../model/types/jwtToken.js";
import jsonwebtoken from 'jsonwebtoken';


const getSessionToken = async (req: express.Request, res: express.Response) => {
  if(req.session.token !== undefined) {
     
    const tokenVerified = await <jwtToken>jsonwebtoken.verify(req.session.token, process.env.SESSION_SECRET!);
    const myTokenVerified: jwtToken = <jwtToken>tokenVerified;
    return myTokenVerified.id
  }
  return 
}


export { getSessionToken }