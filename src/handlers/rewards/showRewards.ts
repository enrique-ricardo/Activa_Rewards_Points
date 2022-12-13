import express  from "express";
import jsonwebtoken from 'jsonwebtoken';
import axios from 'axios';
import { jwtToken } from "../../model/types/jwtToken.js";
import { Student } from "../../model/types/student.js";


async function showRewards(req: express.Request, res: express.Response){
    
    if (req.session.token != undefined){ 
        const tokenVerified = await jsonwebtoken.verify(req.session.token, process.env.SESSION_SECRET!);
        const myTokenVerified: jwtToken = <jwtToken>tokenVerified;
        
        const resultAxiosStudent = await axios(`http://localhost:3000/students/getStudent/${myTokenVerified.id}`);
        const userLoggedStudentData: Student= resultAxiosStudent.data.student;
        
        const resultAxiosStudents = await axios(`http://localhost:3000/students/getStudents/${myTokenVerified.id}`);
      
        const studentData: Student[] = resultAxiosStudents.data; 
     
        res.status(200).render("pages/index",{studentLogged: userLoggedStudentData, studentsData: studentData});
    } else {
        res.status(401).send("No te has autenticado");
    }
}

export {showRewards};