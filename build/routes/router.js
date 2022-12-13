"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const express_1 = __importDefault(require("express"));
const insertStudent_js_1 = require("../handlers/student/insertStudent.js");
const getStudents_js_1 = require("../handlers/student/getStudents.js");
const deleteOneStudent_js_1 = require("../handlers/student/deleteOneStudent.js");
const getStudentProfile_js_1 = require("../handlers/student/getStudentProfile.js");
const logUser_js_1 = require("../handlers/login/logUser.js");
const getOneUser_js_1 = require("../handlers/user/getOneUser.js");
const insertUser_js_1 = require("../handlers/user/insertUser.js");
const validateToken_js_1 = require("../utils/validateToken.js");
const userIsAdmin_js_1 = require("../utils/userIsAdmin.js");
const postOneReward_js_1 = require("../handlers/rewards/postOneReward.js");
const getStudent_js_1 = require("../handlers/student/getStudent.js");
const userIsStudent_js_1 = require("../utils/userIsStudent.js");
const showRewards_js_1 = require("../handlers/rewards/showRewards.js");
const router = express_1.default.Router();
exports.router = router;
router.post("/students", insertStudent_js_1.insertStudent, validateToken_js_1.validateToken, showRewards_js_1.showRewards);
//router.get("/students", getStudents);
router.post("students/createNewStudent", insertStudent_js_1.insertStudent); //crear estudiante desde el perfil
router.get("/students/getStudents/:id_user", getStudents_js_1.getStudents); //recupera los estudiantes excepto el loggeado
router.get("/students/getStudent/:id_user", getStudent_js_1.getStudent); //mi perfil
router.get("/getStudentProfile", getStudentProfile_js_1.getStudentProfile);
//router.get("/editStudentProfile/:id_student", getOneStudent);
//router.delete("/students", deleteStudent);
router.delete("/students/:id_student", validateToken_js_1.validateToken, userIsAdmin_js_1.userIsAdmin, deleteOneStudent_js_1.deleteStudent); //borrar usuarios
//router.put("/students/:id_student", updateOneStudent);
//router.post("/index", userValidation,);
router.post("/index", logUser_js_1.userValidation, validateToken_js_1.validateToken, showRewards_js_1.showRewards);
router.get("/users/:user_email", getOneUser_js_1.getOneUser);
router.post("/users", validateToken_js_1.validateToken, userIsAdmin_js_1.userIsAdmin, insertUser_js_1.insertUser); //crear usuarios
router.post("/rewards/:id_user", validateToken_js_1.validateToken, userIsStudent_js_1.userIsStudent, postOneReward_js_1.postOneReward);
