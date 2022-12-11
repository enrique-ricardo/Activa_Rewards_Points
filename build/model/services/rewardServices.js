"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getListReceivedRewards = exports.getStudentSendedRewards = exports.getListSendedRewards = exports.getStudentReceivedRewards = exports.insertNewReward = void 0;
const config_js_1 = require("../../config.js");
const insertNewReward = (reward, id_user_sender, id_user_reward, xp_points, description, callback) => {
    const queryString = `INSERT INTO reward (id_user_sender, id_user_reward, xp_points, NOW(), description) VALUES (?, ?, ?, ?, ?)`;
    config_js_1.db.query(queryString, [reward.id_user_sender, reward.id_user_reward, reward.xp_points, reward.description], (err, result) => {
        console.log(err);
        if (err) {
            callback(err, null);
        }
        ;
        console.log(result);
        const insertId = result.insertId;
        callback(null, insertId);
    });
};
exports.insertNewReward = insertNewReward;
const getStudentReceivedRewards = (id_user_reward, callback) => {
    const queryString = `SELECT sum(xp_points) FROM reward WHERE id_user_reward = ?`;
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
const getListReceivedRewards = (id_user_reward, callback) => {
    const queryString = `SELECT (id_user_sender, id_user_reward, xp_points, date, description) FROM reward WHERE id_user_reward = ?`;
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
const getListSendedRewards = (id_user_sender, callback) => {
    const queryString = `SELECT (id_user_sender, id_user_reward, xp_points, date, description) FROM reward WHERE id_user_reward = ?`;
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
