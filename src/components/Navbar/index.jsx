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
              <NavLink to="/rede" className="nav-item2">
                Instagram
              </NavLink>
            </li>
            <li>
              <NavLink to="about" className="nav-item3">
                Sobre nós
              </NavLink>
            </li>
            <li>
              <NavLink to="/subscribe" className="nav-item1">
                Inscrições
              </NavLink>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
};
