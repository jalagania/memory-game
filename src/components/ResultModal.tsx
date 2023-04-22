import { useGlobalContext } from "../context";
import NewGameButton from "./NewGameButton";
import RestartButton from "./RestartButton";
import "./ResultModal.css";

function ResultModal() {
  const { playerNumber, moves, getTime, scores } = useGlobalContext();
  let titleMulti = "";
  const title = playerNumber === 1 ? "You did it!" : titleMulti;
  const subtitle =
    playerNumber === 1 ? "Game over! Here's how you got on…" : "Game over! Here are the results…";
  const results = scores
    .map((score, index) => ({ player: index + 1, score: score }))
    .sort((a, b) => b.score - a.score);

  return (
    <div className="modal-container">
      <div className="result-box">
        <h1 className="result-title">{title}</h1>
        <p className="result-subtitle">{subtitle}</p>
        {playerNumber === 1 && (
          <div className="stats-box-container">
            <div className="stats-box">
              <p className="stats-text">Time Elapsed</p>
              <p className="stats-score">{getTime()}</p>
            </div>
            <div className="stats-box">
              <p className="stats-text">Moves Taken</p>
              <p className="stats-score">{moves} Moves</p>
            </div>
          </div>
        )}
        {playerNumber > 1 && (
          <div className="stats-box-container">
            {results.map((result, index) => (
              <div key={index} className="stats-box">
                <p className="stats-text">Player {result.player}</p>
                <p className="stats-score">{result.score} Pairs</p>
              </div>
            ))}
          </div>
        )}
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
