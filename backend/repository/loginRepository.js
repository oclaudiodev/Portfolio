import conection from "./conection.js";

export async function inserirUsuario(novoUsuario) {
    const comando = `
        insert into usuario (nome, email, senha)
        values
        (?,?,MD5(?))
    `
    const [registros] = await conection.query(comando, [
        novoUsuario.nome,
        novoUsuario.email,
        novoUsuario.senha
    ]
    )
    return registros.insertId;
}

export async function VerificarUsuario(email, senha) {
    const comando = `
        select id_user, nome, email
        from usuario
        where email = ? AND senha = MD5(?)
    `
    const [registros] = await conection.query(comando, [email, senha]);

    if (registros.length === 0) {
        return null;
    }
    return registros[0];
}

export async function listarUsuarios() {
    const comando = `
      select nome, email
      from usuario
    where id_user > 1
      order by id_user;
    `;
    const [linhas] = await conection.query(comando);
    return linhas;
  }
  