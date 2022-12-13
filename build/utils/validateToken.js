"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateToken = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
function validateToken(req, res, next) {
    //console.log("estamos en validateToken")
    if (req.session.token != undefined) {
        const tokenVerified = jsonwebtoken_1.default.verify(req.session.token, process.env.SESSION_SECRET);
        if (tokenVerified) {
            // console.log("el token está verificado vamos al next()")
            next();
            // console.log("despues del next")
        }
    }
    else {
        res.status(401).json({ "message": "No estás autenticado" });
    }
}
exports.validateToken = validateToken;
