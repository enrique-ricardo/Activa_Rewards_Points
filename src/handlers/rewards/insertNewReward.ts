import express from "express";
import {createNewReward} from "../../model/services/rewardServices.js";
import {Reward} from "../../model/types/Reward.js";
import { jwtToken } from "../../model/types/jwtToken.js";
import jsonwebtoken from 'jsonwebtoken';
import axios from "axios";

const insertReward = async (req: express.Request, res: express.Response) => {
  const newReward: Reward = req.body;
  if (req.session.token != undefined){
    const tokenVerified = await jsonwebtoken.verify(req.session.token, process.env.SESSION_SECRET!);
    const myTokenVerified: jwtToken = <jwtToken>tokenVerified;
    const rewardUserId = String(myTokenVerified.id);
    
    const rewardStudent = await axios(`http://localhost:3000/students/getStudent/${rewardUserId}`); 
    createNewReward(newReward, newReward.id_user_sender, newReward.id_user_rewarded, newReward.xp_points, newReward.description, (err: Error, rewardStudentId: number) => {
    if (err) {
      return res.status(500).json({"message": err.message});
    } else{
      res.render("pages/index",{student: rewardStudent.data.student});
    }  
    //  res.status(200).json({"message": "Reward enviado correctamente!"});  
  
   });
} 
}
export { insertReward };


