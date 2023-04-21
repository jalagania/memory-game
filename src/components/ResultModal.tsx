import { useGlobalContext } from "../context";
import NewGameButton from "./NewGameButton";
import RestartButton from "./RestartButton";
import "./ResultModal.css";

function ResultModal() {
  const { playerNumber } = useGlobalContext();
  const player = playerNumber > 1 ? "multi" : "solo";
  let titleMulti = "";
  const title = player === "solo" ? "You did it!" : titleMulti;
  const subtitle =
    player === "solo" ? "Game over! Here's how you got on…" : "Game over! Here are the results…";

  return (
    <div className="modal-container">
      <div className="result-box">
        <h1 className="result-title">{title}</h1>
        <p className="result-subtitle">{subtitle}</p>
        <div className="stats-box-container">
          <div className="stats-box">
            <p className="stats-text">Time Elapsed</p>
            <p className="stats-score">1:53</p>
          </div>
          <div className="stats-box">
            <p className="stats-text">Moves Taken</p>
            <p className="stats-score">39 Moves</p>
          </div>
        </div>
        <div className="result-box-buttons">
          <RestartButton />
          <NewGameButton location="modal" />
        </div>
      </div>
      <div className="modal-bg"></div>
    </div>
  );
}

export default ResultModal;
