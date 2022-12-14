import express from "express";
import { User } from "../../model/types/User.js";
import { insertOneUser} from "../../model/services/userServices.js";

function insertUser(req: express.Request, res: express.Response){
    const newUser: User = req.body;
    insertOneUser(newUser, (err: Error, userId: number)=>{
      if(err){
        res.status(500).json({"message": err.message});
      } else {
        
       //res.status(200).json({"userId": userId});
       res.redirect('http://localhost:3000/indexAdmin.html');
       
      }
      
    });
};


export {insertUser};