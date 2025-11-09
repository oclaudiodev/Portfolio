import {Router} from 'express';
import {generateToken} from '../utils/jwt.js'
import { inserirUsuario,VerificarUsuario,listarUsuarios } from '../repository/loginRepository.js';

const endpoints = Router();

endpoints.post("/usuario", async (req,resp) => {
    try {
        const novoUsuario = req.body;
        console.log('Novo usuário recebido:', novoUsuario); 
    
        const id = await inserirUsuario(novoUsuario); 
        resp.send({ NovoID: id });
    } catch (err) {
        console.error('Erro ao cadastrar:', err);
        resp.status(500).send({ erro: "Erro ao cadastrar usuário: " + err.message });
    }
});


endpoints.post('/logar', async (req,resp) => {
    let email = req.body.email;
    let senha = req.body.senha;

    let registros = await VerificarUsuario(email, senha);
    
    if(!registros){
        resp.status(401).send({erro: 'Credenciais inválidas'})
    }
    else{
        let token = generateToken(registros);
        resp.send({
            "id_user": registros.id_user,
            "email": email,
            "token": token
        });
    }
})

endpoints.get('/usuarios', async (req, resp) => {
    const lista = await listarUsuarios();
    resp.send(lista);
  });

export default endpoints;