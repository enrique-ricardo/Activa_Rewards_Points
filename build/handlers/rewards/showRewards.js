"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.showRewards = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const axios_1 = __importDefault(require("axios"));
function showRewards(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        //console.log("entra en showRewards")
        if (req.session.token != undefined) {
            const tokenVerified = yield jsonwebtoken_1.default.verify(req.session.token, process.env.SESSION_SECRET);
            const myTokenVerified = tokenVerified;
            const resultAxiosStudent = yield (0, axios_1.default)(`http://localhost:3000/students/getStudent/${myTokenVerified.id}`);
            const userLoggedStudentData = resultAxiosStudent.data.student;
            const resultAxiosStudents = yield (0, axios_1.default)(`http://localhost:3000/students/getStudents/${myTokenVerified.id}`);
            const studentData = resultAxiosStudents.data;
            res.status(200).render("pages/index", { studentLogged: userLoggedStudentData, studentsData: studentData });
        }
        else {
            res.status(401).send("No te has autenticado");
        }
    });
}
exports.showRewards = showRewards;
