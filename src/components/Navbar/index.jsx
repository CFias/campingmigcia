import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../../assets/imagens/migcia.png";
import "./styles.css";

export const Navbar = () => {
  return (
    <>
      <header className="header-container">
        <NavLink to="/" className="header-logo-img">
          <img src={logo} alt="Logo Mig" className="logo-img" />
        </NavLink>
        <nav className="nav-container">
          <ul className="nav-content">
            <li>
              <NavLink to="/subscribe" className="nav-item">
                Inscrições
              </NavLink>
            </li>
            <li>
              <NavLink to="/rede" className="nav-item">
                Instagram
              </NavLink>
            </li>
            <li>
              <NavLink to="about" className="nav-item">
                Sobre nós
              </NavLink>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
};
