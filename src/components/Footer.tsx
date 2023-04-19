import "./Footer.css";

function Footer({ name }: { name: string }) {
  return (
    <footer className="game-footer">
      <div className="section-container">
        <div className="footer-box">
          {name !== "solo" && (
            <div className="multiplayer-buttons">
              <button className="btn-player" name="one">
                <p className="player-text">Player 1</p>
                <p className="player-score">0</p>
              </button>
              <button className="btn-player active" name="two">
                <p className="player-text">Player 2</p>
                <p className="player-score">0</p>
              </button>
              <button className="btn-player" name="three">
                <p className="player-text">Player 3</p>
                <p className="player-score">0</p>
              </button>
              <button className="btn-player" name="four">
                <p className="player-text">Player 4</p>
                <p className="player-score">0</p>
              </button>
            </div>
          )}
          {name === "solo" && (
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
