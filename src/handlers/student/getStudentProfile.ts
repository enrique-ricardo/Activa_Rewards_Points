import express from 'express';
import { Student } from '../../model/types/student.js';
import {findOneStudent, findStudentLogged} from '../../model/services/studentServices.js';
import axios from 'axios';
import { jwtToken } from "../../model/types/jwtToken.js";
import jsonwebtoken from 'jsonwebtoken';

async function getStudentProfile(req: express.Request, res: express.Response){
    
    if (req.session.token != undefined){
        const tokenVerified = await jsonwebtoken.verify(req.session.token, process.env.SESSION_SECRET!);
        const myTokenVerified: jwtToken = <jwtToken>tokenVerified;
        const targetUserId = `${myTokenVerified.id}`;
        
        const targetStudent = await axios(`http://localhost:3000/students/getStudent/${targetUserId}`); 
        res.render("pages/studentProfileUpdater",{student: targetStudent.data.student});
    }

    
}


export {getStudentProfile};