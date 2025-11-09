import './login.scss';
import { useState } from 'react';

export default function Login({ onSubmit }) {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  function tentarLogar(e) {
    e.preventDefault();
    onSubmit({ email, senha });
  }

  return (
    <div className="auth-form container-login">
      <h1>Login</h1>
      <h2>Insira seu email e senha</h2>

      <form onSubmit={tentarLogar}>
        <label>Email</label>
        <input
          type="email"
          placeholder="usuario@gmail.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <label>Senha</label>
        <input
          type="password"
          placeholder="Digite sua senha"
          value={senha}
          onChange={(e) => setSenha(e.target.value)}
        />

        <div className="botao">
          <button type="submit">Entrar</button>
        </div>
      </form>
    </div>
  );
}
