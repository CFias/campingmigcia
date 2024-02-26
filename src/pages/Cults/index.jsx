import React from "react";
import "./styles.css";
import { NavLink } from "react-router-dom";

export default function Cults() {
  return (
    <div className="cults-container">
      <NavLink to="/subscribe" className="home-frase"></NavLink>
    </div>
  );
}
