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
exports.isFirstLogin = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
function isFirstLogin(req, res, next) {
    return __awaiter(this, void 0, void 0, function* () {
        if (req.session.token != undefined) {
            const tokenVerified = yield jsonwebtoken_1.default.verify(req.session.token, process.env.SESSION_SECRET);
            const myTokenVerified = tokenVerified;
            if (myTokenVerified.role == "admin") {
                next();
            }
            else {
                res.status(401).json({ "message": "Not Authorized" });
            }
        }
    });
}
exports.isFirstLogin = isFirstLogin;
