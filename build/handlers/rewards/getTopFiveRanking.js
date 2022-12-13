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
exports.getTopFiveRanking = void 0;
const rewardServices_1 = require("../../model/services/rewardServices");
function getTopFiveRanking(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const id_user = req.params.id_user;
        (0, rewardServices_1.getRankingList)((err, reward) => {
            console.log("entra en el getRankingList" + res.status(200).json(reward));
            if (err) {
                return res.status(404).json({ "message": err.message });
            }
            return res.status(200).json(reward);
        });
    });
}
exports.getTopFiveRanking = getTopFiveRanking;
