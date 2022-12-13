import express, { NextFunction } from 'express';
import jsonwebtoken from 'jsonwebtoken';
import dotenv from 'dotenv';


function validateToken(req: express.Request, res: express.Response, next:NextFunction) {
    //console.log("estamos en validateToken")
    if(req.session.token != undefined ){
        const tokenVerified = jsonwebtoken.verify(req.session.token, process.env.SESSION_SECRET!)
        if (tokenVerified) {
           // console.log("el token está verificado vamos al next()")
            next();
           // console.log("despues del next")
        }
    } else {
        res.status(401).json({"message": "No estás autenticado"});
    }
}

export {validateToken};