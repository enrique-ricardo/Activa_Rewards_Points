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
exports.findOneStudentForPatch = exports.patchStudent = exports.putOneStudent = exports.deleteOneStudent = exports.findOneStudent = exports.findAllStudents = exports.createStudent = void 0;
const config_js_1 = require("../../config.js");
const buildPatchQuery_js_1 = require("../../utils/buildPatchQuery.js");
const promise_1 = __importDefault(require("mysql2/promise"));
const userServices_js_1 = require("./userServices.js");
function createStudent(student, id_user, email_user, callback) {
    const queryString = `INSERT INTO student (name, first_surname, second_surname, email_activa, email_personal, phone_number, description, zip_code, id_user, prom ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`;
    config_js_1.db.query(queryString, [student.name, student.firstSurname, student.secondSurname, email_user, student.personalEmailAddress, student.phoneNumber, student.description, student.zipCode, id_user, student.prom], (err, result) => {
        if (err) {
            callback(err, null);
        }
        ;
        console.log(result);
        const insertId = result.insertId;
        (0, userServices_js_1.updateUserIsFirstLogin)(email_user);
        callback(null, insertId);
    });
}
exports.createStudent = createStudent;
;
function findAllStudents(callback) {
    const queryString = "SELECT id, name, first_surname, second_surname, email_personal, email_activa, phone_number, zip_code FROM student";
    config_js_1.db.query(queryString, (err, result) => {
        if (err)
            callback(err, null);
        const students = result;
        callback(null, students);
    });
}
exports.findAllStudents = findAllStudents;
;
function findOneStudent(id, callback) {
    const queryString = "SELECT id, name, first_surname, second_surname, email_personal, email_activa, phone_number, avatar, cv, description, zip_code, prom, activa_points_balance FROM student WHERE id = ?";
    config_js_1.db.query(queryString, [id], (err, result) => {
        if (err) {
            callback(err, null);
        }
        ;
        const studentFound = result[0];
        callback(null, studentFound);
    });
}
exports.findOneStudent = findOneStudent;
;
function findOneStudentForPatch(id) {
    return __awaiter(this, void 0, void 0, function* () {
        const queryString = "SELECT id, name, first_surname, second_surname, email_personal, email_activa, phone_number, zip_code FROM student WHERE id = ?";
        const connection = yield promise_1.default.createConnection(config_js_1.connectionData);
        const result = yield connection.execute(queryString, [id]);
        return result;
    });
}
exports.findOneStudentForPatch = findOneStudentForPatch;
function deleteOneStudent(id, callback) {
    const queryString = "DELETE FROM student WHERE id = ?";
    config_js_1.db.query(queryString, [id], (err, result) => {
        if (err) {
            callback(err, null);
        }
        ;
        const studentDeleted = "deleted succesfull";
        callback(null, studentDeleted);
    });
}
exports.deleteOneStudent = deleteOneStudent;
;
function putOneStudent(id, student, callback) {
    const queryString = "UPDATE student SET name=?, first_surname=?, second_surname=?, email_personal=?, email_activa=?, phone_number=?, zip_code=? WHERE id=?";
    config_js_1.db.query(queryString, [student.name, student.firstSurname, student.secondSurname, student.personalEmailAddress, student.activaEmailAddress, student.phoneNumber, student.zipCode, id], (err, result) => {
        if (err) {
            callback(err, null);
        }
        ;
        const studentUpdated = "update succesfull";
        callback(null, studentUpdated);
    });
}
exports.putOneStudent = putOneStudent;
;
function patchStudent(id, updatedData, callback) {
    const queryString = (0, buildPatchQuery_js_1.buildPatchQuery)("student", id, updatedData);
    if (queryString) {
        config_js_1.db.query(queryString, (err, result) => {
            if (err) {
                callback(err, null);
            }
            ;
            const studentUpdated = "update succesfull";
            callback(null, studentUpdated);
        });
    }
}
exports.patchStudent = patchStudent;
;
