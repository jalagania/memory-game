import { useGlobalContext } from "../context";
import "./Footer.css";

function Footer() {
  const { playerNumber, moves, getTime, currentPlayer } = useGlobalContext();
  const player = playerNumber > 1 ? "multi" : "solo";
  const players = Array(playerNumber).fill(0);

  return (
    <footer className="game-footer">
      <div className="section-container">
        <div className="footer-box">
          {player === "multi" && (
            <div className="multiplayer-stats">
              {players.map((_, index) => (
                <div
                  key={index}
                  className={`player-stats ${currentPlayer === index ? "active" : ""}`}
                >
                  <p className="player-text">Player {index + 1}</p>
                  <p className="player-score">0</p>
                </div>
              ))}
            </div>
          )}
          {player === "solo" && (
            <div className="solo-stats">
              <div className="time-box">
                <p className="button-text">Time</p>
                <p className="player-time">{getTime()}</p>
              </div>
              <div className="moves-box">
                <p className="button-text">Moves</p>
                <p className="player-score">{moves}</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </footer>
  );
}

export default Footer;
