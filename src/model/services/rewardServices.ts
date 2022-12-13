import {Reward} from '../types/Reward.js';
import {db, connectionData} from "../../config.js";
import {OkPacket, RowDataPacket} from "mysql2";
import mysqlPromise from "mysql2/promise";


function insertOneReward(reward: Reward, callback:Function){
  const queryString = "INSERT INTO reward(id_user_sender, id_user_rewarded, xp_points, date, description) VALUES (?,?,?, NOW(), ?)";
  db.query(queryString, [reward.id_user_sender, reward.id_user_rewarded, reward.xp_points, reward.description], (err, result)=>{
    console.log("err:",err)
      if (err) {
        callback(err, null);
      }
      console.log("result",result)
      console.log("<OkPacket> result",<OkPacket> result)
      const insertId = (<OkPacket> result).insertId;
      callback(null, insertId);
    })
}


//works
const getStudentReceivedRewards = (id_user_reward: number, callback: Function) => {
  const queryString = `SELECT sum(xp_points) FROM reward WHERE id_user_rewarded = ?`
  db.query(queryString, [id_user_reward], (err, result)=>{
    if(err){ callback(err, null)};
    const rewardsFund: Reward = (<RowDataPacket>result)[0];
    callback(null, rewardsFund);
  })
}
//works
const getStudentSendedRewards = (id_user_sender: number, callback: Function) => {
  const queryString = `SELECT sum(xp_points) FROM reward WHERE id_user_sender = ?`
  db.query(queryString, [id_user_sender], (err, result)=>{
    if(err){ callback(err, null)};
    const rewardsFund: Reward = (<RowDataPacket>result)[0];
    callback(null, rewardsFund);
  })
}
//works
const getListReceivedRewards = (id_user_reward: number, callback: Function) => {
  const queryString = `select student.name, reward.description, reward.xp_points, reward.date, reward.id_user_sender 
                      from reward 
                      join student on reward.id_user_rewarded = ? 
                      group by reward.id 
                      order by reward.date desc 
                      limit 0,5`
  db.query(queryString, [id_user_reward], (err, result)=>{
    if(err){ callback(err, null)};
    const rewardsFund: Reward = (<RowDataPacket>result)[0];
    callback(null, rewardsFund);
  })
}
//works
const getListSendedRewards = (id_user_sender: number, callback: Function) => {
  const queryString = `select student.name, reward.description, reward.xp_points, reward.date, reward.id_user_rewarded 
                      from reward inner join student on reward.id_user_sender = ? group by reward.id order by reward.date desc limit 0,5`
  db.query(queryString, [id_user_sender], (err, result)=>{
    if(err){ callback(err, null)};
    const rewardsFund: Reward = (<RowDataPacket>result)[0];
    callback(null, rewardsFund);
  })
}
//works
const getRankingList = (callback: Function) => {
  const queryString = `select student.name, sum(reward.xp_points) points 
                      from reward inner join student on reward.id_user_rewarded = student.id_user 
                      group by student.id_user order by points desc limit 0,5`
  db.query(queryString, (err, result)=>{
    if(err){ callback(err, null)};
    const rankingList: Reward = (<RowDataPacket>result)[0];
    callback(null, rankingList);
  })
}


export {insertOneReward, getStudentReceivedRewards, getListSendedRewards, getStudentSendedRewards, getListReceivedRewards, getRankingList}
