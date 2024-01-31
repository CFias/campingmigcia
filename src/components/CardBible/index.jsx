import React from "react";
import "./styles.css";

export default function CardBible() {
  return (
    <section className="card-bible-container">
      <div className="card-bible-content">
        <div className="card-bible-text">
          <p className="bible-text">
            O Deus que concede perseverança e ânimo dê a vocês um espírito de
            unidade, segundo Cristo Jesus, para que com um só coração e uma só
            voz vocês glorifiquem ao Deus e Pai de nosso Senhor Jesus Cristo.
            Portanto, aceitem-se uns aos outros, da mesma forma com que Cristo
            os aceitou, a fim de que vocês glorifiquem a Deus.{" "}
          </p>
          <span className="card-bible-vs">Romanos 15:5-7</span>
        </div>
        <div className="card-bible-image"></div>
      </div>
    </section>
  );
}
