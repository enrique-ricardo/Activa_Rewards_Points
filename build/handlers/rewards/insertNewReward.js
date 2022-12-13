"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.postOneReward = void 0;
const rewardServices_js_1 = require("../../model/services/rewardServices.js");
{
    const newReward = { id_user_sender: Number(req.params.id_user),
        id_user_rewarded: req.body.id_user_rewarded,
        xp_points: req.body.xp_points,
        date: req.body.date,
        description: req.body.description };
    (0, rewardServices_js_1.insertOneReward)(newReward, (err, rewardId) => {
        if (err) {
            res.status(500).json({ "message": err.message });
        }
        else {
            res.status(200).json({ "rewardId": rewardId });
        }
    });
}
