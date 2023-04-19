import { useGlobalContext } from "../context";
import "./Footer.css";

function Footer() {
  const { playerNumber } = useGlobalContext();
  const player = playerNumber > 1 ? "multi" : "solo";
  const players = Array(playerNumber).fill(0);

  return (
    <footer className="game-footer">
      <div className="section-container">
        <div className="footer-box">
          {player === "multi" && (
            <div className="multiplayer-buttons">
              {players.map((player, index) => (
                <button
                  key={index}
                  className="btn-player"
                  name={index.toString()}
                >
                  <p className="player-text">Player {index + 1}</p>
                  <p className="player-score">0</p>
                </button>
              ))}
            </div>
          )}
          {player === "solo" && (
            <div className="solo-buttons">
              <div className="time-box">
                <p className="button-text">Time</p>
                <p className="player-time">1:53</p>
              </div>
              <div className="moves-box">
                <p className="button-text">Moves</p>
                <p className="player-score">0</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </footer>
  );
}

export default Footer;
