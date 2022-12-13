"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.postOneReward = void 0;
const rewardServices_js_1 = require("../../model/services/rewardServices.js");
<<<<<<< HEAD
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const axios_1 = __importDefault(require("axios"));
const insertReward = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const newReward = req.body;
    if (req.session.token != undefined) {
        const tokenVerified = yield jsonwebtoken_1.default.verify(req.session.token, process.env.SESSION_SECRET);
        const myTokenVerified = tokenVerified;
        const rewardUserId = String(myTokenVerified.id);
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
=======
{
    const newReward = { id_user_sender: Number(req.params.id_user),
        id_user_rewarded: req.body.id_user_rewarded,
        xp_points: req.body.xp_points,
        date: req.body.date,
        description: req.body.description };
    (0, rewardServices_js_1.insertOneReward)(newReward, (err, rewardId) => {
        if (err) {
            res.status(500).json({ "message": err.message });
        }
        else {
            res.status(200).json({ "rewardId": rewardId });
        }
    });
}
>>>>>>> cbeb04c0b51af89ca7daa94af1c73e3da12a09ef
