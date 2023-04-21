import { useGlobalContext } from "../context";
import "./RestartButton.css";

function RestartButton() {
  const { boardItems, restartGame } = useGlobalContext();

  function handleRestart() {
    boardItems.forEach((_, index) => {
      document.querySelector(".game-board")!.children[index].className = "btn-item";
    });
    restartGame();
  }

  return (
    <button className="btn-restart" onClick={handleRestart}>
      Restart
    </button>
  );
}

export default RestartButton;
