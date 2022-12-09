import express from "express";
import {insertNewReward} from "../../model/services/rewardServices.js";
import {Reward} from "../../model/types/reward.js";

const insertReward = (req: express.Request, res: express.Response) => {
  const newReward: Reward = req.body
  insertNewReward(newReward, newReward.id_user_sender, newReward.id_user_reward, newReward.xp_points, newReward.description, (err: Error, rewardId: number) => {
    if (err) {
      return res.status(500).json({"message": err.message});
    } 
    res.status(200).json({"message": "Reward enviado correctamente!"});  
    //return res.render("pages/index");
   });
} 

export { insertReward }