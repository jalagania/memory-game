import { useGlobalContext } from "../context";
import "./NewGameButton.css";

function NewGameButton({ location }: { location: string }) {
  const { setShowMenu, setShowGame, setShowResult } = useGlobalContext();
  const name = location === "modal" ? "Setup New Game" : "New Game";

  function handleNewGame() {
    setShowMenu(true);
    setShowGame(false);
    setShowResult(false);
  }

  return (
    <button className="btn-new-game" onClick={handleNewGame}>
      {name}
    </button>
  );
}

export default NewGameButton;
