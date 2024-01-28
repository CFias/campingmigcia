import React from "react";
import "./styles.css";
import { useAuthValue } from "../../contexts/AuthContext";

export default function Recommend() {
  const { user } = useAuthValue();

  return (
    <>
      <div className="recommend-container">
        <div className="recommend-content">
          <div className="recommend-text">
            <h2 className="text-rec">
              Paz, <span className="text-span">{user.displayName}!</span> <br /> O que você quer no
              ACAMP EXTRAORDINÁRIOS Cia 2024 ?
            </h2>
          </div>
          <div className="recommend-in-btn">
            <input
              className="recommend-in"
              type="text"
              placeholder="Mande a sua sugestão"
            />
            <button className="recommend-btn">Enviar</button>
          </div>
        </div>
      </div>
    </>
  );
}
