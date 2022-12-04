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
exports.insertOneUser = exports.findOneUser = void 0;
const config_1 = require("../../config");
const bcrypt_1 = __importDefault(require("bcrypt"));
function findOneUser(user_email, callback) {
    const queryString = "SELECT id, email, password, role FROM user WHERE email = ?";
    config_1.db.query(queryString, [user_email], (err, result) => {
        if (err) {
            callback(err, null);
        }
        ;
        const userFound = result[0];
        callback(null, userFound);
    });
}
exports.findOneUser = findOneUser;
;
function insertOneUser(user, callback) {
    return __awaiter(this, void 0, void 0, function* () {
        const queryString = "INSERT INTO user(email, password, role, createdAt) VALUES(?, ?, ?, NOW())";
        const hashPassword = yield bcrypt_1.default.hash(user.password, 10);
        config_1.db.query(queryString, [user.email, hashPassword, user.role], (err, result) => {
            if (err) {
                callback(err, null);
            }
            const userId = result.insertId;
            callback(null, userId);
        });
    });
}
exports.insertOneUser = insertOneUser;
