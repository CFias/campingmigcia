import { Instagram, WhatsApp } from "@mui/icons-material";
import React from "react";
import { NavLink } from "react-router-dom";
import "./styles.css"

export const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="footer-content">
        <div className="footer-redes">
          <NavLink to="https://www.instagram.com/mig.cia/" className="footer-icon">
            <Instagram className="icon"/>
          </NavLink>
          <NavLink to="https://api.whatsapp.com/send?phone=+5571%209631-0768&text=Acamp+Mig+Cia" className="footer-icon">
            <WhatsApp className="icon" />
          </NavLink>
        </div>
        <div className="footer-cred">
          <p className="footer-name">Created By Cleidson Fias 2024</p>
        </div>
      </div>
    </footer>
  );
};
