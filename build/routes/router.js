"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const express_1 = __importDefault(require("express"));
const insertStudent_1 = require("../handlers/student/insertStudent");
const getStudents_1 = require("../handlers/student/getStudents");
const getOneStudent_1 = require("../handlers/student/getOneStudent");
const deleteOneStudent_1 = require("../handlers/student/deleteOneStudent");
const getStudentProfile_1 = require("../handlers/student/getStudentProfile");
const updateOneStudent_1 = require("../handlers/student/updateOneStudent");
const logUser_1 = require("../handlers/login/logUser");
const getOneUser_1 = require("../handlers/user/getOneUser");
const router = express_1.default.Router();
exports.router = router;
router.get("/editStudentProfile", getStudentProfile_1.getStudentProfile);
router.post("/students", insertStudent_1.insertStudent);
router.get("/students", getStudents_1.getStudents);
router.get("/students/:id_student", getOneStudent_1.getOneStudent);
//router.delete("/students", deleteStudent);
router.delete("/students/:id_student", deleteOneStudent_1.deleteStudent);
router.put("/students/:id_student", updateOneStudent_1.updateOneStudent);
//router.patch("/students/:id_student", patchOneStudent);
router.post("/logUser", logUser_1.userValidation);
router.get("/users/:user_email", getOneUser_1.getOneUser);
