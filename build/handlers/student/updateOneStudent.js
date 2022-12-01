"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateOneStudent = void 0;
const studentServices_js_1 = require("../../model/services/studentServices.js");
function updateOneStudent(req, res) {
    const targetStudentId = req.params.id_student;
    const studentDataUpdated = req.body;
    (0, studentServices_js_1.putOneStudent)(targetStudentId, studentDataUpdated, (err, result) => {
        if (err) {
            res.status(404).json({ "message": err.message });
        }
        res.status(200).json(result);
    });
}
exports.updateOneStudent = updateOneStudent;
