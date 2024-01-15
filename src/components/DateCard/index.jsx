import "./styles.css";

export const DateCard = () => {
  return (
    <div className="date-container">
      <div className="date-content">
        <div className="date-card-frase">
          <p className="date-frase">É aqui que eu me sinto muito bem!</p>
        </div>
        <div className="date-card-time">
          <h2 className="date-time">17, 18 e 19 de maio!</h2>
        </div>
        <div className="date-card-btn">
          <button className="date-btn">
            Inscreva-se
          </button>
        </div>
      </div>
    </div>
  );
};
