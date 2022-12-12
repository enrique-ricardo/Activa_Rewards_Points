import { Student } from "../../model/types/student.js";
import {findAllStudents} from "../../model/services/studentServices.js";
import express from 'express';


async function getStudents(req: express.Request, res: express.Response){
    findAllStudents((err:Error, students:Student[])=>{
        if(err){
            return res.status(404).json({"message": err.message});
        }
        res.status(200).json(students);
    })
}

export {getStudents};