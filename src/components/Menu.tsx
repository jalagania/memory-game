import { useGlobalContext } from "../context";
import "./Menu.css";

function Menu() {
  const {
    setShowMenu,
    setShowGame,
    theme,
    setTheme,
    playerNumber,
    setPlayerNumber,
    gridSize,
    setGridSize,
  } = useGlobalContext();

  function handleThemeButton(
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) {
    setTheme(event.currentTarget.textContent!.toLowerCase());
  }

  function handleNumberButton(
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) {
    setPlayerNumber(+event.currentTarget.textContent!);
  }

  function handleGridButton(
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) {
    setGridSize(+event.currentTarget.textContent!.slice(0, 1));
  }

  function handleStartButton() {
    setShowMenu(false);
    setShowGame(true);
  }

  return (
    <div className="menu-container">
      <div className="menu-box-wrapper">
        <h1 className="game-title">memory</h1>
        <div className="menu-box">
          <div className="theme-box">
            <p className="theme-text">Select Theme</p>
            <div className="theme-buttons">
              <button
                className={theme === "numbers" ? "selected" : ""}
                onClick={handleThemeButton}
              >
                Numbers
              </button>
              <button
                className={theme === "icons" ? "selected" : ""}
                onClick={handleThemeButton}
              >
                Icons
              </button>
            </div>
          </div>
          <div className="players-box">
            <p className="players-text">Number of Players</p>
            <div className="players-buttons">
              <button
                className={playerNumber === 1 ? "selected" : ""}
                onClick={handleNumberButton}
              >
                1
              </button>
              <button
                className={playerNumber === 2 ? "selected" : ""}
                onClick={handleNumberButton}
              >
                2
              </button>
              <button
                className={playerNumber === 3 ? "selected" : ""}
                onClick={handleNumberButton}
              >
                3
              </button>
              <button
                className={playerNumber === 4 ? "selected" : ""}
                onClick={handleNumberButton}
              >
                4
              </button>
            </div>
          </div>
          <div className="grid-box">
            <p className="grid-text">Grid Size</p>
            <div className="grid-buttons">
              <button
                className={gridSize === 4 ? "selected" : ""}
                onClick={handleGridButton}
              >
                4x4
              </button>
              <button
                className={gridSize === 6 ? "selected" : ""}
                onClick={handleGridButton}
              >
                6x6
              </button>
            </div>
          </div>
          <button className="btn-start" onClick={handleStartButton}>
            Start Game
          </button>
        </div>
      </div>
    </div>
  );
}

export default Menu;
