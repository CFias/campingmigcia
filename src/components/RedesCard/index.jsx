import { Instagram, WhatsApp } from "@mui/icons-material";
import React from "react";
import { NavLink } from "react-router-dom";
import "./styles.css";

export const RedesCard = () => {
  return (
    <div className="redes-container">
      <div className="redes-content">
        <NavLink to="https://www.instagram.com/mig.cia/" className="redes-icon">
          <Instagram />
        </NavLink>
        <NavLink
          to="https://api.whatsapp.com/send?phone=+5571%209631-0768&text=Acamp+Mig+Cia"
          className="redes-icon"
        >
          <WhatsApp />
        </NavLink>
      </div>
    </div>
  );
};
