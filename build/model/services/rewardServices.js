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
exports.findRankingMaxFive = exports.insertOneReward = exports.findRewardsSortedByDate = exports.findRewardsReceivedFromStudent = exports.findRewardsSentFromStudent = void 0;
const promise_1 = __importDefault(require("mysql2/promise"));
const config_1 = require("../../config");
function findRewardsSentFromStudent(IDUser) {
    return __awaiter(this, void 0, void 0, function* () {
        const queryString = "SELECT SUM(xp_points) as points from reward where id_user_sender = ?";
        const connection = yield promise_1.default.createConnection(config_1.connectionData);
        const result = yield connection.execute(queryString, [IDUser]);
        return result[0][0];
    });
}
exports.findRewardsSentFromStudent = findRewardsSentFromStudent;
function findRewardsReceivedFromStudent(IDUser) {
    return __awaiter(this, void 0, void 0, function* () {
        const queryString = "SELECT SUM(xp_points) as points from reward where id_user_rewarded = ?";
        const connection = yield promise_1.default.createConnection(config_1.connectionData);
        const result = yield connection.execute(queryString, [IDUser]);
        return result[0][0];
    });
}
exports.findRewardsReceivedFromStudent = findRewardsReceivedFromStudent;
function findRewardsSortedByDate() {
    return __awaiter(this, void 0, void 0, function* () {
        const querystring = "SELECT student.name, reward.description, reward.xp_points, reward.date, reward.id_user_rewarded FROM reward INNER JOIN student ON reward.id_user_sender = student.id_user ORDER BY reward.date DESC";
        const connection = yield promise_1.default.createConnection(config_1.connectionData);
        const result = yield connection.execute(querystring);
        return result[0];
    });
}
exports.findRewardsSortedByDate = findRewardsSortedByDate;
function insertOneReward(IDUserSender, IDUserRewarded, XPpoints, Date, Description) {
    return __awaiter(this, void 0, void 0, function* () {
        const querystring = "insert into reward (id_user_sender, id_user_rewarded, xp_points, date, description) values (:id_user_sender, :id_user_rewarded, :xp_points, :date, :description);";
        const connection = yield promise_1.default.createConnection(config_1.connectionData);
        const result = yield connection.execute(querystring);
        return result;
    });
}
exports.insertOneReward = insertOneReward;
function findRankingMaxFive() {
    return __awaiter(this, void 0, void 0, function* () {
        const querystring = "SELECT SUM(xp_points) as points, student.name from reward inner join student ON reward.id_user_rewarded = student.id group by student.id order by points DESC LIMIT 0,5";
        const connection = yield promise_1.default.createConnection(config_1.connectionData);
        const result = yield connection.execute(querystring);
        return result[0];
    });
}
exports.findRankingMaxFive = findRankingMaxFive;
