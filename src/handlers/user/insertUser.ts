import express from "express";
import { User } from "../../model/types/User.js";
import { insertOneUser} from "../../model/services/userServices.js";

function insertUser(req: express.Request, res: express.Response){
    const newUser: User = req.body;
    insertOneUser(newUser, (err: Error, userId: number)=>{
      if(err){
       return res.status(500).json({"message": err.message});
      }
       return res.redirect('http://localhost:3000/indexAdmin.html')
      
      
    });
};


export {insertUser};