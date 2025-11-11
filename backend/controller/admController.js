import {Router} from 'express';
import { ContarUsuarios } from '../repository/admRepository';

const endpoint = Router();

endpoint.get("/totalusuarios",async(req,resp)=>{
    let registro = await ContarUsuarios()
    resp.send(registro);
})