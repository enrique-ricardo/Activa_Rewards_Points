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
exports.getActivaReward = void 0;
const studentServices_js_1 = require("../../model/services/studentServices.js");
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
function getActivaReward(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const studentId = req.params.id_student;
        if (req.session.token != undefined) {
            const tokenVerified = yield jsonwebtoken_1.default.verify(req.session.token, process.env.SESSION_SECRET);
            const myTokenVerified = tokenVerified;
            const id_user = `${myTokenVerified.id}`;
            (0, studentServices_js_1.getActivaPointsReward)(id_user, (err, result) => {
                if (err) {
                    res.status(404).json({ "message": err.message });
                }
                res.status(200).json(result);
            });
        }
    });
}
exports.getActivaReward = getActivaReward;
