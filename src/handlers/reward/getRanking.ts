import { findRankingMaxFive } from "../../model/services/rewardServices";
import express from 'express';


export async function getRankingList(req: express.Request, res: express.Response){
    try {
        const ranking = await findRankingMaxFive();
        console.log({ranking});
        
        res.status(200).render("pages/ranking",{ranking});
    } catch (error) {
        res.status(404).json({ "message": "not found" });  
    }
}