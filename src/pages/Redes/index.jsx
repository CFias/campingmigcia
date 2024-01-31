import React from "react";
import "./styles.css";
import { Instagram, YouTube } from "@mui/icons-material";
import { NavLink } from "react-router-dom";

export default function Redes() {
  return (
    <div className="redes-container">
      <div className="redes-content">
        <h2 className="redes-title">Nossas redes</h2>
        <div className="redes-icons">
          <NavLink className="icons" to="">
            <Instagram />
            <p className="rede-name">Extraordinários</p>
          </NavLink>
          <NavLink className="icons" to="">
            <YouTube />
            <p className="rede-name">Extraordinários</p>
          </NavLink>
        </div>
      </div>
    </div>
  );
}
