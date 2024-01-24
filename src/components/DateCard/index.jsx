import { NavLink } from "react-router-dom";
import "./styles.css";

export const DateCard = () => {
  return (
    <div className="date-container">
      <div className="date-content">
        <div className="date-card-frase">
          <h2 className="date-frase">
            Segundo acampamento MIG CIA! <br /> Dias 17, 18 e 19 de Maio.
          </h2>
        </div>
        <NavLink to="/register" className="date-btn">
          Inscreva-se
        </NavLink>
      </div>
    </div>
  );
};
