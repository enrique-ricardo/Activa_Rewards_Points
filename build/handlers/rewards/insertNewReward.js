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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.insertReward = void 0;
const rewardServices_js_1 = require("../../model/services/rewardServices.js");
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const axios_1 = __importDefault(require("axios"));
const insertReward = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const newReward = req.body;
    if (req.session.token != undefined) {
        const tokenVerified = yield jsonwebtoken_1.default.verify(req.session.token, process.env.SESSION_SECRET);
        const myTokenVerified = tokenVerified;
        const rewardUserId = `${myTokenVerified.id}`;
        const rewardStudent = yield (0, axios_1.default)(`http://localhost:3000/students/getStudent/${rewardUserId}`);
        (0, rewardServices_js_1.createNewReward)(newReward, newReward.id_user_sender, newReward.id_user_rewarded, newReward.xp_points, newReward.description, (err, rewardStudentId) => {
            if (err) {
                return res.status(500).json({ "message": err.message });
            }
            else {
                res.render("pages/index", { student: rewardStudent.data.student });
            }
            //  res.status(200).json({"message": "Reward enviado correctamente!"});  
        });
    }
});
exports.insertReward = insertReward;
