import { Student } from "../../model/types/student.js";
import express from 'express';
import { findStudentLogged } from "../../model/services/studentServices.js";


async function getStudent(req: express.Request, res: express.Response){
    const id_user = req.params.id_user;
    findStudentLogged(id_user, (err:Error, result:Student)=>{
        if(err){
            return res.status(404).json({"message": err.message});
        }
        
        res.status(200).json({ student: result });
    })
}

export {getStudent};