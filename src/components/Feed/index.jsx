import React from "react";
import "./styles.css";
import { NavLink } from "react-router-dom";
import CardBible from "../CardBible";
import CardAcampOne from "../CardAcampOne";

export const Feed = () => {
  return (
    <>
      <section className="home-container">
        <div className="home-content">
          <NavLink to="/subscribe" className="home-frase">
            <h4 className="home-conv"></h4>
          </NavLink>
          <CardBible />
          <CardAcampOne />
        </div>
      </section>
    </>
  );
};
