import { useGlobalContext } from "../context";
import "./Footer.css";

function Footer() {
  const { playerNumber, moves, getTime, currentPlayer, scores } = useGlobalContext();
  const players = Array(playerNumber).fill(0);
  const playerText = window.innerWidth <= 425 ? "P" : "Player ";

  return (
    <footer className="game-footer">
      <div className="section-container">
        <div className="footer-box">
          {playerNumber > 1 && (
            <div className="multiplayer-stats">
              {players.map((_, index) => (
                <div
                  key={index}
                  className={`player-stats ${currentPlayer === index ? "active" : ""}`}
                >
                  <p className="player-text">
                    {playerText}
                    {index + 1}
                  </p>
                  <p className="player-score">{scores[index]}</p>
                </div>
              ))}
            </div>
          )}
          {playerNumber === 1 && (
            <div className="solo-stats">
              <div className="time-box">
                <p className="solo-text">Time</p>
                <p className="solo-time">{getTime()}</p>
              </div>
              <div className="moves-box">
                <p className="solo-text">Moves</p>
                <p className="solo-score">{moves}</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </footer>
  );
}

export default Footer;
