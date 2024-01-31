import React from "react";
import "./styles.css";
import { WhatsApp } from "@mui/icons-material";
import liderPri from "../../assets/imagens/liderpri.png";
import liderVal from "../../assets/imagens/liderval.png";
import liderDai from "../../assets/imagens/liderdai.png";
import MigLogo from "../../assets/imagens/migcia.png";
import { NavLink } from "react-router-dom";
import { useAuthValue } from "../../contexts/AuthContext";

export default function Contact() {
  const { user } = useAuthValue();

  return (
    <div className="contact-container">
      <div className="contact-content">
        <div className="contact-list">
          <div className="contact-logo">
            <img className="logo" src={MigLogo} alt="" />
            <h2>Dúvidas ?</h2>
          </div>
          <h2 className="contact-title">
            Olá, <span className="contact-name">{user.displayName}!</span> Fale com um de nossos lideres:
          </h2>
          <NavLink className="contacts">
            <img className="lead" src={liderPri} />
            <WhatsApp />
            Priscila Chagas
          </NavLink>
          <NavLink className="contacts">
            <img className="lead" src={liderVal} />
            <WhatsApp />
            Valmerson Santana
          </NavLink>
          <NavLink className="contacts">
            <img className="lead" src={liderDai} />
            <WhatsApp />
            Adaías Sobrinho
          </NavLink>
        </div>
      </div>
    </div>
  );
}
