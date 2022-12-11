"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.insertReward = void 0;
const rewardServices_js_1 = require("../../model/services/rewardServices.js");
const insertReward = (req, res) => {
    const newReward = req.body;
    (0, rewardServices_js_1.insertNewReward)(newReward, newReward.id_user_sender, newReward.id_user_reward, newReward.xp_points, newReward.description, (err, rewardId) => {
        if (err) {
            return res.status(500).json({ "message": err.message });
        }
        res.status(200).json({ "message": "Reward enviado correctamente!" });
        //return res.render("pages/index");
    });
};
exports.insertReward = insertReward;
