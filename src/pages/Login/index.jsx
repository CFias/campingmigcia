import "../../index.css";
import { NavLink } from "react-router-dom";
import { useEffect, useState } from "react";
import { useAuthentication } from "./../../hooks/useAuthentication";
import logo from "../../assets/imagens/migcia.png";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const { login, error: authError, loading } = useAuthentication();

  const handleSubmit = async (e) => {
    e.preventDefault();

    setError("");

    const user = {
      email,
      password,
    };
    const res = await login(user);

    console.log(res);
  };

  useEffect(() => {
    setError(authError);
  }, [authError]);

  return (
    <section className="form-container container">
      <div className="form-card-container">
        <div className="form-card">
          <img src={logo} alt="Logo Mig" className="logo-img" />
          <h2 className="form-text">O nosso segundo acampamento</h2>
        </div>
        <form onSubmit={handleSubmit} className="form-content">
          <h2 className="form-title">Fazer Login</h2>
          <label className="form-item">
            <input
              className="form-in"
              type="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              placeholder="E-mail do usuário"
            />
          </label>
          <label className="form-item">
            <input
              className="form-in"
              type="password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              placeholder="Digite a sua senha"
            />
          </label>
          {!loading && <button className="form-btn">Login</button>}
          {loading && <button className="form-btn">Aguarde</button>}
          <p className="form-route">
            Não possui cadastro ?
            <NavLink className="form-nav" to="/register">
              {" "}
              Cadastre-se
            </NavLink>
          </p>
          {error && <p className="form-error">{error}</p>}
        </form>
      </div>
    </section>
  );
}
