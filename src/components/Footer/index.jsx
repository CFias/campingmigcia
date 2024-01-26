import { Instagram, WhatsApp } from "@mui/icons-material";
import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../../assets/imagens/migcia.png";
import "./styles.css";

export const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="footer-content">
        <NavLink to="/" className="header-logo-img">
          <img src={logo} alt="Logo Mig" className="logo-img" />
        </NavLink>
        <div className="footer-redes">
          <NavLink
            to="https://www.instagram.com/extraordinarioscia/"
            className="footer-icon"
          >
            <Instagram className="icon" />
          </NavLink>
          <NavLink
            to="https://api.whatsapp.com/send?phone=+5571%209631-0768&text=Acamp+Mig+Cia"
            className="footer-icon"
          >
            <WhatsApp className="icon" />
          </NavLink>
        </div>
        <div className="footer-cred">
          <p className="footer-name">
            Acampamento MIG Cia © 2024. All Rights Reserved.
          </p>
          <p className="footer-name">
            Desenvolvido por{" "}
            <NavLink
              to="https://www.linkedin.com/in/cleidsonfias-dev/ "
              className="name"
            >
              Cleidson Fias
            </NavLink>{" "}
          </p>
        </div>
      </div>
    </footer>
  );
};
