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
          <h2 className="contact-help">Dúvidas ?</h2>
          {user ? (
            <h2 className="contact-title">
              Olá, <span className="contact-name">{user.displayName}!</span>{" "}
              Fale com um de nossos lideres:
            </h2>
          ) : (
            <h2 className="contact-title">
              Olá, Fale com um de nossos lideres:
            </h2>
          )}
          <NavLink
            to="https://wa.me/5571992853065?text=Shalom%2C+Pri%21+Tira+uma+duvida+minha+pfv"
            target="_blank"
            className="contacts"
          >
            <img className="lead" src={liderPri} />
            Priscila Chagas
          </NavLink>
          <NavLink
            to="https://wa.me/5571996310768?text=Shalom%2C+Vaval%21+Tira+uma+duvida+minha+pfv"
            target="_blank"
            className="contacts"
          >
            <img className="lead" src={liderVal} />
            Valmerson Santana
          </NavLink>
          <NavLink
            to="https://wa.me/5571987226392?text=Shalom%2C+Dai%21+Tira+uma+duvida+minha+pfv"
            target="_blank"
            className="contacts"
          >
            <img className="lead" src={liderDai} />
            Adaías Sobrinho
          </NavLink>
        </div>
      </div>
    </div>
  );
}
