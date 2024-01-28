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
        <nav className="nav-container">
          <ul className="nav-content">
            <NavLink to="/" className="header-logo-img">
              <img src={logo} alt="Logo Mig" className="logo-img" />
            </NavLink>
            <li className="nav-item-res">
              <NavLink
                to="https://www.instagram.com/extraordinarioscia/"
                className="nav-item"
              >
                Instagram
              </NavLink>
            </li>
            <li>
              <NavLink
                to="https://api.whatsapp.com/send?phone=+5571%209631-0768&text=Acamp+Mig+Cia"
                className="nav-item"
              >
                Contato
              </NavLink>
            </li>
            <li className="nav-item-res">
              <NavLink to="about" className="nav-item">
                Sobre nós
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
                  Inscrições
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
