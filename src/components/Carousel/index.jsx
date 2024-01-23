import React from "react";
import "./styles.css";
import photo from "../../assets/imagens/acamp-photo2.png"

export const Carousel = () => {
  return (
    <div className="carousel-container">
      <div className="carousel-content">
        <div className="carousel-images">
          <img
            className="image"
            src={photo}
            alt=""
          />
        </div>
      </div>
    </div>
  );
};
