"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getActivaPointsReward = exports.putOneStudent = exports.deleteOneStudent = exports.findStudentLogged = exports.findOneStudent = exports.findAllStudents = exports.createStudent = void 0;
const config_js_1 = require("../../config.js");
const userServices_js_1 = require("./userServices.js");
function createStudent(student, id_user, email_user, callback) {
    const queryString = `INSERT INTO student (name, first_surname, second_surname, email_activa, email_personal, phone_number, description, zip_code, id_user, prom ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`;
    config_js_1.db.query(queryString, [student.name, student.firstSurname, student.secondSurname, email_user, student.personalEmailAddress, student.phoneNumber, student.description, student.zipCode, id_user, student.prom], (err, result) => {
        if (err) {
            callback(err, null);
        }
        ;
        const insertId = result.insertId;
        (0, userServices_js_1.updateUserIsFirstLogin)(email_user);
        callback(null, insertId);
    });
}
exports.createStudent = createStudent;
;
const getActivaPointsReward = (id, callback) => {
    const queryString = "SELECT activa_points_balance FROM student WHERE id_user = ?";
    config_js_1.db.query(queryString, [id], (err, result) => {
        if (err) {
            callback(err, null);
        }
        ;
        const activaPoints = result[0];
        callback(null, activaPoints);
    });
};
exports.getActivaPointsReward = getActivaPointsReward;
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
function findStudentLogged(id_user, callback) {
    const queryString = "SELECT id, name, first_surname, second_surname, email_personal, email_activa, phone_number, avatar, cv, description, zip_code, prom, activa_points_balance, id_user FROM student WHERE id_user = ?";
    config_js_1.db.query(queryString, [id_user], (err, result) => {
        if (err) {
            callback(err, null);
        }
        ;
        const studentFound = result[0];
        callback(null, studentFound);
    });
}
exports.findStudentLogged = findStudentLogged;
;
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
