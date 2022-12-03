"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.insertUser = void 0;
const userServices_js_1 = require("../../model/services/userServices.js");
function insertUser(req, res) {
    const newUser = req.body;
    (0, userServices_js_1.insertOneUser)(newUser, (err, userId) => {
        if (err) {
            res.status(500).json({ "message": err.message });
        }
        else {
            res.status(200).json({ "userId": userId });
        }
    });
}
exports.insertUser = insertUser;
;
