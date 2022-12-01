import {db} from "../../config";
import { User } from "../../model/types/User";
import express from 'express';
import axios from "axios";

async function userValidation(req: express.Request, res: express.Response){

        const result = await axios.get(`http://localhost:3000/users/${req.body.email}`);
        if (result.data){
            const user: User = result.data;
            if (req.body.password == result.data.password){
                req.session.email = result.data.email;
                res.send("LOGIN OK");
            } else {
                res.render("pages/login", {errorMessage: "El usuario y la contraseña no coinciden"});
            } 
        } else {
            res.render("pages/login", {errorMessage: "404. No existe ese usuario"});
        }
           
}

export {userValidation};