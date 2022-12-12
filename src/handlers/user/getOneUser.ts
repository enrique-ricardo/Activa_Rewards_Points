import {db} from "../../config.js";
import express from 'express';
import { findOneUser } from "../../model/services/userServices.js";
import { User } from "../../model/types/User.js";


function getOneUser(req: express.Request, res: express.Response){
    const user_email = req.params.user_email;
    findOneUser(user_email, (err: Error, result: User)=>{
        if(err){
            res.status(404).json(err);
        }
        res.status(200).json(result);
    
    })
}



export {getOneUser};