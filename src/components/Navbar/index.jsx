import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../../assets/imagens/migcia.png";
import "./styles.css";
import { useAuthValue } from "../../contexts/AuthContext";
import { useAuthentication } from "../../hooks/useAuthentication";

export const Navbar = () => {
  const { user } = useAuthValue();
  const { logout } = useAuthentication();

  return (
    <>
      <header className="header-container">
        <NavLink to="/" className="header-logo-img">
          <img src={logo} alt="Logo Mig" className="logo-img" />
        </NavLink>
        <nav className="nav-container">
          <ul className="nav-content">
            <li className="nav-item-res">
              <NavLink to="redes" className="nav-item">
                Redes
              </NavLink>
            </li>
            <li>
              <NavLink to="/contact" className="nav-item">
                Contato
              </NavLink>
            </li>
            <li className="nav-item-res">
              <NavLink to="about" className="nav-item">
                Cultos
              </NavLink>
            </li>
            <li className="nav-item-res">
              <NavLink
                target="_blank"
                to="https://www.bibliaonline.com.br/"
                className="nav-item"
              >
                Bíblia
              </NavLink>
            </li>
            <li className="nav-item-res">
              <NavLink to="about" className="nav-item">
                Acerca
              </NavLink>
            </li>
          </ul>
        </nav>
        {user ? (
          <>
            <div className="nav-btn">
              <ul className="nav-content">
                <span className="nav-user-desk">Olá, {user.displayName}</span>
                <li className="nav-btn-logout">
                  <NavLink onClick={logout} className="nav-item">
                    Sair
                  </NavLink>
                </li>
              </ul>
            </div>
          </>
        ) : (
          <div className="nav-btn">
            <ul className="nav-content">
              <li>
                <NavLink to="/register" className="nav-item">
                  Cadastre-se
                </NavLink>
              </li>
              <li>
                <NavLink to="/login" className="nav-item-log nav-item">
                  Login
                </NavLink>
              </li>
            </ul>
          </div>
        )}
      </header>
    </>
  );
};
