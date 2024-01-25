import React from "react";
import "./styles.css";

export default function Recommend() {

  return (
    <>
        <div className="recommend-container">
          <div className="recommend-content">
            <div className="recommend-text">
              <h2 className="text-rec">
                Paz, queridos! <br /> O que vocês querem no ACAMP MIG Cia 2024 ?
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
