"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.putOneStudent = exports.deleteOneStudent = exports.findOneStudent = exports.findAllStudents = exports.createStudent = void 0;
const config_js_1 = require("../../config.js");
function createStudent(student, callback) {
    const queryString = "INSERT INTO student (name, first_surname, second_surname, email_personal, email_activa, phone_number, zip_code, prom, activa_points_balance ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)";
    config_js_1.db.query(queryString, [student.name, student.firstSurname, student.secondSurname, student.personalEmailAddress, student.activaEmailAddress, student.phoneNumber, student.zipCode, student.prom, student.activaPointsBalance], (err, result) => {
        if (err) {
            callback(err, null);
        }
        ;
        const insertId = result.insertId;
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
function findOneStudent(id, callback) {
    const queryString = "SELECT id, name, first_surname, second_surname, email_personal, email_activa, phone_number, zip_code FROM student WHERE id = ?";
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
