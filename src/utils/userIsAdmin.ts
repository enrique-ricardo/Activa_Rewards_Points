import express, { NextFunction } from 'express';
import jsonwebtoken from 'jsonwebtoken';
import dotenv from 'dotenv';
import {jwtToken} from '../model/types/jwtToken.js';

async function userIsAdmin( req: express.Request, res: express.Response, next: NextFunction){
    if (req.session.token != undefined){ 
        const tokenVerified = await jsonwebtoken.verify(req.session.token, process.env.SESSION_SECRET!);
        const myTokenVerified: jwtToken = <jwtToken>tokenVerified;
        if( myTokenVerified.role == "admin"){
                next();
         } else {
            res.status(401).json({"message":"Not Authorized"});
        }
    }
}

export {userIsAdmin};