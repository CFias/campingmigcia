import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../../assets/imagens/migcia.png";
import "./styles.css";

export const Navbar = () => {
  return (
    <>
      <header className="header-container">
        <nav className="nav-container">
          <ul className="nav-content">
            <li>
              <NavLink to="/rede" className="nav-item">
                Instagram
              </NavLink>
            </li>
            <NavLink to="/" className="header-logo-img">
              <img src={logo} alt="Logo Mig" className="logo-img" />
            </NavLink>
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
