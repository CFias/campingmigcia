import React from "react";
import { NavLink } from "react-router-dom";
import "./styles.css";

export default function CardAcampOne() {
  return (
    <div className="acamp-container">
      <div className="acamp-content">
        <h2 className="acamp-one">Primeiro ACAMP</h2>
        <p className="acamp-p">
          Veja alguns registros do nosso primeiro acampamento EXTRAORDINÁRIO.
        </p>
        <NavLink
          to="https://drive.google.com/drive/folders/1BOBUyoKjVGNx2mbSSYn2WjndwAfMzkqc"
          className="acamp-one-btn"
        >
          <p className="acamp-btn-desk">VER IMAGENS</p>
        </NavLink>
      </div>
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
