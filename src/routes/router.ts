import express from 'express';
import {insertStudent} from "../handlers/student/insertStudent.js";
import {getStudents} from '../handlers/student/getStudents.js';
import {getOneStudent} from '../handlers/student/getOneStudent.js';
import {deleteStudent} from '../handlers/student/deleteOneStudent.js';
import {getStudentProfile} from '../handlers/student/getStudentProfile.js';
import {updateOneStudent} from '../handlers/student/updateOneStudent.js';
import {userValidation} from '../handlers/login/logUser.js';
import { getOneUser } from '../handlers/user/getOneUser.js';
import { insertUser } from '../handlers/user/insertUser.js';
import { validateToken } from '../utils/validateToken.js';
import { userIsAdmin } from '../utils/userIsAdmin.js';
import { insertReward } from '../handlers/rewards/insertNewReward.js';
import { getStudentReceivedRewards } from '../model/services/rewardServices.js';
import { getStudentSendedRewards } from '../model/services/rewardServices.js';
import { getListReceivedRewards } from '../model/services/rewardServices.js';
import { getListSendedRewards } from '../model/services/rewardServices.js';
import { getActivaReward } from '../handlers/rewards/getActivaPointsReward.js';
import { getStudent } from '../handlers/student/getStudent.js';

const router = express.Router();

router.post("/students",insertStudent);


router.get("/students", getStudents);

//router.get("/editStudentProfile/:id_student", getOneStudent);

//router.delete("/students", deleteStudent);

router.delete("/students/:id_student", validateToken, userIsAdmin,  deleteStudent);

//router.put("/students/:id_student", updateOneStudent);

router.post("/index", userValidation,);

router.get("/students/getStudent/:id_user", getStudent);

router.get("/getStudentProfile", getStudentProfile);

router.post("students/createNewStudent", insertStudent);

router.get("/users/:user_email", getOneUser);

router.post("/users", validateToken, userIsAdmin, insertUser);

router.get("/insertNewReward", insertReward);

export {router};