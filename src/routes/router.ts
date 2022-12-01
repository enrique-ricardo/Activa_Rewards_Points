import express from 'express';
import {insertStudent} from "../handlers/student/insertStudent.js";
import {getStudents} from '../handlers/student/getStudents.js';
import {getOneStudent} from '../handlers/student/getOneStudent.js';
import {deleteStudent} from '../handlers/student/deleteOneStudent.js';
import {getStudentProfile} from '../handlers/student/getStudentProfile.js';
import {updateOneStudent} from '../handlers/student/updateOneStudent.js';
import {userValidation} from '../handlers/login/logUser.js';
import { getOneUser } from '../handlers/user/getOneUser.js';
const router = express.Router();

router.get("/editStudentProfile", getStudentProfile);

router.post("/students",insertStudent);


router.get("/students", getStudents);

router.get("/students/:id_student", getOneStudent);

//router.delete("/students", deleteStudent);

router.delete("/students/:id_student", deleteStudent);

router.put("/students/:id_student", updateOneStudent);

//router.patch("/students/:id_student", patchOneStudent);

router.post("/logUser", userValidation);

router.get("/users/:user_email", getOneUser);

export {router};