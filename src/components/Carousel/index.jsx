import React from "react";
import "./styles.css";
import { NavLink } from "react-router-dom";
import { useAuthValue } from "../../contexts/AuthContext";
import Recommend from "../Recommend/index";
import { Instagram, WhatsApp } from "@mui/icons-material";
import About from "../About";
import CardAcampOne from "../CardAcampOne";

export const Carousel = () => {
  const { user } = useAuthValue();

  return (
    <>
      <div className="home-container">
        {user && <Recommend />}
        <div className="home-content">
          <div className="home-frase">
            <h2 className="frase">SEGUNDO ACAMPAMENTO</h2>
            <h1 className="home-name">EXTRAORDINÁRIOS CIA</h1>
          </div>
          <div className="home-date">
            <p className="date">DIAS 17, 18 E 19 DE MAIO!</p>
          </div>
          <div className="btn-redes">
            {!user && (
              <NavLink to="/register" className="home-btn">
                INSCREVA-SE
              </NavLink>
            )}
            <div className="redes">
              <NavLink
                to="https://www.instagram.com/extraordinarioscia/"
                className="nav-rede"
              >
                <Instagram />
              </NavLink>
              <NavLink
                to="https://api.whatsapp.com/send?phone=+5571%209631-0768&text=Acamp+Mig+Cia"
                className="nav-rede"
              >
                <WhatsApp />
              </NavLink>
            </div>
          </div>
          <About />
          <CardAcampOne />
        </div>
      </div>
    </>
  );
};
