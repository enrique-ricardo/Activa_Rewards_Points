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
import { postOneReward} from '../handlers/rewards/postOneReward.js';
import { getStudentReceivedRewards } from '../model/services/rewardServices.js';
import { getStudentSendedRewards } from '../model/services/rewardServices.js';
import { getListReceivedRewards } from '../model/services/rewardServices.js';
import { getListSendedRewards } from '../model/services/rewardServices.js';
import { getActivaReward } from '../handlers/rewards/getActivaPointsReward.js';
import { getStudent } from '../handlers/student/getStudent.js';
import { userIsStudent } from '../utils/userIsStudent.js';
import { showRewards } from '../handlers/rewards/showRewards.js';
const router = express.Router();

router.post("/students",insertStudent, validateToken, showRewards);

//router.get("/students", getStudents);

router.post("students/createNewStudent", insertStudent);//crear estudiante desde el perfil


router.get("/students/getStudents/:id_user", getStudents);//recupera los estudiantes excepto el loggeado
router.get("/students/getStudent/:id_user", getStudent);//mi perfil

router.get("/getStudentProfile", getStudentProfile);

//router.get("/editStudentProfile/:id_student", getOneStudent);

//router.delete("/students", deleteStudent);

//router.delete("/students/:id_student", validateToken, deleteStudent);//borrar usuarios

//router.put("/students/:id_student", updateOneStudent);



//router.post("/index", userValidation,);

router.post("/index", userValidation, validateToken, userIsStudent, showRewards);

router.get("/mypoints", showRewards);


router.get("/users/:user_email", getOneUser);

router.post("/users", validateToken, insertUser);//crear usuarios



router.post("/rewards/:id_user", validateToken, userIsStudent, postOneReward, showRewards);



export {router};