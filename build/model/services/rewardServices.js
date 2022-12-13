"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getRankingList = exports.getListReceivedRewards = exports.getStudentSendedRewards = exports.getListSendedRewards = exports.getStudentReceivedRewards = exports.insertOneReward = void 0;
const config_js_1 = require("../../config.js");
function insertOneReward(reward, callback) {
    const queryString = "INSERT INTO reward(id_user_sender, id_user_rewarded, xp_points, date, description) VALUES (?,?,?, NOW(), ?)";
    config_js_1.db.query(queryString, [reward.id_user_sender, reward.id_user_rewarded, reward.xp_points, reward.description], (err, result) => {
        console.log("err:", err);
        if (err) {
            callback(err, null);
        }
        console.log("result", result);
        console.log("<OkPacket> result", result);
        const insertId = result.insertId;
        callback(null, insertId);
    });
}
exports.insertOneReward = insertOneReward;
//works
const getStudentReceivedRewards = (id_user_reward, callback) => {
    const queryString = `SELECT sum(xp_points) FROM reward WHERE id_user_rewarded = ?`;
    config_js_1.db.query(queryString, [id_user_reward], (err, result) => {
        if (err) {
            callback(err, null);
        }
        ;
        const rewardsFund = result[0];
        callback(null, rewardsFund);
    });
};
exports.getStudentReceivedRewards = getStudentReceivedRewards;
//works
const getStudentSendedRewards = (id_user_sender, callback) => {
    const queryString = `SELECT sum(xp_points) FROM reward WHERE id_user_sender = ?`;
    config_js_1.db.query(queryString, [id_user_sender], (err, result) => {
        if (err) {
            callback(err, null);
        }
        ;
        const rewardsFund = result[0];
        callback(null, rewardsFund);
    });
};
exports.getStudentSendedRewards = getStudentSendedRewards;
//works
const getListReceivedRewards = (id_user_reward, callback) => {
    const queryString = `select student.name, reward.description, reward.xp_points, reward.date, reward.id_user_sender 
                      from reward 
                      join student on reward.id_user_rewarded = ? 
                      group by reward.id 
                      order by reward.date desc 
                      limit 0,5`;
    config_js_1.db.query(queryString, [id_user_reward], (err, result) => {
        if (err) {
            callback(err, null);
        }
        ;
        const rewardsFund = result[0];
        callback(null, rewardsFund);
    });
};
exports.getListReceivedRewards = getListReceivedRewards;
//works
const getListSendedRewards = (id_user_sender, callback) => {
    const queryString = `select student.name, reward.description, reward.xp_points, reward.date, reward.id_user_rewarded 
                      from reward inner join student on reward.id_user_sender = ? group by reward.id order by reward.date desc limit 0,5`;
    config_js_1.db.query(queryString, [id_user_sender], (err, result) => {
        if (err) {
            callback(err, null);
        }
        ;
        const rewardsFund = result[0];
        callback(null, rewardsFund);
    });
};
exports.getListSendedRewards = getListSendedRewards;
//works
const getRankingList = (callback) => {
    const queryString = `select student.name, sum(reward.xp_points) points 
                      from reward inner join student on reward.id_user_rewarded = student.id_user 
                      group by student.id_user order by points desc limit 0,5`;
    config_js_1.db.query(queryString, (err, result) => {
        if (err) {
            callback(err, null);
        }
        ;
        const rankingList = result[0];
        callback(null, rankingList);
    });
};
exports.getRankingList = getRankingList;
