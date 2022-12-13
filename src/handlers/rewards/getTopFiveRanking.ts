import { Reward } from "../../model/types/Reward.js";
import {getRankingList} from "../../model/services/rewardServices";
import express from 'express';


async function getTopFiveRanking(req: express.Request, res: express.Response){
    const id_user = req.params.id_user;
    getRankingList((err:Error, reward:Reward[])=>{
      console.log("entra en el getRankingList" + res.status(200).json(reward))
        if(err){
            return res.status(404).json({"message": err.message});
        }
        return res.status(200).json(reward);
    })
}

export {getTopFiveRanking};