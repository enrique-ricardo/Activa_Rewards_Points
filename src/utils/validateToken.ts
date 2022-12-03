import express, { NextFunction } from 'express';
import jsonwebtoken from 'jsonwebtoken';
import dotenv from 'dotenv';


function validateToken(req: express.Request, res: express.Response, next:NextFunction) {
    if(req.session.token != undefined ){
        const tokenVerified = jsonwebtoken.verify(req.session.token, process.env.SESSION_SECRET!)
        if (tokenVerified) {
            next();
        }
    } else {
        res.status(401).json({"message": "No estás autenticado"});
    }
}

export {validateToken};