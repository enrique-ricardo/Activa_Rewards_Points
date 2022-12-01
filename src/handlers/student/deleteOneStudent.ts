import express from 'express';
import { Student } from '../../model/types/student.js';
import {deleteOneStudent} from '../../model/services/studentServices.js';

async function deleteStudent(req: express.Request, res: express.Response){
    const studentId = req.body.student;
    deleteOneStudent(studentId, (err: Error, result:string)=>{
        if(err){
            res.status(404).json({"message": err.message});
        }
        res.status(200).json(result);
    })
}

export {deleteStudent};