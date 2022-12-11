import {Student} from '../types/student.js';
import {db, connectionData} from "../../config.js";
import {OkPacket, RowDataPacket} from "mysql2";
import {LooseObject} from '../types/LooseObject.js';
import {buildPatchQuery} from '../../utils/buildPatchQuery.js';
import mysqlPromise from "mysql2/promise";
import { updateUserIsFirstLogin } from './userServices.js';

function createStudent(student: Student, id_user: number, email_user: string, callback: Function){
    const queryString = `INSERT INTO student (name, first_surname, second_surname, email_activa, email_personal, phone_number, description, zip_code, id_user, prom ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`;
  
    db.query(
      queryString,
      [student.name, student.firstSurname, student.secondSurname, email_user, student.personalEmailAddress, student.phoneNumber, student.description, student.zipCode, id_user, student.prom],
      (err, result) => {
        console.log(err);
        if (err) {callback(err, null)};
        console.log(result);
        const insertId = (<OkPacket> result).insertId;
        updateUserIsFirstLogin (email_user);
        callback(null, insertId);
      }
    );
  };

  const getActivaPointsReward = (id: string, callback: Function) => {
    const queryString = "SELECT activa_points_balance FROM student WHERE id_user = ?";
    db.query(queryString, [id], (err, result)=>{
      if(err){ callback(err, null)};
      
      const activaPoints: Student = (<RowDataPacket>result)[0];
      callback(null, activaPoints);
    })
  } 

function findAllStudents(callback:Function){
  const queryString = "SELECT id, name, first_surname, second_surname, email_personal, email_activa, phone_number, zip_code FROM student";
  db.query(queryString, (err, result)=>{
    if(err) callback(err, null);

    const students = result;
    callback(null, students);
  } )
};

function findOneStudent(id: string, callback: Function){
 
  const queryString = "SELECT id, name, first_surname, second_surname, email_personal, email_activa, phone_number, avatar, cv, description, zip_code, prom, activa_points_balance FROM student WHERE id = ?";
  db.query(queryString, [id], (err, result)=>{
    if(err){ callback(err, null)};
    
    const studentFound: Student = (<RowDataPacket>result)[0];
    callback(null, studentFound);
  })
};

async function findOneStudentForPatch (id: string){
  
  const queryString = "SELECT id, name, first_surname, second_surname, email_personal, email_activa, phone_number, zip_code FROM student WHERE id = ?";
  const connection = await mysqlPromise.createConnection(connectionData);
  const result = await connection.execute(queryString, [id]);
  return result;
}

function deleteOneStudent(id: string, callback: Function){
  const queryString = "DELETE FROM student WHERE id = ?";
  db.query(queryString, [id], (err, result)=>{
    if(err){ callback(err, null)};
    
    const studentDeleted:String = "deleted succesfull";
   
    callback(null, studentDeleted);
  })
};

function putOneStudent(id: string, student: Student, callback: Function){

    const queryString = "UPDATE student SET name=?, first_surname=?, second_surname=?, email_personal=?, email_activa=?, phone_number=?, zip_code=? WHERE id=?";
    db.query(queryString, [student.name, student.firstSurname, student.secondSurname, student.personalEmailAddress, student.activaEmailAddress, student.phoneNumber, student.zipCode, id],
      (err, result)=>{
        if(err){ callback(err, null)};
        
        const studentUpdated:String = "update succesfull";
       
        callback(null, studentUpdated);
      })
  };

function patchStudent(id: string, updatedData: LooseObject, callback:Function){
      const queryString = buildPatchQuery("student", id, updatedData);
      if (queryString){
        db.query(queryString, 
          (err, result)=>{
            if(err){ callback(err, null)};
            
            const studentUpdated:String = "update succesfull";
           
            callback(null, studentUpdated);
          })
      }
     
};


export {createStudent, findAllStudents, findOneStudent, deleteOneStudent, putOneStudent, patchStudent, findOneStudentForPatch, getActivaPointsReward};