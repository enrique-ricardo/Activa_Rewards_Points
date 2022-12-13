"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.insertUser = void 0;
const userServices_js_1 = require("../../model/services/userServices.js");
function insertUser(req, res) {
    const newUser = req.body;
    (0, userServices_js_1.insertOneUser)(newUser, (err, userId) => {
        if (err) {
<<<<<<< HEAD
            return res.status(500).json({ "message": err.message });
=======
            res.status(500).json({ "message": err.message });
        }
        else {
            //res.status(200).json({"userId": userId});
            res.redirect('http://localhost:3000/indexAdmin.html');
>>>>>>> d6e709435d210796f81a3a1dcaaa25578cbe7714
        }
        return res.redirect('http://localhost:3000/indexAdmin.html');
    });
}
exports.insertUser = insertUser;
;
