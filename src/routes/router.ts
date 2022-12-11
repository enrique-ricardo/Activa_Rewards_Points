import express from 'express';
import {insertStudent} from "../handlers/student/insertStudent.js";
//import {getStudents} from '../handlers/student/getStudents.js';
import {getOneStudent} from '../handlers/student/getOneStudent.js';
import {deleteStudent} from '../handlers/student/deleteOneStudent.js';
//import {getStudentProfile} from '../handlers/student/getStudentProfile.js';
import {updateOneStudent} from '../handlers/student/updateOneStudent.js';
//import { patchOneStudent } from '../handlers/student/patchOneStudent.js';
import {userValidation} from '../handlers/login/logUser.js';
import { getOneUser } from '../handlers/user/getOneUser.js';
import { insertUser } from '../handlers/user/insertUser.js';
import { validateToken } from '../utils/validateToken.js';
import { userIsAdmin } from '../utils/userIsAdmin.js';
import { insertNewReward } from '../model/services/rewardServices.js';
import { getStudentReceivedRewards } from '../model/services/rewardServices.js';
import { getStudentSendedRewards } from '../model/services/rewardServices.js';
import { getListReceivedRewards } from '../model/services/rewardServices.js';
import { getListSendedRewards } from '../model/services/rewardServices.js';
import { getActivaReward } from '../handlers/rewards/getActivaPointsReward.js';
import { getActivaPointsReward } from '../model/services/studentServices.js';

const router = express.Router();

//router.get("/editStudentProfile/:id", getStudentProfile);

router.post("/students",insertStudent);


//router.get("/students", getStudents);

router.get("/editStudentProfile/:id_student", getOneStudent);

//router.delete("/students", deleteStudent);

router.delete("/students/:id_student", validateToken, userIsAdmin,  deleteStudent);

router.put("/students/:id_student", updateOneStudent);

//router.patch("/students/:id_student", patchOneStudent);

router.post("/index", userValidation);

router.post("students/createNewStudent", insertStudent);

router.get("/users/:user_email", getOneUser);

router.post("/users", validateToken, userIsAdmin, insertUser);

router.get("/points/:id_student", getActivaReward);

export {router};