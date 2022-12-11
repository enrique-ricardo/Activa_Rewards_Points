import {Reward} from '../types/reward.js';
import {db, connectionData} from "../../config.js";
import {OkPacket, RowDataPacket} from "mysql2";
import {LooseObject} from '../types/LooseObject.js';
import {buildPatchQuery} from '../../utils/buildPatchQuery.js';
import mysqlPromise from "mysql2/promise";

const insertNewReward = (reward: Reward, id_user_sender: number, id_user_reward: number, xp_points: number, description: string, callback: Function) => {
  const queryString = `INSERT INTO reward (id_user_sender, id_user_reward, xp_points, NOW(), description) VALUES (?, ?, ?, ?, ?)`;

  db.query(
    queryString,
    [reward.id_user_sender, reward.id_user_reward, reward.xp_points, reward.description],
    (err, result) => {
      console.log(err);
      if (err) {callback(err, null)};
      console.log(result);
      const insertId = (<OkPacket> result).insertId;
      callback(null, insertId);
    }
  );
};

const getStudentReceivedRewards = (id_user_reward: number, callback: Function) => {
  const queryString = `SELECT sum(xp_points) FROM reward WHERE id_user_reward = ?`
  db.query(queryString, [id_user_reward], (err, result)=>{
    if(err){ callback(err, null)};
    const rewardsFund: Reward = (<RowDataPacket>result)[0];
    callback(null, rewardsFund);
  })
}

const getStudentSendedRewards = (id_user_sender: number, callback: Function) => {
  const queryString = `SELECT sum(xp_points) FROM reward WHERE id_user_sender = ?`
  db.query(queryString, [id_user_sender], (err, result)=>{
    if(err){ callback(err, null)};
    const rewardsFund: Reward = (<RowDataPacket>result)[0];
    callback(null, rewardsFund);
  })
}

const getListReceivedRewards = (id_user_reward: number, callback: Function) => {
  const queryString = `SELECT (id_user_sender, id_user_reward, xp_points, date, description) FROM reward WHERE id_user_reward = ?`
  db.query(queryString, [id_user_reward], (err, result)=>{
    if(err){ callback(err, null)};
    const rewardsFund: Reward = (<RowDataPacket>result)[0];
    callback(null, rewardsFund);
  })
}

const getListSendedRewards = (id_user_sender: number, callback: Function) => {
  const queryString = `SELECT (id_user_sender, id_user_reward, xp_points, date, description) FROM reward WHERE id_user_reward = ?`
  db.query(queryString, [id_user_sender], (err, result)=>{
    if(err){ callback(err, null)};
    const rewardsFund: Reward = (<RowDataPacket>result)[0];
    callback(null, rewardsFund);
  })
}



export {insertNewReward, getStudentReceivedRewards, getListSendedRewards, getStudentSendedRewards, getListReceivedRewards}