import express from "express";
import { findRewardsReceivedFromStudent, findRewardsSentFromStudent, findRewardsSortedByDate} from "../../model/services/rewardServices.js";
import { findOneStudent, findAllStudents} from "../../model/services/studentServices.js";
import jsonwebtoken from 'jsonwebtoken';
import { getOneStudent } from "../student/getOneStudent.js";




export async function getStudentRewards(req: express.Request, res: express.Response){
    try{
    const token = req.session.token as string;
    const studentIdecoded = jsonwebtoken.decode(token, {json: true});
    const studentId = studentIdecoded?.id;
    console.log(studentIdecoded);
    
    

    const studentSentRewards = await findRewardsSentFromStudent(studentId);
    const studentReceivedRewards = await findRewardsReceivedFromStudent(studentId);
    const showPointsFromStudent = await  findOneStudent(studentId);
    const getStudents = await findAllStudents();
    const lastRewards = await findRewardsSortedByDate();
    const studentLogged = await findOneStudent(studentId);
    
    res.status(200).render("pages/points",
      
        {studentSentRewards,
        studentReceivedRewards,
        showPointsFromStudent,
        getStudents,
        lastRewards,
        studentLogged
        })
        
        
    } catch (error) {
        res.status(404).json({ "message": "not found" });
    }
}