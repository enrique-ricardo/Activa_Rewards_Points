"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.postOneReward = void 0;
const rewardServices_js_1 = require("../../model/services/rewardServices.js");
function postOneReward(req, res, next) {
    return __awaiter(this, void 0, void 0, function* () {
        console.log("en postOneReward");
        //console.log("valores en req.body",req.body)
        const newReward = { id_user_sender: Number(req.params.id_user),
            id_user_rewarded: Number(req.body.id_user_rewarded),
            xp_points: Number(req.body.xp_points),
            description: req.body.description };
        (0, rewardServices_js_1.insertOneReward)(newReward, (err, rewardId) => {
            if (err) {
                return res.status(500).json({ "message": err.message });
            }
            ;
            res.locals.rewardedPosted = "yes";
            next();
            //res.status(200).json({"rewardId": rewardId});
        });
    });
}
exports.postOneReward = postOneReward;
