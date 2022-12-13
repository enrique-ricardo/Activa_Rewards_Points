import express, { NextFunction }  from "express";
import {insertOneReward} from "../../model/services/rewardServices.js";
import {Reward} from "../../model/types/Reward.js";



async function postOneReward(req: express.Request, res: express.Response, next:NextFunction){
 
    const newReward: Reward = { id_user_sender: Number(req.params.id_user),
                                id_user_rewarded: Number(req.body.id_user_rewarded),
                                xp_points: Number(req.body.xp_points),
                                description: req.body.description };
                                
    insertOneReward(newReward, (err: Error, rewardId: number)=>{
        if(err){
            return res.status(500).json({"message": err.message})
        };

          res.locals.rewardedPosted = "yes";
          next();
            
        
        
        });
}

export {postOneReward};


