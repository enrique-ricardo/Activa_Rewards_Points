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
Object.defineProperty(exports, "__esModule", { value: true });
exports.insertStudent = void 0;
const studentServices_js_1 = require("../../model/services/studentServices.js");
const sessionValidation_1 = require("../../utils/sessionValidation");
// async function insertStudent(req: express.Request, res: express.Response){
//   const newStudent: Student = req.body;
//   if (req.session.token != undefined){ 
//     const tokenVerified = await jsonwebtoken.verify(req.session.token, process.env.SESSION_SECRET!);
//     const myTokenVerified: jwtToken = <jwtToken>tokenVerified;
//     const idUser = myTokenVerified.id;
//     const emailUser = myTokenVerified.email;
//     createStudent(newStudent, idUser, emailUser, (err: Error, studentId: number) => {
//       if (err) {
//         res.status(500).json({"message": err.message});
//       } else {
//         /*res.status(200).json({"orderId": studentId});*/
//         res.render("pages/index");
//       }
//      });
//   } else {
//     res.status(401).json({"message": "Es obligatorio autenticarse antes de realizar esta operación"});
//   }
// };
function insertStudent(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const sessionToken = (0, sessionValidation_1.getSessionToken)(req, res);
        const newStudent = req.body;
        if (sessionToken != undefined) {
            (0, studentServices_js_1.createStudent)(newStudent, sessionToken.idUser, sessionToken.emailUser, (err, studentId) => {
                if (err) {
                    res.status(500).json({ "message": err.message });
                }
                else {
                    res.render("pages/index");
                }
            });
        }
        else {
            res.status(401).json({ "message": "Es obligatorio autenticarse antes de realizar esta operación" });
        }
    });
}
exports.insertStudent = insertStudent;
;
