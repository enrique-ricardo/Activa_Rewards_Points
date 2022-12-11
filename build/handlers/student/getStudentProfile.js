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
function getStudentProfile(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        /*  if (req.session.email){
              const targetStudentId: number = 17; //TO-DO: cambiar todo eso para funcionar con el email
              const targetStudent = await axios(`http://localhost:3000/students/${targetStudentId}`);
              //TODO const targetStudent: Student = axiosResponse.data;
          
              res.render("pages/studentProfileUpdater", {
                  student: targetStudent.data
              });
          } else {
              res.status(401).send("no tienes permisos de acceso");
          }
          
      }*/
        export { getStudentProfile };
    });
}
