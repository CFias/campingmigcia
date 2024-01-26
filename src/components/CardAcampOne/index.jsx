import React from "react";
import { NavLink } from "react-router-dom";
import "./styles.css";

export default function CardAcampOne() {
  return (
    <div className="acamp-container">
      <h2 className="acamp-one">Primeiro ACAMP</h2>
      <NavLink
        className="acamp-img"
        to="https://drive.google.com/drive/folders/1BOBUyoKjVGNx2mbSSYn2WjndwAfMzkqc"
      ></NavLink>
      <NavLink
        to="https://drive.google.com/drive/folders/1BOBUyoKjVGNx2mbSSYn2WjndwAfMzkqc"
        className="acamp-one-btn"
      >
        <p className="acamp-btn">VER IMAGENS</p>
      </NavLink>
    </div>
  );
}
